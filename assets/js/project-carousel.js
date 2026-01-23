// === CAROUSEL JAVASCRIPT ===

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel');
  
  // Vérifier si le carousel existe sur la page
  if (!carousel) return;
  
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const indicators = Array.from(carousel.querySelector('.carousel-indicators').children);
  
  let currentIndex = 0;
  
  // Fonction pour afficher un slide spécifique
  function goToSlide(index) {
    // Retirer la classe active de tous les slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
      indicator.setAttribute('aria-selected', 'false');
    });
    
    // Ajouter la classe active au slide actuel
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    indicators[index].setAttribute('aria-selected', 'true');
    
    currentIndex = index;
  }
  
  // Bouton précédent
  prevBtn.addEventListener('click', function() {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  });
  
  // Bouton suivant
  nextBtn.addEventListener('click', function() {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  });
  
  // Indicateurs cliquables
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      goToSlide(index);
    });
  });
  
  // Navigation au clavier (optionnel mais recommandé pour l'accessibilité)
  carousel.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
  
  // Auto-play optionnel (décommente si tu veux)
  /*
  let autoplayInterval;
  
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      nextBtn.click();
    }, 5000); // Change d'image toutes les 5 secondes
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  // Démarrer l'autoplay
  startAutoplay();
  
  // Arrêter l'autoplay au hover
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  
  // Arrêter l'autoplay lors de l'interaction
  prevBtn.addEventListener('click', stopAutoplay);
  nextBtn.addEventListener('click', stopAutoplay);
  indicators.forEach(indicator => {
    indicator.addEventListener('click', stopAutoplay);
  });
  */
});