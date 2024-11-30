function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}

document.querySelector(".navbar-toggler").addEventListener("click", function() {
  playSound('./Sounds/click1.wav');
});

document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("mouseover", function() {
    playSound('./Sounds/click1.wav');
  });
});

document.querySelectorAll(".feature.col").forEach(function(feature) {
  feature.addEventListener("mouseover", function() {
    playSound("./Sounds/modernclick1.wav");
  });
});

document.querySelectorAll(".col").forEach(function(card) {
  card.addEventListener("mouseover", function() {
    playSound("./Sounds/modernclick1.wav");
  });
});

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");
const svgIcon = navbarToggler.querySelector("svg");

navLinks.forEach((link) => {
  link.addEventListener("click", function() {
    if (this.textContent.trim() !== "Contact") {
      navbarCollapse.classList.remove("show"); 
    }
  });
});

navbarToggler.addEventListener('click', function() {
  const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

  svgIcon.innerHTML = isExpanded ? `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    </svg>
  ` : `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
      <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
    </svg>
  `;
});
