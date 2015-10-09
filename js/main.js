$(function() {

  // counter 
  $.fn.countTo = function(options) {
    options = $.extend({}, $.fn.countTo.defaults, options || {});
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;

    return $(this).each(function() {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(value.toFixed(options.decimals));

        if (typeof(options.onUpdate) == 'function') {
          options.onUpdate.call(_this, value);
        }

        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;

          if (typeof(options.onComplete) == 'function') {
              options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,  // the number the element should start at
    to: 100,  // the number the element should end at
    speed: 1000,  // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,  // the number of decimal places to show
    onUpdate: null,  // callback method for every time the element is updated,
    onComplete: null,  // callback method for when the element finishes updating
  };

  $(window).on('load', function(){
    $('.pins').animate({'opacity': 1}, {duration: 1500}).addClass('bounce');
    $('#cloud_left').animate({'opacity': 1}, {duration: 2000}).addClass('slideInLeft');
    $('#cloud_right').animate({'opacity': 1}, {duration: 2000}).addClass('slideInRight');
  });
  
	// header animation
  function countNumbers(){
    $('.count_visitors').countTo({
      from: 0,
      to: 120000,
      speed: 633,
      refreshInterval: 50,
    });
    $('.count_segments').countTo({
      from: 0,
      to: 300000,
      speed: 633,
      refreshInterval: 50,
    });
  }

  var counter_cheker = false;


	$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= $('#promo').outerHeight() - 20) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }

    // show_count
    if (scroll >= $('#promo').outerHeight()/3) {
      if (counter_cheker == false) {
        counter_cheker = true;
        countNumbers()
      }
    }
	});

  function scrollToSection(){
    $('#nav a').bind('click', function(){
      var linkHref = $(this).attr('data-target');
      $('html, body').animate({scrollTop: $('#'+linkHref).offset().top - 66},'slow');
    });
    $('.scroll_to_brands').bind('click', function(){
      $('html, body').animate({scrollTop: $('#brands').offset().top - 66},'slow');
    });
  }
  scrollToSection();
});