<template>
  <section id="profile" class="hero-section">
    <!-- Decorative SVG shapes -->
    <svg class="hero-svg shape-circle" width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="55" stroke="rgba(239,131,84,0.12)" stroke-width="1.5" />
      <circle cx="60" cy="60" r="35" stroke="rgba(239,131,84,0.07)" stroke-width="1" />
    </svg>

    <svg class="hero-svg shape-triangle" width="80" height="70" viewBox="0 0 80 70" fill="none">
      <path d="M40 5 L75 65 L5 65 Z" stroke="rgba(239,131,84,0.1)" stroke-width="1.5" />
    </svg>

    <svg class="hero-svg shape-cross" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <line x1="20" y1="5" x2="20" y2="35" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
      <line x1="5" y1="20" x2="35" y2="20" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
    </svg>

    <svg class="hero-svg shape-dots" width="100" height="100" viewBox="0 0 100 100" fill="none">
      <circle cx="10" cy="10" r="2" fill="rgba(239,131,84,0.2)" />
      <circle cx="40" cy="10" r="2" fill="rgba(239,131,84,0.12)" />
      <circle cx="70" cy="10" r="2" fill="rgba(239,131,84,0.15)" />
      <circle cx="10" cy="40" r="2" fill="rgba(239,131,84,0.1)" />
      <circle cx="40" cy="40" r="2" fill="rgba(239,131,84,0.18)" />
      <circle cx="70" cy="40" r="2" fill="rgba(239,131,84,0.08)" />
      <circle cx="10" cy="70" r="2" fill="rgba(239,131,84,0.14)" />
      <circle cx="40" cy="70" r="2" fill="rgba(239,131,84,0.1)" />
      <circle cx="70" cy="70" r="2" fill="rgba(239,131,84,0.2)" />
    </svg>

    <svg class="hero-svg shape-hex" width="90" height="100" viewBox="0 0 90 100" fill="none">
      <path d="M45 5 L85 27.5 L85 72.5 L45 95 L5 72.5 L5 27.5 Z" stroke="rgba(239,131,84,0.08)" stroke-width="1.5" />
    </svg>

    <svg class="hero-svg shape-square" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect x="5" y="5" width="40" height="40" rx="4" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" transform="rotate(15 25 25)" />
    </svg>

    <div class="hero-container">
      <div class="grid align-items-center justify-content-center hero-grid">
        <div class="col-12 md:col-5 flex flex-column gap-4 hero-text">
          <div>
            <p class="hero-greeting m-0">{{ t('greeting.hello') }}</p>
            <h1 class="hero-name m-0">{{ t('greeting.name') }}</h1>
            <p class="hero-role m-0 mt-2"><span class="hero-role-text">{{ displayedText }}</span><span class="hero-cursor">|</span></p>
          </div>

          <p class="hero-desc m-0 line-height-3">{{ t('intro.description') }}</p>

          <div class="flex gap-3 flex-wrap">
            <a href="#contact">
              <Button :label="t('sections.contact')" icon="pi pi-envelope" />
            </a>
            <a href="#projects">
              <Button :label="t('sections.projects')" icon="pi pi-code" outlined />
            </a>
          </div>

          <div class="flex gap-3 mt-2">
            <a href="https://www.instagram.com/helder_andrade12/" target="_blank" class="social-link">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="https://github.com/HelderZX" target="_blank" class="social-link">
              <i class="pi pi-github"></i>
            </a>
          </div>
        </div>

        <div class="col-12 md:col-5 md:col-offset-1 flex justify-content-center">
          <div class="hero-photo-container">
            <!-- Decorative circle outlines -->
            <div class="photo-ring ring-1"></div>
            <svg class="photo-ring ring-2" viewBox="0 0 345 345">
              <circle cx="172.5" cy="172.5" r="171.5" fill="none" stroke="rgba(239,131,84,0.12)" stroke-width="1" stroke-dasharray="14 10" />
            </svg>

            <div class="hero-photo-wrapper">
              <Skeleton v-if="!heroImageLoaded" shape="circle" width="100%" height="100%" class="hero-skeleton" />
              <img src="@/images/profile.png" alt="profile" class="hero-photo" :class="{ loaded: heroImageLoaded }" @load="heroImageLoaded = true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Skeleton from 'primevue/skeleton'

const { t, tm } = useI18n()
const currentIndex = ref(0)
const heroImageLoaded = ref(false)
const displayedText = ref('')
let timeout = null

const habilities = computed(() => tm('habilities'))

function typeWriter() {
  const word = habilities.value[currentIndex.value] || ''
  let charIndex = 0

  function typeChar() {
    if (charIndex <= word.length) {
      displayedText.value = word.slice(0, charIndex)
      charIndex++
      timeout = setTimeout(typeChar, 90)
    } else {
      timeout = setTimeout(eraseChar, 2000)
    }
  }

  function eraseChar() {
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1)
      timeout = setTimeout(eraseChar, 50)
    } else {
      currentIndex.value = (currentIndex.value + 1) % habilities.value.length
      timeout = setTimeout(typeWriter, 400)
    }
  }

  typeChar()
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => clearTimeout(timeout))
</script>

<style scoped>
.hero-section {
  background: #111;
  padding: 0 2rem;
  position: relative;
  overflow-x: hidden;
}

/* Decorative SVG shapes */
.hero-svg {
  position: absolute;
  pointer-events: none;
  z-index: 0;
}

.shape-circle {
  top: 10%;
  right: 8%;
}

.shape-triangle {
  bottom: 18%;
  right: 12%;
}

.shape-cross {
  top: 30%;
  left: 5%;
}

.shape-dots {
  bottom: 25%;
  left: 8%;
}

.shape-hex {
  top: 55%;
  right: 3%;
}

.shape-square {
  top: 15%;
  left: 12%;
}

.hero-container {
  max-width: 1100px;
  margin: 0 auto;
}

.hero-text {
  padding-top: 5rem;
}

.hero-greeting {
  font-size: 1.1rem;
  color: #999;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hero-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3.2rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.1;
}

.hero-role {
  font-size: 1.15rem;
  color: var(--p-primary-400);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.hero-role-text {
  border-right: 1px solid transparent;
}

.hero-cursor {
  color: var(--p-primary-400);
  font-weight: 300;
  animation: blink 0.7s step-end infinite;
  margin-left: 1px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-desc {
  font-size: 0.95rem;
  color: #aaa;
  max-width: 440px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #333;
  color: #999;
  font-size: 1.1rem;
  transition: border-color 0.2s, color 0.2s;
}

.social-link:hover {
  border-color: var(--p-primary-400);
  color: var(--p-primary-400);
}

.hero-photo-wrapper {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #222;
  position: relative;
  z-index: 1;
}

.hero-photo-container {
  position: relative;
  width: 340px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.photo-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  pointer-events: none;
}

.ring-1 {
  width: 310px;
  height: 310px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 131, 84, 0.35);
}

.ring-2 {
  width: 345px;
  height: 345px;
  transform: translate(-50%, -50%);
}

.hero-skeleton {
  position: absolute;
  inset: 0;
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero-photo.loaded {
  opacity: 1;
}

.hero-grid {
  min-height: 100vh;
}

@media (max-width: 768px) {
  .hero-grid {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-text {
    text-align: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }
  .hero-desc {
    max-width: 100%;
  }
  .hero-photo-wrapper {
    display: none;
  }
  .hero-photo-container {
    display: none;
  }
}
</style>
