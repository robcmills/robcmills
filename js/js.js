
animate_svg = function() {
  Snap.animate(100, 0, function (val) {
    var robcmills = Snap.select('#robcmills');
    robcmills.attr({'stroke-dashoffset': val + 'px'});
  }, 2000);   
};

$(document).ready(function() {

  $('.head').click(function(el) {
    $('.nav li').removeClass('active');
    $('.content').hide();
    animate_svg();
  });

  $('.nav li').click(function(el) {
    if($(this).hasClass('active')) {
      // nothing
    } else {
      $('.nav li').removeClass('active');
      $(this).addClass('active');
      $('.content').hide();
      $('.' + $(this).text()).show();
    }
    animate_svg();
  });

  $('.cmd-up').click(function() {
    window.scrollTo(0,0);
  });

  $('.nav li:first').click();

  animate_svg();

});