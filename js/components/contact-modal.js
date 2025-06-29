// Kontakt-Modal Logik
// Dynamische Inhalte je nach Sprache
const contactModalContent = {
  de: {
    title: 'Kontakt aufnehmen',
    desc: 'Bitte beachte: Dies ist kein Kauf und kein Newsletter. Mit dem Absenden des Formulars nimmst du Kontakt zu mir auf.',
    nameLabel: 'Name (optional)',
    namePlaceholder: 'Dein Name',
    emailLabel: 'E-Mail-Adresse*',
    emailPlaceholder: 'dein@email.de',
    messageLabel: 'Nachricht*',
    messagePlaceholder: 'Deine Nachricht',
    privacy: 'Ich akzeptiere die <a href="#">Datenschutzerklärung</a>.',
    submit: 'Absenden',
    hint: 'Deine Daten werden nur zur Bearbeitung deiner Anfrage verwendet. Weitere Infos findest du in der <a href="#">Datenschutzerklärung</a>.',
    alertRequired: 'Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.',
    alertSuccess: 'Danke für deine Nachricht! Ich melde mich zeitnah.'
  },
  en: {
    title: 'Contact Me',
    desc: 'Please note: This is not a purchase or a newsletter signup. By submitting this form, you are contacting me directly.',
    nameLabel: 'Name (optional)',
    namePlaceholder: 'Your name',
    emailLabel: 'Email address*',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Message*',
    messagePlaceholder: 'Your message',
    privacy: 'I accept the <a href="#">privacy policy</a>.',
    submit: 'Send',
    hint: 'Your data will only be used to process your request. For more information, see the <a href="#">privacy policy</a>.',
    alertRequired: 'Please fill in all required fields and accept the privacy policy.',
    alertSuccess: 'Thank you for your message! I will get back to you soon.'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('contactBtn');
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeContactModal');
  const form = document.getElementById('contactForm');

  function setModalContent(lang) {
    const c = contactModalContent[lang] || contactModalContent['de'];
    modal.querySelector('h2').textContent = c.title;
    modal.querySelector('p').innerHTML = c.desc;
    modal.querySelector('label[for="contactName"]').textContent = c.nameLabel;
    modal.querySelector('#contactName').placeholder = c.namePlaceholder;
    modal.querySelector('label[for="contactEmail"]').textContent = c.emailLabel;
    modal.querySelector('#contactEmail').placeholder = c.emailPlaceholder;
    modal.querySelector('label[for="contactMessage"]').textContent = c.messageLabel;
    modal.querySelector('#contactMessage').placeholder = c.messagePlaceholder;
    modal.querySelector('.checkbox').innerHTML = `<input type="checkbox" id="contactPrivacy" required> ${c.privacy}`;
    modal.querySelector('.btn.btn-primary').textContent = c.submit;
    modal.querySelector('.privacy-hint').innerHTML = c.hint;
  }

  if (openBtn) {
    openBtn.addEventListener('click', function() {
      setModalContent(window.currentLang || 'de');
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });
  }
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  });
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Einfache Validierung
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const privacy = document.getElementById('contactPrivacy').checked;
    const c = contactModalContent[window.currentLang || 'de'];
    if (!email || !message || !privacy) {
      alert(c.alertRequired);
      return;
    }
    alert(c.alertSuccess);
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    form.reset();
  });
}); 