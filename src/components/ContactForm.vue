<template>
  <section id="contact" class="contact-section py-7 px-3">
    <div class="section-container">
      <h2 class="section-title text-center">
        {{ t('sections.contact') }}
      </h2>
      <div class="grid">
        <!-- Contact Info -->
        <div class="col-12 md:col-5">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <i class="pi pi-envelope"></i>
              </div>
              <div>
                <p class="info-label">Email</p>
                <p class="info-value">helder@helderzx.website</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="pi pi-github"></i>
              </div>
              <div>
                <p class="info-label">GitHub</p>
                <a href="https://github.com/HelderZX" target="_blank" class="info-value info-link">github.com/HelderZX</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="pi pi-instagram"></i>
              </div>
              <div>
                <p class="info-label">Instagram</p>
                <a href="https://www.instagram.com/helder_andrade12/" target="_blank" class="info-value info-link">@helder_andrade12</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="col-12 md:col-7">
          <form ref="formRef" @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-row">
              <InputText name="name" :placeholder="t('contact.name_placeholder')" required fluid />
              <InputText name="email" type="email" :placeholder="t('contact.email_placeholder')" required fluid />
            </div>
            <Textarea name="message" :placeholder="t('contact.message_placeholder')" rows="5" required fluid />
            <div ref="turnstileRef" class="turnstile-container"></div>
            <Button type="submit" :label="isSending ? '' : t('contact.submit')"
              :icon="isSending ? 'pi pi-spin pi-spinner' : 'pi pi-send'" :disabled="isSending || !turnstileToken" class="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  </section>

  <Toast position="bottom-right" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue/usetoast'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { sendEmail } from '@/plugins/emailjs'

const TURNSTILE_SITE_KEY = '0x4AAAAAAC0SXBcZNP0kzedf'

const { t } = useI18n()
const toast = useToast()
const formRef = ref(null)
const turnstileRef = ref(null)
const isSending = ref(false)
const turnstileToken = ref(null)
let turnstileWidgetId = null

onMounted(() => {
  renderTurnstile()
})

function renderTurnstile() {
  const interval = setInterval(() => {
    if (window.turnstile && turnstileRef.value) {
      clearInterval(interval)
      turnstileWidgetId = window.turnstile.render(turnstileRef.value, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        callback: (token) => { turnstileToken.value = token },
        'expired-callback': () => { turnstileToken.value = null },
        'error-callback': () => { turnstileToken.value = null },
      })
    }
  }, 100)
}

async function handleSubmit() {
  if (!formRef.value || !turnstileToken.value) return

  isSending.value = true
  try {
    await sendEmail(formRef.value)
    toast.add({ severity: 'success', summary: t('contact.sent'), life: 4000 })
    formRef.value.reset()
  } catch (error) {
    toast.add({ severity: 'error', summary: t('contact.error'), detail: JSON.stringify(error), life: 5000 })
  } finally {
    isSending.value = false
    turnstileToken.value = null
    if (turnstileWidgetId !== null) {
      window.turnstile.reset(turnstileWidgetId)
    }
  }
}
</script>

<style scoped>
.contact-section {
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

/* Contact info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--p-primary-400);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.info-label {
  font-size: 0.75rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

.info-link {
  transition: color 0.2s;
  display: block;
}

.info-link:hover {
  color: var(--p-primary-400);
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 576px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.turnstile-container {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  align-self: flex-end;
}
</style>
