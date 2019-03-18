$(window).load(function() {
  $(".before-after").twentytwenty({
     before_label: 'БЕЗ СКИНАЛИ', // Set a custom before label
     after_label: 'С СКИНАЛИ' // Set a custom after label
  });

  $('.before_slider').slick({
    arrows:true,
    draggable:false,
    swipe: false,
    dots: true,
    dotsClass:'before_slider_dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
  });
 
  $('.rewiews_slider').slick({
    arrows: false,
    draggable: true,
    slidesToShow: 3,
    responsive:[
      {
        breakpoint: 1025,
        settings:{
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: $('.arrow-left_bot'),
          nextArrow: $('.arrow-right_bot'),
        },
        breakpoint: 576,
        settings:{
          slidesToShow: 1
        }
      }
    ]
    //dotsClass:'before_slider_dots',
    //prevArrow: $('.arrow-left'),
    //nextArrow: $('.arrow-right'),
  });
 
 $('.menu-button').on('click', function () {
     $('.menu').toggleClass('menu__active');
 });
 $('.like_button').on('click', function () {
     $(this).toggleClass('like_button_active');
 });


 $('.select_checked').on('click',function(){
   $('.select_dropdown').toggleClass('select_dropdown_open');
 })
 $('.select_option').on('click', function () {
  var value =  $(this).attr('data-value');
  $('#select-type').val(value);
  $('.select_checked').text(value);
  $('.select_dropdown').toggleClass('select_dropdown_open');
 });
 $("a[href^='#']").click(function () {
  // preventDefault();
  var _href = $(this).attr("href");
  $("html,body").animate({ scrollTop: $(_href).offset().top - 160 + "px"});
   return false;
 });
 $('input[type="tel"]').mask("+7 (999) 999-99-99");
});