<template>
  <footer class="footer-custom">
    <div class="container">
      <div class="footer-main">
        <div class="brand-section">
          <div class="logo-wrapper">
            <img src="../../assets/logo.png" alt="The Gym" class="footer-logo">
          </div>
          <h3 class="brand-name">THE GYM</h3>
          <p class="brand-desc">Sistema de gestión de pagos y optimización deportiva.</p>
        </div>

        <div class="contact-section">
          <h4 class="section-title">MÁS INFORMACIÓN</h4>
          <div class="social-icons">
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.893-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <a href="mailto:TheGym@gmail.com" class="email-link">
            <svg class="email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            TheGym@gmail.com
          </a>
        </div>

        <div class="actions-section">
          <router-link to="/Record" class="btn btn-primary">EMPEZAR AHORA</router-link>
          <router-link to="/Login" class="btn btn-secondary">ACCESO STAFF</router-link>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="legal-links">
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Términos de Uso</a>
        </div>
        <p class="copyright">© 2026 The Gym. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700&display=swap');

.footer-custom {
  background: #000;
  color: white;
  padding: 40px 0 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
}

.brand-section {
  text-align: center;
  flex: 1;
}

.logo-wrapper {
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}

.footer-logo {
  width: 28px;
  filter: invert(1);
}

.brand-name {
  font-family: 'Archivo Black', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 0.5px;
}

.brand-desc {
  font-size: 0.75rem;
  opacity: 0.6;
  max-width: 220px;
  margin: 8px auto 0;
  line-height: 1.4;
}

.contact-section {
  text-align: center;
  flex: 1;
}

.section-title {
  font-family: 'Archivo Black', sans-serif;
  font-size: 0.8rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
}

.social-link {
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: transform 0.2s;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.social-link:hover {
  transform: scale(1.1);
}

.email-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  opacity: 0.8;
}

.email-icon { width: 14px; }

.actions-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  align-items: center;
}

.btn {
  width: 160px;
  padding: 12px;
  border-radius: 6px;
  font-family: 'Archivo Black', sans-serif;
  font-size: 0.75rem;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary {
  background: white;
  color: black;
  border: none;
}

.btn-secondary {
  background: #222;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn:hover {
  opacity: 0.85;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  opacity: 0.5;
}

.legal-links { display: flex; gap: 20px; }
.legal-links a { color: white; text-decoration: none; }

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: 40px;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    text-align: center;
  }
}
</style>