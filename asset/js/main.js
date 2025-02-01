$('.response-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          dots: true
        }
      }
    ]
  });


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const nav = document.querySelector("nav");
  
  
  hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    nav.classList.toggle("nav-active");
  });

  // counter //
 var a = 0;
 $(window).scroll(function () {
 var oTop = $('#counter').offset().top - window.innerHeight;
 if (a == 0 && $(window).scrollTop() > oTop) {
     $('.counter').each(function () {
     var $this = $(this);
     jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
         duration: 4000,
         easing: 'swing',
         step: function () {
         $this.text(Math.ceil(this.Counter));
         }
     });
     });
     a = 1;
 }
 });


