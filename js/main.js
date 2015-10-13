$(document).ready(function() {
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