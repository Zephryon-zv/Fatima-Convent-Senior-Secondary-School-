// Email Js
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactPhone = document.getElementById('contact-phone'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message')

const sendEmails = (e) => {
    e.preventDefault()

    // Check if the field has value
    if (contactName.value === '' || contactEmail.value === || contactPhone.value === || contactSubject.value === || contactMessage) {

        // Show message
        contactMessage.textContent = 'Write all the input fields'
    }
}
contactForm.addEventListener('submit', SendEmail)