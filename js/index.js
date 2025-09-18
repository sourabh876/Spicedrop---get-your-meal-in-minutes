const boxes = document.querySelectorAll(' .leftslide, .fade-trigger');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Adjust this to control when the animation triggers
});

boxes.forEach(box => observer.observe(box));