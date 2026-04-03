<template>
  <section id="technologies" class="tech-section py-7 px-3">
    <div class="section-container">
      <h2 class="section-title text-center">
        {{ t('sections.technologies') }}
      </h2>
      <p class="section-subtitle text-center mb-5">Ferramentas e linguagens que utilizo no dia a dia</p>

      <div class="tech-grid">
        <div v-for="tech in technologies" :key="tech.name" class="tech-item">
          <div class="tech-icon">
            <img :src="tech.logo" :alt="tech.name" />
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import cssLogo from '@/images/logos/css.svg'
import jsLogo from '@/images/logos/javascript.svg'
import laravelLogo from '@/images/logos/laravel.svg'
import phpLogo from '@/images/logos/php.svg'
import vueLogo from '@/images/logos/vuejs.svg'
import bootstrapLogo from '@/images/logos/bootstrap.svg'
import nodejsLogo from '@/images/logos/nodejs.svg'
import tailwindLogo from '@/images/logos/tailwindcss.svg'

const { t } = useI18n()

const technologies = [
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'Laravel', logo: laravelLogo },
  { name: 'Vue.js', logo: vueLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'Node.js', logo: nodejsLogo },
  { name: 'Tailwind', logo: tailwindLogo },
]
</script>

<style scoped>
.tech-section {
  background: #111;
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #777;
  font-size: 0.9rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  transition: border-color 0.2s;
}

.tech-item:hover {
  border-color: var(--p-primary-400);
}

.tech-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.7);
  transition: filter 0.3s;
}

.tech-item:hover .tech-icon img {
  filter: grayscale(0%) brightness(1);
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #ddd;
}
</style>
