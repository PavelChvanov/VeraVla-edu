$(function () {

  $(document).ready(function($) {
    $('.btn').click(function() {
      $('.popup-fade').fadeIn();
      return false;
    });	

    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut();
      }
    });
    
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();					
      }
    });
  });


  $('.header__top-phone, .tel__cross').on('click',function(e){
    e.preventDefault()
    $('.wrapper').children('.tel__window').slideToggle()
  });

$('.header__buttons-down').on('click',function(e){
  e.preventDefault()
  $('.header__buttons-down--switch').addClass('switch-on')
});

$('.know__acc-link').on('click',function(e){
  e.preventDefault()
  $(this).toggleClass('know__acc-link--active')
  $(this).children('.know__acc-text').slideToggle()
});

$(".header__buttons-down, .up__logo, .logo__link").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 800)
})

$('.news__slider').slick({
  slidesToShow: 3,
  infinite: false,
  arrows: false,
  draggable: false,
  responsive:
  [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
  ]
});

$('.job__slider').slick({
  slidesToShow: 3,
  infinite: false,
  arrows: false,
  draggable: false,
  responsive:
  [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },
  ]
});

$('.news__prev').on('click', function(e){
  e.preventDefault()
  $('.news__slider').slick('slickPrev')
})
$('.news__next').on('click', function(e){
  e.preventDefault()
  $('.news__slider').slick('slickNext')
});

$('.job__prev').on('click', function(e){
  e.preventDefault()
  $('.job__slider').slick('slickPrev')
})
$('.job__next').on('click', function(e){
  e.preventDefault()
  $('.job__slider').slick('slickNext')
});

setInterval(() => {
      if($(window).width() < '500'){
      $('.news__button, .job__button').addClass('button-off')
      $('.news__button-bottom, .job__button-bottom').removeClass('button-off')
    }
      else{
        $('.news__button, .job__button').removeClass('button-off')
        $('.news__button-bottom, .job__button-bottom').addClass('button-off')
      }
  }, 0)


$(window).scroll(function (){
    if($(window).scrollTop()+$(window).height()>=$(document).height())
    {
      $('.call').addClass('call__none')
      $('.up').removeClass('up__none')
    }
    else{
      $('.call').removeClass('call__none')
      $('.up').addClass('up__none')
    }
  });


});