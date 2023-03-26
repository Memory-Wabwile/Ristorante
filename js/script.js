let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// simply means on click of the search icon toggle/show the search form
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
// simply means on click of the close icon remove the search form
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
// swiper code 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
// end of swiper code

// swiper for the review page 
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop:true,
  // the breakpoints basically tell the browser how many slides to show at the different screen sizes 
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
  }
});