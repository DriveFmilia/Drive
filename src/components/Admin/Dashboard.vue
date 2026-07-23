<template>
  <div class="drive-container">
    
    <!-- Cabecera y Barra de Acciones -->
    <div class="drive-header">
      <div class="breadcrumb">
        <button v-if="currentFolder" @click="goBack" class="btn-back" title="Regresar">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button @click="resetToRoot" class="breadcrumb-btn">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          Mi Unidad
        </button>
        <span v-if="currentFolder" class="breadcrumb-current"> / <strong>{{ currentFolderName }}</strong></span>
      </div>

      <div class="drive-actions">
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar carpetas o imágenes..." 
            class="search-input"
          />
        </div>
        <button class="btn-primary" @click="openFolderModal = true">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>
          <span>Nueva Carpeta</span>
        </button>
        <label class="btn-secondary upload-label">
          <svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          <span>Subir Imágenes</span>
          <input type="file" multiple accept="image/*" @change="uploadImages" hidden />
        </label>
      </div>
    </div>

    <!-- Indicador de carga -->
    <div v-if="loading" class="loading-state">Cargando elementos...</div>

    <!-- Contenido: Listado -->
    <div v-else class="drive-grid">
      
      <!-- Si no hay nada -->
      <div v-if="filteredFolders.length === 0 && filteredImages.length === 0" class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <p>Esta carpeta está vacía o no hay resultados para la búsqueda.</p>
      </div>

      <!-- Carpetas -->
      <div 
        v-for="folder in filteredFolders" 
        :key="folder.id" 
        class="drive-item folder-card"
        @click="enterFolder(folder)"
      >
        <div class="item-icon-container">
          <svg class="folder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div class="item-info">
          <span class="item-name" :title="folder.name">{{ folder.name }}</span>
        </div>
        <div class="item-menu" @click.stop>
          <button @click="openRenameFolderModal(folder)" title="Renombrar">
            <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button @click="confirmDeleteFolder(folder.id)" title="Eliminar">
            <svg class="action-svg delete" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>

      <!-- Imágenes -->
      <div 
        v-for="image in filteredImages" 
        :key="image.id" 
        class="drive-item image-card"
      >
        <div class="image-preview" @click="previewImage(image)">
          <img :src="image.url" :alt="image.name" loading="lazy" />
        </div>
        <div class="item-info">
          <span class="item-name" :title="image.name">{{ image.name }}</span>
        </div>
        <div class="item-menu" @click.stop>
          <button @click="downloadImage(image)" title="Descargar">
            <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </button>
          <button @click="openRenameImageModal(image)" title="Renombrar">
            <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button @click="confirmDeleteImage(image)" title="Eliminar">
            <svg class="action-svg delete" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>

    </div>

    <!-- Modales -->
    <div v-if="openFolderModal" class="modal-overlay nested-modal" @click.self="openFolderModal = false">
      <div class="modal-box">
        <h3>Crear Nueva Carpeta</h3>
        <input type="text" v-model="newFolderName" placeholder="Nombre de la carpeta" class="modal-input" autofocus @keyup.enter="createFolder" />
        <div class="modal-buttons">
          <button class="btn-outline" @click="openFolderModal = false">Cancelar</button>
          <button class="btn-primary" @click="createFolder">Crear</button>
        </div>
      </div>
    </div>

    <div v-if="renameModalData.isOpen" class="modal-overlay nested-modal" @click.self="renameModalData.isOpen = false">
      <div class="modal-box">
        <h3>{{ renameModalData.title }}</h3>
        <input type="text" v-model="renameModalData.name" placeholder="Nuevo nombre" class="modal-input" autofocus @keyup.enter="executeRename" />
        <div class="modal-buttons">
          <button class="btn-outline" @click="renameModalData.isOpen = false">Cancelar</button>
          <button class="btn-primary" @click="executeRename">Guardar</button>
        </div>
      </div>
    </div>

    <div v-if="confirmModalData.isOpen" class="modal-overlay nested-modal">
      <div class="modal-box">
        <h3>Confirmar acción</h3>
        <p class="modal-text">{{ confirmModalData.message }}</p>
        <div class="modal-buttons">
          <button class="btn-outline" @click="confirmModalData.isOpen = false">Cancelar</button>
          <button class="btn-danger" @click="confirmModalData.onConfirm">Aceptar</button>
        </div>
      </div>
    </div>

    <div v-if="alertData.isOpen" class="modal-overlay nested-modal">
      <div class="modal-box text-center">
        <h3>Aviso</h3>
        <p class="modal-text">{{ alertData.message }}</p>
        <div class="modal-buttons" style="justify-content: center;">
          <button class="btn-primary" @click="alertData.isOpen = false">Aceptar</button>
        </div>
      </div>
    </div>

    <!-- Modal de Vista Previa Actualizado (con botón de cierre, eliminar y editar) -->
    <div v-if="selectedImagePreview" class="modal-overlay" @click="selectedImagePreview = null">
      <div class="preview-box" @click.stop>
        <!-- Botón de Tacha (Cerrar) -->
        <button class="preview-close-btn" @click="selectedImagePreview = null" title="Cerrar">
          <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <img :src="selectedImagePreview.url" alt="Vista previa" />
        
        <div class="preview-footer">
          <p class="preview-name" :title="selectedImagePreview.name">{{ selectedImagePreview.name }}</p>
          <div class="preview-actions">
            <button class="btn-secondary" @click="openRenameImageModalFromPreview(selectedImagePreview)" title="Editar nombre">
              <svg class="action-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <span>Editar</span>
            </button>
            <button class="btn-danger-soft" @click="confirmDeleteImageFromPreview(selectedImagePreview)" title="Eliminar foto">
              <svg class="action-svg delete" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              <span>Eliminar</span>
            </button>
            <button class="btn-primary" @click="downloadImage(selectedImagePreview)">Descargar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { supabase } from '../../../src/supabase.js';

const currentFolder = ref(null);
const currentFolderName = ref('');
const folderHistory = ref([]);
const folders = ref([]);
const images = ref([]);
const loading = ref(false);
const searchQuery = ref('');

const openFolderModal = ref(false);
const newFolderName = ref('');
const selectedImagePreview = ref(null);

const alertData = ref({ isOpen: false, message: '' });
const confirmModalData = ref({ isOpen: false, message: '', onConfirm: null });
const renameModalData = ref({ isOpen: false, title: '', name: '', type: '', item: null });

const downloadImage = async (image) => {
  try {
    const response = await fetch(image.url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = image.name || 'imagen';
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    showAlert('Error al descargar la imagen: ' + error.message);
  }
};

const showAlert = (message) => {
  alertData.value = { isOpen: true, message };
};

const fetchContents = async () => {
  loading.value = true;
  try {
    let queryF = supabase.from('folders').select('*');
    if (currentFolder.value) {
      queryF = queryF.eq('parent_id', currentFolder.value);
    } else {
      queryF = queryF.is('parent_id', null);
    }
    const { data: folderData, error: errF } = await queryF;
    if (errF) throw errF;
    folders.value = folderData || [];

    let queryI = supabase.from('images').select('*');
    if (currentFolder.value) {
      queryI = queryI.eq('folder_id', currentFolder.value);
    } else {
      queryI = queryI.is('folder_id', null);
    }
    const { data: imageData, error: errI } = await queryI;
    if (errI) throw errI;
    images.value = imageData || [];

  } catch (error) {
    console.error('Error al cargar contenido:', error.message);
  } finally {
    loading.value = false;
  }
};

const enterFolder = (folder, pushHistory = true) => {
  if (pushHistory) {
    folderHistory.value.push({ id: currentFolder.value, name: currentFolderName.value });
    window.history.pushState({ folderId: folder.id }, '');
  }
  currentFolder.value = folder.id;
  currentFolderName.value = folder.name;
  searchQuery.value = '';
  fetchContents();
};

const goBack = () => {
  if (folderHistory.value.length > 0) {
    const previous = folderHistory.value.pop();
    currentFolder.value = previous.id;
    currentFolderName.value = previous.name;
    searchQuery.value = '';
    fetchContents();
  } else {
    resetToRoot();
  }
};

const resetToRoot = () => {
  folderHistory.value = [];
  currentFolder.value = null;
  currentFolderName.value = '';
  searchQuery.value = '';
  fetchContents();
};

const handlePopState = () => {
  if (folderHistory.value.length > 0) {
    goBack();
  } else {
    resetToRoot();
  }
};

onMounted(() => {
  window.history.replaceState({ folderId: null }, '');
  window.addEventListener('popstate', handlePopState);
  fetchContents();
});

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState);
});

const createFolder = async () => {
  if (!newFolderName.value.trim()) return;
  try {
    const { error } = await supabase.from('folders').insert([{
      name: newFolderName.value.trim(),
      parent_id: currentFolder.value
    }]);
    if (error) throw error;
    newFolderName.value = '';
    openFolderModal.value = false;
    fetchContents();
  } catch (error) {
    showAlert('Error al crear carpeta: ' + error.message);
  }
};

const uploadImages = async (event) => {
  const files = event.target.files;
  if (!files.length) return;

  loading.value = true;
  try {
    for (let file of files) {
      const cleanFileName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]/g, "_");
      const fileName = `${Date.now()}_${cleanFileName}`;
      const folderPathSegment = currentFolder.value ? currentFolder.value : 'root';
      const filePath = `${folderPathSegment}/${fileName}`;

      const { error: storageError } = await supabase.storage
        .from('drive-images')
        .upload(filePath, file);

      if (storageError) throw storageError;

      const { data: publicURLData } = supabase.storage
        .from('drive-images')
        .getPublicUrl(filePath);

      const { error: dbError } = await supabase.from('images').insert([{
        name: file.name,
        url: publicURLData.publicUrl,
        folder_id: currentFolder.value
      }]);

      if (dbError) throw dbError;
    }
    fetchContents();
  } catch (error) {
    showAlert('Error al subir imágenes: ' + error.message);
  } finally {
    loading.value = false;
    event.target.value = '';
  }
};

const openRenameFolderModal = (folder) => {
  renameModalData.value = {
    isOpen: true,
    title: 'Renombrar Carpeta',
    name: folder.name,
    type: 'folder',
    item: folder
  };
};

const openRenameImageModal = (image) => {
  renameModalData.value = {
    isOpen: true,
    title: 'Renombrar Imagen',
    name: image.name,
    type: 'image',
    item: image
  };
};

const openRenameImageModalFromPreview = (image) => {
  openRenameImageModal(image);
};

const executeRename = async () => {
  const { type, item, name } = renameModalData.value;
  if (!name.trim() || name.trim() === item.name) {
    renameModalData.value.isOpen = false;
    return;
  }

  const table = type === 'folder' ? 'folders' : 'images';
  const { error } = await supabase.from(table).update({ name: name.trim() }).eq('id', item.id);
  
  renameModalData.value.isOpen = false;
  if (error) showAlert('Error: ' + error.message);
  else {
    await fetchContents();
    // Si estamos editando desde la vista previa, actualizar el objeto seleccionado para que refleje el nuevo nombre inmediatamente
    if (selectedImagePreview.value && selectedImagePreview.value.id === item.id) {
      selectedImagePreview.value = {
        ...selectedImagePreview.value,
        name: name.trim()
      };
    }
  }
};

const confirmDeleteFolder = (id) => {
  confirmModalData.value = {
    isOpen: true,
    message: '¿Estás seguro de eliminar esta carpeta y todo su contenido?',
    onConfirm: async () => {
      confirmModalData.value.isOpen = false;
      const { error } = await supabase.from('folders').delete().eq('id', id);
      if (error) showAlert('Error: ' + error.message);
      else fetchContents();
    }
  };
};

const confirmDeleteImage = (image) => {
  confirmModalData.value = {
    isOpen: true,
    message: '¿Eliminar esta imagen?',
    onConfirm: async () => {
      confirmModalData.value.isOpen = false;
      const urlParts = image.url.split('/drive-images/');
      if (urlParts.length > 1) {
        const filePath = urlParts[1];
        await supabase.storage.from('drive-images').remove([filePath]);
      }

      const { error } = await supabase.from('images').delete().eq('id', image.id);
      if (error) showAlert('Error: ' + error.message);
      else {
        selectedImagePreview.value = null; // Cierra la previsualización si se elimina desde ahí
        fetchContents();
      }
    }
  };
};

const confirmDeleteImageFromPreview = (image) => {
  confirmDeleteImage(image);
};

const previewImage = (image) => {
  selectedImagePreview.value = image;
};

const filteredFolders = computed(() => {
  if (!searchQuery.value) return folders.value;
  return folders.value.filter(f => f.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const filteredImages = computed(() => {
  if (!searchQuery.value) return images.value;
  return images.value.filter(i => i.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>

<style scoped>
.drive-container {
  min-height: 100vh;
  background-color: #000000;
  padding: 20px;
  color: #ffffff;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .drive-container {
    padding: 32px;
  }
}

.drive-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-direction: column;
  gap: 16px;
  background: #0a0a0a;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 768px) {
  .drive-header {
    flex-direction: row;
    padding: 20px 24px;
    margin-bottom: 32px;
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .breadcrumb {
    width: auto;
  }
}

.btn-back {
  background: #171717;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-back:hover {
  background: #262626;
}

.breadcrumb-btn {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
}

.breadcrumb-btn:hover {
  color: #60a5fa;
}

.breadcrumb-current {
  color: #9ca3af;
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drive-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

@media (min-width: 768px) {
  .drive-actions {
    width: auto;
    flex-wrap: nowrap;
  }
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

@media (min-width: 768px) {
  .search-wrapper {
    width: auto;
  }
}

.search-icon {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  stroke: #6b7280;
}

.search-input {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 14px 10px 38px;
  border-radius: 10px;
  color: #fff;
  outline: none;
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s;
}

@media (min-width: 768px) {
  .search-input {
    width: 220px;
  }
}

.search-input:focus {
  border-color: #3b82f6;
  background: #171717;
}

.icon-svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.btn-primary, .btn-secondary, .upload-label, .btn-danger-soft {
  flex: 1;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .btn-primary, .btn-secondary, .upload-label, .btn-danger-soft {
    flex: unset;
    font-size: 0.9rem;
    padding: 10px 18px;
  }
}

.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary, .upload-label {
  background: #171717;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.2s, border-color 0.2s;
}

.btn-secondary:hover, .upload-label:hover {
  background: #262626;
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-danger-soft {
  background: rgba(220, 38, 38, 0.1);
  color: #ef4444;
  border: 1px solid rgba(220, 38, 38, 0.2);
  transition: background 0.2s;
}

.btn-danger-soft:hover {
  background: rgba(220, 38, 38, 0.2);
}

.btn-outline {
  background: transparent;
  color: #d1d5db;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
}

.btn-danger {
  background: #dc2626;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
}
.btn-danger:hover {
  background: #b91c1c;
}

.drive-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (min-width: 640px) {
  .drive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }
}

@media (min-width: 1024px) {
  .drive-grid {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 20px;
  }
}

.drive-item {
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  transition: transform 0.2s, border-color 0.2s;
}

@media (min-width: 640px) {
  .drive-item {
    flex-direction: column;
    align-items: stretch;
    padding: 14px;
    border-radius: 14px;
    gap: 0;
  }
}

.drive-item:hover {
  border-color: rgba(59, 130, 246, 0.4);
}

.folder-card {
  cursor: pointer;
}

.item-icon-container {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-radius: 8px;
  margin-bottom: 0;
}

@media (min-width: 640px) {
  .item-icon-container {
    width: 100%;
    height: 110px;
    border-radius: 10px;
    margin-bottom: 12px;
  }
}

.folder-svg {
  width: 24px;
  height: 24px;
  stroke: #3b82f6;
}

@media (min-width: 640px) {
  .folder-svg {
    width: 48px;
    height: 48px;
  }
}

.image-preview {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: #121212;
  cursor: pointer;
}

@media (min-width: 640px) {
  .image-preview {
    width: 100%;
    height: 120px;
    border-radius: 10px;
  }
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 640px) {
  .item-info {
    margin: 6px 0;
  }
}

.item-name {
  font-size: 0.85rem;
  color: #e5e7eb;
}

@media (min-width: 768px) {
  .item-name {
    font-size: 0.9rem;
  }
}

.item-menu {
  display: flex;
  gap: 6px;
  opacity: 1;
  margin-top: 0;
  padding-top: 0;
  border-top: none;
  justify-content: flex-end;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .item-menu {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: auto;
    padding-top: 6px;
    opacity: 0;
    transition: opacity 0.2s;
    gap: 12px;
  }
  .drive-item:hover .item-menu {
    opacity: 1;
  }
}

.item-menu button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
}

@media (min-width: 768px) {
  .item-menu button {
    background: none;
    padding: 4px;
  }
  .item-menu button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.action-svg {
  width: 16px;
  height: 16px;
  stroke: #9ca3af;
}

.action-svg.delete:hover {
  stroke: #ef4444;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: 16px;
}

/* Si un modal se abre sobre la vista previa, le damos más z-index */
.modal-overlay.nested-modal {
  z-index: 6000;
}

.modal-box {
  background: #121212;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .modal-box {
    padding: 28px;
    gap: 20px;
  }
}

.modal-box h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.modal-text {
  color: #9ca3af;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;
}

.modal-input {
  width: 100%;
  padding: 12px;
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: #fff;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
}

.modal-input:focus {
  border-color: #3b82f6;
}

.modal-buttons {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
}

/* Estilos mejorados para la caja de previsualización */
.preview-box {
  background: #121212;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: relative;
}

.preview-close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;
}

.preview-close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.preview-box img {
  width: 100%;
  max-height: 60vh;
  border-radius: 8px;
  object-fit: contain;
  background: #000;
}

.preview-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

@media (min-width: 640px) {
  .preview-footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.preview-name {
  margin: 0;
  font-size: 0.95rem;
  color: #e5e7eb;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

@media (min-width: 640px) {
  .preview-name {
    max-width: 40%;
  }
}

.preview-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.empty-icon {
  width: 48px;
  height: 48px;
  stroke: #4b5563;
}
</style>