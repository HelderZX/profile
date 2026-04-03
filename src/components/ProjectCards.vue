<template>
  <section id="projects" class="projects-section py-7 px-3">
    <div class="section-container">
      <h2 class="section-title text-center">
        {{ t('sections.projects') }}
      </h2>
      <p class="section-subtitle text-center mb-5">Alguns projetos pessoais que desenvolvi</p>

      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card" @click="openProject(project)">
          <div class="project-logo-area">
            <img :src="project.logo" :alt="project.id" class="project-logo" />
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.descriptions[0] }}</p>
            <div class="project-links">
              <span v-if="project.githubUrl" class="project-link">
                <i class="pi pi-github"></i> GitHub
              </span>
              <span v-if="project.liveUrl" class="project-link primary">
                <i class="pi pi-external-link"></i> {{ project.actionLabel }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog v-model:visible="dialogVisible" modal dismissableMask :showHeader="false" class="project-dialog">
      <template v-if="selectedProject">
        <!-- Hero image area -->
        <div class="dialog-hero">
          <Galleria :value="selectedProject.screens" :showThumbnails="false" showItemNavigators showIndicators :autoPlay="true" :transitionInterval="4000" :circular="true">
            <template #item="{ item }">
              <img :src="item.src" :alt="selectedProject.title" class="dialog-hero-img" />
            </template>
          </Galleria>
          <button class="dialog-close" @click="dialogVisible = false">
            <i class="pi pi-times"></i>
          </button>
        </div>

        <!-- Content area -->
        <div class="dialog-content">
          <div class="dialog-header-row">
            <img :src="selectedProject.logo" :alt="selectedProject.title" class="dialog-logo" />
            <div>
              <h2 class="dialog-title">{{ selectedProject.title }}</h2>
              <span class="dialog-tag">{{ selectedProject.id }}</span>
            </div>
          </div>

          <div class="dialog-descriptions">
            <p v-for="(desc, i) in selectedProject.descriptions" :key="i">{{ desc }}</p>
          </div>

          <div class="dialog-actions">
            <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" class="dialog-btn dialog-btn--ghost">
              <i class="pi pi-github"></i> GitHub
            </a>
            <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" class="dialog-btn dialog-btn--primary">
              <i class="pi pi-external-link"></i> {{ selectedProject.actionLabel }}
            </a>
          </div>
        </div>
      </template>
    </Dialog>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Dialog from 'primevue/dialog'
import Galleria from 'primevue/galleria'

import mapMindLogo from '@/images/map-mind/logo.svg'
import ticTacToeLogo from '@/images/tic-tac-toe/logo.png'
import timerLogo from '@/images/timer/logo.svg'

import mmScreen1 from '@/images/map-mind/screen1.png'
import mmScreen2 from '@/images/map-mind/screen2.png'
import ttScreen1 from '@/images/tic-tac-toe/screen1.png'
import ttScreen2 from '@/images/tic-tac-toe/screen2.png'
import tmScreen1 from '@/images/timer/screen1.png'
import tmScreen2 from '@/images/timer/screen2.png'
import tmScreen3 from '@/images/timer/screen3.png'

const { t } = useI18n()
const dialogVisible = ref(false)
const selectedProject = ref(null)

const projects = computed(() => [
  {
    id: 'map-mind',
    logo: mapMindLogo,
    title: t('project.mapmind.title'),
    descriptions: [t('project.mapmind.desc1'), t('project.mapmind.desc2')],
    liveUrl: 'https://mapmind.helderzx.website/',
    githubUrl: '',
    actionLabel: t('project.mapmind.open'),
    screens: [{ src: mmScreen1 }, { src: mmScreen2 }],
  },
  {
    id: 'tic-tac-toe',
    logo: ticTacToeLogo,
    title: t('project.tictactoe.title'),
    descriptions: [t('project.tictactoe.desc')],
    liveUrl: 'https://helderzx.github.io/tic-tac-toe/',
    githubUrl: 'https://github.com/HelderZX/tic-tac-toe',
    actionLabel: t('project.tictactoe.play'),
    screens: [{ src: ttScreen1 }, { src: ttScreen2 }],
  },
  {
    id: 'timer',
    logo: timerLogo,
    title: t('project.timer.title'),
    descriptions: [t('project.timer.desc')],
    liveUrl: 'https://helderzx.github.io/clock/',
    githubUrl: 'https://github.com/HelderZX/clock',
    actionLabel: t('project.timer.try'),
    screens: [{ src: tmScreen1 }, { src: tmScreen2 }, { src: tmScreen3 }],
  },
])

function openProject(project) {
  selectedProject.value = project
  dialogVisible.value = true
}
</script>

<style scoped>
.projects-section {
  background: #161616;
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

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.project-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: var(--p-primary-400);
}

.project-logo-area {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  border-radius: 10px;
}

.project-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.project-info {
  flex: 1;
  min-width: 0;
}

.project-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0.4rem 0;
}

.project-desc {
  font-size: 0.85rem;
  color: #999;
  line-height: 1.5;
  margin: 0 0 0.8rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  font-size: 0.8rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.project-link.primary {
  color: var(--p-primary-400);
}

@media (max-width: 576px) {
  .project-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .project-links {
    justify-content: center;
  }
}
</style>

<style>
/* ── Project Dialog ── */
.project-dialog.p-dialog {
  background: #141414 !important;
  border: 1px solid #222 !important;
  border-radius: 16px !important;
  overflow: hidden;
  width: min(600px, 92vw) !important;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6) !important;
}

.project-dialog .p-dialog-content {
  background: transparent !important;
  padding: 0 !important;
  color: #ccc !important;
}

/* Hero image */
.dialog-hero {
  position: relative;
  background: #0d0d0d;
}

.dialog-hero-img {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.dialog-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  color: #ccc;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.dialog-close:hover {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}

/* Content */
.dialog-content {
  padding: 1.6rem 1.8rem 1.8rem;
}

.dialog-header-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.dialog-logo {
  width: 46px;
  height: 46px;
  object-fit: contain;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 6px;
  flex-shrink: 0;
}

.dialog-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}

.dialog-tag {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--p-primary-400);
  margin-top: 2px;
  display: inline-block;
}

.dialog-descriptions p {
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.7;
  margin: 0 0 0.6rem;
}

.dialog-descriptions p:last-child {
  margin-bottom: 0;
}

/* Action buttons */
.dialog-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.2rem;
  border-top: 1px solid #222;
}

.dialog-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.3rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
  text-decoration: none !important;
}

.dialog-btn:hover {
  transform: translateY(-1px);
}

.dialog-btn--primary {
  background: var(--p-primary-400);
  color: #fff;
  border: 1px solid var(--p-primary-400);
}

.dialog-btn--primary:hover {
  background: var(--p-primary-500);
  border-color: var(--p-primary-500);
}

.dialog-btn--ghost {
  background: transparent;
  color: #bbb;
  border: 1px solid #333;
}

.dialog-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #555;
  color: #fff;
}

/* Galleria overrides */
.project-dialog .p-galleria {
  background: transparent !important;
  border-radius: 0 !important;
}

.project-dialog .p-galleria-indicators {
  padding: 0.6rem 0 !important;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.45)) !important;
}

.project-dialog .p-galleria-indicators .p-galleria-indicator button {
  width: 8px !important;
  height: 8px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.35) !important;
  transition: background 0.2s, transform 0.2s !important;
}

.project-dialog .p-galleria-indicators .p-galleria-indicator.p-galleria-indicator-active button {
  background: var(--p-primary-400) !important;
  transform: scale(1.25);
}

.project-dialog .p-galleria-prev-button,
.project-dialog .p-galleria-next-button {
  color: #fff !important;
  background: rgba(0, 0, 0, 0.4) !important;
  border-radius: 50% !important;
  width: 2.2rem !important;
  height: 2.2rem !important;
  backdrop-filter: blur(4px);
  transition: background 0.2s !important;
}

.project-dialog .p-galleria-prev-button:hover,
.project-dialog .p-galleria-next-button:hover {
  background: rgba(0, 0, 0, 0.65) !important;
}

/* Mask */
.p-dialog-mask {
  backdrop-filter: blur(4px);
}
</style>
