<template>
  <section id="experiences" class="experience-section py-7 px-3">
    <div class="section-container">
      <div class="grid">
        <!-- Education Column -->
        <div class="col-12 md:col-6">
          <h2 class="section-title mb-4">
            {{ t('sections.education') }}
          </h2>

          <div class="timeline">
            <div v-for="(item, idx) in educationEvents" :key="idx" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-period">{{ item.period }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-subtitle">{{ item.subtitle }}</p>
                <div class="timeline-details">
                  <p v-for="(line, i) in item.details" :key="i" class="timeline-detail">
                    <b v-if="line.bold">{{ line.bold }}</b> {{ line.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Column -->
        <div class="col-12 md:col-6">
          <h2 class="section-title mb-4">
            {{ t('sections.experience') }}
          </h2>

          <div class="timeline">
            <div v-for="(item, idx) in experienceEvents" :key="idx" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-period">{{ item.period }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <p class="timeline-subtitle">{{ item.subtitle }}</p>
                <div class="timeline-details">
                  <p v-for="(line, i) in item.details" :key="i" class="timeline-detail">
                    <b v-if="line.bold">{{ line.bold }}</b> {{ line.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const educationEvents = computed(() => [
  {
    title: t('education_details.secondary'),
    period: '2019 → 2022',
    subtitle: t('education_details.course'),
    details: [
      { bold: t('education_details.internship'), text: t('education_details.internship_desc') },
      { bold: t('education_details.languages'), text: t('education_details.languages_desc') },
      { bold: t('education_details.final_project'), text: t('education_details.final_project_desc') },
    ],
  },
])

const experienceEvents = computed(() => [
  {
    title: t('work.polissistemas.name'),
    period: '2022 → 2023',
    subtitle: t('work.polissistemas.role'),
    details: [
      { bold: '', text: t('work.polissistemas.desc1') },
      { bold: t('work.polissistemas.admin'), text: t('work.polissistemas.admin_desc') },
      { bold: '', text: t('work.polissistemas.monitoring') },
    ],
  },
  {
    title: t('work.controlink.name'),
    period: `2023 → ${currentYear}`,
    subtitle: t('work.controlink.role'),
    details: [
      { bold: '', text: t('work.controlink.desc') },
      { bold: t('work.controlink.technologies'), text: t('work.controlink.technologies_desc') },
      { bold: t('work.controlink.features'), text: t('work.controlink.features_desc') },
      { bold: '', text: t('work.controlink.servers') },
      { bold: '', text: t('work.controlink.meetings') },
    ],
  },
])
</script>

<style scoped>
.experience-section {
  background: #111;
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
}

/* Custom timeline */
.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: #2a2a2a;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -21px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--p-primary-400);
  border: 2px solid #111;
}

.timeline-content {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
}

.timeline-period {
  font-size: 0.75rem;
  color: var(--p-primary-400);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.3rem;
}

.timeline-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0.2rem 0;
}

.timeline-subtitle {
  font-size: 0.85rem;
  color: var(--p-primary-300);
  margin: 0 0 0.8rem 0;
  font-weight: 500;
}

.timeline-details {
  border-top: 1px solid #2a2a2a;
  padding-top: 0.7rem;
}

.timeline-detail {
  font-size: 0.85rem;
  color: #999;
  line-height: 1.6;
  margin: 0 0 0.3rem 0;
}

.timeline-detail b {
  color: #ccc;
}

@media (max-width: 768px) {
  .section-title {
    text-align: center;
  }
}
</style>
