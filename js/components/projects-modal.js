// Projekte entdecken Modal Logik
// Dynamische Inhalte je nach Sprache
const projectsModalContent = {
  de: {
    title: 'Projektbeispiele',
    desc: 'Hier können Unternehmen ihre erfolgreich abgeschlossenen Projekte, Referenzen oder Fallstudien präsentieren.<br><em>Nutzen Sie diesen Bereich, um potenziellen Kunden Ihre Arbeit und Kompetenzen zu zeigen.</em>',
    imgAlt: 'Projektbeispiel',
    imgText: '<strong>Beispiel:</strong> Hier könnte ein Screenshot, ein Mockup oder ein Foto Ihres Projekts stehen.',
    hint: '<em>Sie haben noch keine Projekte? Kein Problem – fügen Sie später einfach Ihre eigenen Referenzen hinzu!</em>'
  },
  en: {
    title: 'Example Projects',
    desc: 'Here you can showcase your completed projects, references, or case studies.<br><em>Use this area to present your work and skills to potential clients.</em>',
    imgAlt: 'Project Example',
    imgText: '<strong>Example:</strong> This could be a screenshot, mockup, or photo of your project.',
    hint: '<em>No projects yet? No problem – just add your own references later!</em>'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('projectsBtn');
  const modal = document.getElementById('projectsModal');
  const closeBtn = document.getElementById('closeProjectsModal');

  function setModalContent(lang) {
    const c = projectsModalContent[lang] || projectsModalContent['de'];
    modal.querySelector('h2').textContent = c.title;
    modal.querySelector('p').innerHTML = c.desc;
    const img = modal.querySelector('.project-example img');
    img.alt = c.imgAlt;
    modal.querySelector('.project-example div').innerHTML = c.imgText;
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

  // Optional: Update modal content on language switch
  if (window.currentLang) {
    setModalContent(window.currentLang);
  }
}); 