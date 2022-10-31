$(document).ready(function(){
  
  // SmartMenus jQuery init
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    subMenusSubOffsetX: 10,
    subMenusSubOffsetY: 0
  });
  $('#mobile-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    subMenusSubOffsetX: 10,
    subMenusSubOffsetY: 0
  });
  
  //initialize sidr to the right
  $('#simple-menu').sidr({
    side: 'right'
  });
  
  //remove default arrow
  $( "span.sub-arrow" ).html( "" );

  //side bar navigation 
  $('.side-menu > li, .side-menu >  li > ul > li, .side-menu > li > ul > li > ul > li, .side-menu > li > ul > li > ul > li > ul > li').each(function (){
    if(!$(this).hasClass("active")){  
      $(this).children("ul").css('display', 'none');
    }
  });

});    