$(document).ready(function(){
    $('.menu .fa-bars').click(function(){
        $(this).toggleClass('fab fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('.share-icon .fa-share').click(function(){
      $('.share-icon ul').toggle();
    });

    $(window).scroll(function(){
      if($(window).scrollTop() >= 200){
        $('.scroll-icon').show();
      }
      else{
        $('.scroll-icon').hide();
      }
    });

    $('.theme-toggler').click(function(){
      $('.color-panel').toggle();
    });

    $('.color-panel ul li').click(function(){
      var color = $(this).css('background');
      $('.color').css('background',color);
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 28,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: 
		{
			delay: 3500,
		},
	loop: true,

    breakpoints: {
        770: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        360: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },

        100: {
            slidesPerView: 1,
            spaceBetween: 20
        }
      }
  });