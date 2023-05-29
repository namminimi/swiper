var swiper = new Swiper('.swiper-container', {
    autoHeight: true, //enable auto height
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    mousewheel: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiper_wrapper = document.querySelectorAll(".swiper-slide")
const swiper_container = document.querySelector(".swiper-container")


console.log(swiper_wrapper)
swiperIndex = swiper.activeIndex


function ss() {
    console.log(swiper_container )
    console.log(swiper.activeIndex)
    console.log(swiper_wrapper[swiperIndex + 1].className)
    console.log(swiperIndex + 2)
    console.log(swiper.navigation)
}

window.addEventListener("wheel", ss) 

