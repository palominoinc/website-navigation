$(document).ready(function(){

  // SmartMenus jQuery init
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: 0,
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
  
  jQuery(function($) {
    if($(window).width()<769){
      $('.navbar-nav .dropdown > a').click(function(){
        // if($(this).next().css("display") == "block") {
        //   location.href = this.href;
        // }
        if($(this).parent().hasClass("open")) {
          location.href = this.href;
        } else{
          
        }
      });
    
      //submenu dropdown in the side menu
      // $('.navbar-nav .dropdown-menu-side .dropdown > a').click(function(){
      //    $('.navbar-nav .dropdown-menu-side .dropdown > a').click(function(){
      //      location.href = this.href;  
      //    });
      // });
    
   } else {
     linkSideMenu();
   }
});
  
  function linkSideMenu(){
    $('.navbar-nav .dropdown > a').click(function(){
      location.href = this.href;  
    });
  }

  //side bar navigation
//   $('.side-menu > li, .side-menu >  li > ul > li, .side-menu > li > ul > li > ul > li, .side-menu > li > ul > li > ul > li > ul > li').each(function (){
//     if(!$(this).hasClass("active")){
//       $(this).children("ul").css('display', 'none');
//     }
//   });
  
//   $('.side-menu .dropdown:not(.active)').hover( function() { toggleDropdownMenu($(this), ''); }, function() { toggleDropdownMenu($(this), 'none'); });

// });

// function toggleDropdownMenu(menu, display) {
  
//   //menu.children('.dropdown-menu-side').css('display', display);
//   if (display === '') {
//     menu.children('.dropdown-menu-side').slideDown().fadeIn();
//   } else {
//     menu.children('.dropdown-menu-side').slideUp().fadeOut();
//   }
// }
});