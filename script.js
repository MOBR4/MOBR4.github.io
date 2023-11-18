function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get the navigation bar element
var nav = document.getElementById("desktop-nav");
var nav2 = document.getElementById("hamburger-nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;
var sticky = nav2.offsetTop;

// Function to add/remove the "fixed-top" class based on scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("fixed-top");
    nav2.classList.add("fixed-top");
    
  } else {
    nav.classList.remove("fixed-top");
    nav2.classList.remove("fixed-top");
  }
}

// Attach the function to the scroll event
window.onscroll = function() {
  stickyNav();
};
