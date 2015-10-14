$(document).ready(function() {

  // ini fake select
  $('.fake-select').fakeSelect();

  // navbar button show
  $('.navbar_button').on('click', function(){
    $(this).toggleClass('open');
    if ( $(this).hasClass('open') ) {
      $('.nav_menu').css('display', 'block');
      $('.cart').css('display', 'none');
    } else {
      $('.nav_menu').css('display', 'none');
      $('.cart').css('display', 'block');
    }
  });

  // menu click sliding 
  $('.nav_menu a').on('click', function(){
    var link = $(this).data('target');
    $('html,body').animate({scrollTop: $('#' +link).offset().top}, 'slow');
  });

  $('#slideshow').fadeSlideShow({
    width: '100%',
    height: 600,
    speed: 'slow', // default animation transition speed
    interval: 3000, // default interval between image change
    PlayPauseElement: '', // default css id for the play / pause element
    PlayText: '', // default play text
    PauseText: '', // default pause text
    NextElement: '', // default id for next button
    NextElementText: '', // default text for next button
    PrevElement: '', // default id for prev button
    PrevElementText: '', // default text for prev button
    ListElement: '', // default id for image / content controll list
    ListLi: '', // default class for li's in the image / content controll 
    ListLiActive: '', // default class for active state in the controll list
    addListToId: false, // add the controll list to special id in your code - default false
    allowKeyboardCtrl: true, // allow keyboard controlls left / right / space
    autoplay: true // autoplay the slideshow
  });

  // обрабатываем каждый слайдер  
  $(".slider").each(function () { 
    var obj = $(this);
    $(obj).append("<div class='nav'></div>");
    $(obj).find("li").each(function () {
      // добавляем блок навигации
      $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); 
      $(this).addClass("slider"+$(this).index());
    });
    // делаем активным первый элемент меню
    $(obj).find("span").first().addClass("on"); 
  });
});
function sliderJS (obj, sl) {
  // находим блок
  var ul = $(sl).find("ul"); 
  // находим любой из элементов блока
  var bl = $(sl).find("li.slider"+obj); 
  // ширина объекта
  var step = $(bl).width(); 
  // 500 это скорость перемотки
  $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}
$(document).on("click", ".slider .nav span", function() {
  // находим, в каком блоке был клик  
  var sl = $(this).closest(".slider"); 
  // убираем активный элемент
  $(sl).find("span").removeClass("on"); 
  // делаем активным текущий
  $(this).addClass("on"); 
  // узнаем его номер
  var obj = $(this).attr("rel"); 
  // слайдим
  sliderJS(obj, sl); 
  return false;
});