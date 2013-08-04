$(document).ready(function(){

  $('#nav li').click(function() {
    $('#nav li').removeClass('activeNavTab');
    $(this).addClass('activeNavTab');

    var num_letters = $(this).text().length; 
    var width = num_letters * 10;
    var left = $(this).position().left;
    var adjusted = (100 - width)/2 + left;

    $('#active').animate(
      {left: adjusted + 'px', width: width},
      600, 'swing'
    );

    var index = $('#nav li').index($(this));
    $('#columnContainer').animate(
      {left: (-index * 600) + 'px'},
      600, 'swing'
    );
  });


  $('#algoTabs li').click(function() {
    if(!$(this).hasClass('activeAlgoTab')){
      $('#algoTabs li.activeAlgoTab').next().animate(
        {top: '+=28px'},
        400, 'swing'
      );

      var oldIndex = $('#algoTabs li').index($('li.activeAlgoTab'));
      console.log('oldIndex', oldIndex);
      $($('#algorithms .algoPane')[oldIndex]).animate(
        {opacity: '0.0'},
        400, 'swing'
      );
  
      var newIndex = $('#algoTabs li').index(this);
      console.log('newIndex', newIndex);
      $($('#algorithms .algoPane')[newIndex]).animate(
        {opacity: '1.0'},
        400, 'swing'
      );
      

      $('#algoTabs li').removeClass('activeAlgoTab');
      $(this).addClass('activeAlgoTab');

      $(this).next().animate(
        {top: '-=28px'},
        400, 'swing'
      );
    }
  });
});