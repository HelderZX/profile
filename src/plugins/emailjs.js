import emailjs from '@emailjs/browser'

const EMAIL_SERVICE_ID = 'service_ysx6h4o'
const EMAIL_TEMPLATE_ID = 'template_izdqvki'
const EMAIL_PUBLIC_KEY = '7J_uLiMM8wD79jxHH'

emailjs.init(EMAIL_PUBLIC_KEY)

/**
 * Send email via EmailJS
 * @param {HTMLFormElement} form
 * @returns {Promise}
 */
export function sendEmail(form) {
  return emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form)
}

export default { sendEmail }
