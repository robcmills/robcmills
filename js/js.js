
function animate_svg(val) {
  Snap.animate(100, 0, function (val) {
    var robcmills = Snap.select('#robcmills');
    robcmills.attr({'stroke-dashoffset': val + 'px'});
  }, 2000);   
};

function showTab(tab) {
  $('.nav .tab').removeClass('active');
  $('.content').hide();
  $('.nav .' + tab + '-tab').addClass('active');
  $('.' + tab).show();
  $('img').appear();
};

function changeToTab(el) {
  if(!$(el).hasClass('active')) {
    var tab = $(el).text();
    showTab(tab);
    location.hash = tab;
    window.scrollTo(0,0);
  }
};


$(document).ready(function() {

  // highlight.js (syntax highlighting)
  hljs.initHighlightingOnLoad();

  $('.head').click(function(el) {
    animate_svg();
  });

  $('.nav .tab').click(function(el) {
    changeToTab(this);
    animate_svg();
  });

  var hash = location.hash.replace('#','');
  if(['about','code','more'].indexOf(hash) < 0) {
    changeToTab($('.nav .tab:first'));
  } else {
    showTab(hash);
  }

  animate_svg();

  $('img').appear();
  $('img').on('appear', function() {
    // console.log('appear', this, $appeared_elements);
    // $appeared_elements.each(function(el) {
    $(this).attr('src', $(this).attr('data-src')).addClass('appear');
    // });
  }); 

});