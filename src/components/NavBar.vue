<template>
  <Menubar :model="menuItems" class="nav-bar fixed top-0 left-0 right-0 z-5">
    <template #start>
      <a href="#profile">
      </a>
    </template>
    <template #item="{ item, props }">
      <a v-bind="props.action" :href="item.url" class="nav-link">{{ item.label }}</a>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <Button :label="t('nav.resume')" icon="pi pi-download" outlined @click="downloadResume" />
        <Select v-model="currentLocale" :options="langOptions" optionLabel="label" optionValue="value" @change="changeLanguage" />
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Select from 'primevue/select'

const { t, locale } = useI18n()
const currentLocale = ref(locale.value)

const langOptions = [
  { label: 'PT', value: 'pt' },
  { label: 'EN', value: 'en' },
  { label: 'FR', value: 'fr' },
]

const menuItems = computed(() => [
  { label: t('nav.profile'), url: '#profile' },
  { label: t('nav.technologies'), url: '#technologies' },
  { label: t('nav.projects'), url: '#projects' },
  { label: t('nav.experiences'), url: '#experiences' },
])

function changeLanguage() {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

function downloadResume() {
  const lang = locale.value === 'pt' ? 'PT' : 'EN'
  window.open(`/Resume - Helder Andrade - ${lang}.pdf`, '_blank')
}
</script>

<style scoped>
.nav-bar {
  background: rgba(17, 17, 17, 0.9) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: none !important;
  border-bottom: 1px solid #1e1e1e !important;
}

.nav-link {
  color: #888 !important;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 0.5rem 0.75rem !important;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: #fff !important;
  background: rgba(255, 255, 255, 0.06) !important;
}

/* Navbar PrimeVue overrides */
:deep(.p-button.p-button-outlined) {
  border-color: var(--p-primary-400) !important;
  color: var(--p-primary-400) !important;
  background: transparent !important;
}
:deep(.p-button.p-button-outlined:hover) {
  background: rgba(239, 131, 84, 0.1) !important;
  border-color: var(--p-primary-300) !important;
  color: var(--p-primary-300) !important;
}

:deep(.p-select) {
  background: #1a1a1a !important;
  border-color: #2a2a2a !important;
  color: #e5e5e5 !important;
}
:deep(.p-select:hover) {
  border-color: #444 !important;
}
:deep(.p-select-label) {
  color: #e5e5e5 !important;
}
:deep(.p-select-dropdown) {
  color: #888 !important;
}

/* Menubar mobile toggle */
:deep(.p-menubar-button) {
  color: #ccc !important;
}
:deep(.p-menubar-button:hover) {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
}
</style>

<style>
/* Select panel (teleported to body) */
.p-select-overlay {
  background: #1a1a1a !important;
  border: 1px solid #2a2a2a !important;
  color: #e5e5e5 !important;
}
.p-select-overlay .p-select-option {
  color: #ccc !important;
}
.p-select-overlay .p-select-option:hover,
.p-select-overlay .p-select-option.p-focus {
  background: #222 !important;
  color: #fff !important;
}
.p-select-overlay .p-select-option.p-select-option-selected {
  background: var(--p-primary-400) !important;
  color: #fff !important;
}
</style>
