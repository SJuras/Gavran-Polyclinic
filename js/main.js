// scroll up button
const btnScrollTop = document.querySelector('#btnScrollTop');
window.addEventListener("scroll", function(){
  btnScrollTop.classList.toggle("visible", window.scrollY > 100);
});

btnScrollTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
// scroll up button END


// scrolling down hides info section in header
const headerContainer = document.querySelector('.header');
const headerInfo = document.querySelector('.main-header');
window.addEventListener("scroll", function(){
  headerInfo.classList.toggle("visible-2", window.scrollY > 100);
  headerContainer.classList.toggle("borderDown", window.scrollY > 100);
});
// END

// navbar toggle
function navbarToggle(){
  const navbarMenu = document.querySelector('.navbar');
  navbarMenu.classList.toggle('active');
}
// navbar toggle END
