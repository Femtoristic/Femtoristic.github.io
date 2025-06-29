// Working Testimonials Carousel - Text moves between fixed positions

document.addEventListener('DOMContentLoaded', function() {
  // Get translations from global if available, fallback to static
  const getTestimonials = () => {
    if (window.translations && window.currentLang && window.translations[window.currentLang]) {
      const t = window.translations[window.currentLang];
      return [
        {quote: t.testimonial1?.quote, name: t.testimonial1?.name},
        {quote: t.testimonial2?.quote, name: t.testimonial2?.name},
        {quote: t.testimonial3?.quote, name: t.testimonial3?.name}
      ].filter(x => x.quote && x.name);
    }
    // fallback static
    return [
      {quote: '"Dieser Service hat meine Erwartungen übertroffen!"', name: '- Anna S.'},
      {quote: '"Professionell, schnell und zuverlässig. Sehr empfehlenswert."', name: '- Markus W.'},
      {quote: '"Die Zusammenarbeit war angenehm und das Ergebnis hervorragend."', name: '- Laura K.'}
    ];
  };

  let testimonials = getTestimonials();
  let currentIndex = 0;

  const testimonialEls = Array.from(document.querySelectorAll('.testimonial-list .testimonial'));

  function updateCarousel() {
    if (testimonialEls.length !== 3) return;
    
    const len = testimonials.length;
    
    // Set the CSS classes for positioning (cards stay in place)
    testimonialEls[0].className = 'testimonial left';
    testimonialEls[1].className = 'testimonial center';
    testimonialEls[2].className = 'testimonial right';
    
    // Move the text content through the positions
    // Left position gets current testimonial
    testimonialEls[0].querySelector('p').textContent = testimonials[currentIndex].quote;
    testimonialEls[0].querySelector('h4').textContent = testimonials[currentIndex].name;
    
    // Center position gets next testimonial
    const centerIndex = (currentIndex + 1) % len;
    testimonialEls[1].querySelector('p').textContent = testimonials[centerIndex].quote;
    testimonialEls[1].querySelector('h4').textContent = testimonials[centerIndex].name;
    
    // Right position gets the testimonial after that
    const rightIndex = (currentIndex + 2) % len;
    testimonialEls[2].querySelector('p').textContent = testimonials[rightIndex].quote;
    testimonialEls[2].querySelector('h4').textContent = testimonials[rightIndex].name;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  }

  // Auto-advance every 4 seconds
  setInterval(nextSlide, 4000);

  // Listen for language change
  window.addEventListener('languageChanged', function() {
    testimonials = getTestimonials();
    currentIndex = 0;
    updateCarousel();
  });

  // Initial setup
  updateCarousel();
}); 