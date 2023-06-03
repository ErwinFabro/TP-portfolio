document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav ul li a');
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      var targetSection = document.querySelector(event.target.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  