// // console.log("Hello");
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     on: {
//       slideChange: function () {
//         updateActiveSlide();
//       },
//       // Initialize Swiper and apply the active class
//       init: function () {
//         updateActiveSlide();
//       }
//     }
//   });
  
//   function updateActiveSlide() {
//     // Remove the active class from all slides
//     document.querySelectorAll('.swiper-slide').forEach(slide => {
//       slide.classList.remove('active');
//     });
  
//     // Calculate the index of the centered slide
//     const slides = document.querySelectorAll('.swiper-slide');
//     const slideWidth = slides[0].offsetWidth + 30; // Width + spaceBetween
//     const centerIndex = Math.floor(swiper.activeIndex + 1.5); // Approximate center index
  
//     // Add the active class to the centered slide
//     slides[centerIndex].classList.add('active');
//   }
  



var kaSwiper1 = new Swiper ('#ka-swiper1', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: '3',
    spaceBetween : 20,
    autoHeight: true,
    breakpoints: {
      1200: {
          slidesPerView: 4, // For very large screens (desktops)
          spaceBetween: 30
      },
      992: {
          slidesPerView: 3, // For larger tablets and small desktops
          spaceBetween: 20
      },
      768: {
          slidesPerView: 2, // For tablets
          spaceBetween: 15
      },
      480: {
          slidesPerView: 2, // For mobile devices
          spaceBetween: 10
      },
      320: {
          slidesPerView: 1, // For very small screens
          spaceBetween: 5
      }
    }
  });