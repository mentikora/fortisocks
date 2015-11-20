$(document).ready(function() {



$(function() {

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/media/131324529876654234_1491525?client_id=afd15cca7d664a1c964d54bac0488b93",
    success: function(data) {
        for (var i = 0; i < 1; i++) {
          console.log(data);
            $("#pics").append("<img src='" + data.data.images.thumbnail.url+ "'></img>");
        }
    }
});
});



  // ini top slider
  $('#slippry-top').slippry({
    activeClass: 'active',
    controls: false,
    pause: 8000,
    pagerClass: 'pager'
  });

  // ini about slider
  $('#slippry-about').slippry({
    activeClass: 'active',
    pause: 8000,
	loop: false,
	auto: false,
	transition: 'horizontal',
    pager: false,
	continuous: false
  });

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
    
  // show hidden contacts
  $('.show_hidden_contacts').on('click', function(){
    $(this).toggleClass('active');
    $('.hidden_contacts').toggleClass('open');
  });

  // faq popUp
  $('.faq_title').on('click', function(){
    $(this).parent('li').toggleClass('active');
  });

  // about product slider
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
    allowKeyboardCtrl: false, // allow keyboard controlls left / right / space
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

$(function() {
	

	$(".scroll").click(function(e) {
		$.scrollify.instantMove("#home");
	});

	
});

$(function() {
			$("body").jsgallery({
				imgSelector : ".instagram_promo img", //default is img, ommit this property to use default
		
				bgClickClose : true
			});
		});

