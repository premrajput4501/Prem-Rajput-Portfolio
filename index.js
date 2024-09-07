document.querySelector(".navbar-toggler").addEventListener("click",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})

document.querySelectorAll(".nav-link")[0].addEventListener("mouseover",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})

document.querySelectorAll(".nav-link")[1].addEventListener("mouseover",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})
document.querySelectorAll(".nav-link")[2].addEventListener("mouseover",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})
document.querySelectorAll(".nav-link")[3].addEventListener("mouseover",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})

document.querySelectorAll(".nav-link")[4].addEventListener("mouseover",function(){
  var audio = new Audio('./Sounds/click1.wav');
  audio.play();
})

document.querySelectorAll(".feature.col")[0].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[1].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[2].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[3].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[4].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[5].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[6].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[7].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".feature.col")[8].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})



document.querySelectorAll(".card")[0].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".card")[1].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})

document.querySelectorAll(".card")[2].addEventListener("mouseover",function(){
  var audio=new Audio("./Sounds/modernclick1.wav");
  audio.play();
})


const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".nav-link");
const svgIcon = navbarToggler.querySelector("svg");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (this.textContent.trim() !== "Contact") {
      navbarCollapse.classList.remove("show");
    }
  });
});

navbarToggler.addEventListener('click',function() {

  const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    svgIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
  </svg>
    `;
  } else { 
    svgIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
  </svg>
    `;
  }
});

navbarToggler.addEventListener('click', toggleIcon);

