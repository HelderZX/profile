<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <h3 class="footer-name">Helder Andrade</h3>
          <p class="footer-tagline">Developer</p>
        </div>
        <div class="footer-links">
          <a href="#profile">Perfil</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#projects">Projetos</a>
          <a href="#experiences">Experiência</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="m-0">&copy; {{ currentYear }} Helder Andrade. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-section {
  background: #0a0a0a;
  padding: 3rem 2rem 1.5rem;
}

.footer-container {
  max-width: 900px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 1px solid #1a1a1a;
}

.footer-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  margin: 0;
}

.footer-tagline {
  font-size: 0.8rem;
  color: #555;
  margin: 0.2rem 0 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-links a {
  font-size: 0.85rem;
  color: #666;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--p-primary-400);
}

.footer-bottom {
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: #444;
}

@media (max-width: 576px) {
  .footer-top {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
