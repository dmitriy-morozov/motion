 
  $('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});

 
 $('.merits-box')
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
   else
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
 }, {
   offset: '90%'
 })
 
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
   else
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
 }, {
   offset: '-50'
 })

 $('.team-box')
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
   else
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
 }, {
   offset: '90%'
 })
 
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
   else
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
 }, {
   offset: '-50'
 })


  $('.portfolio-box')
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
   else
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
 }, {
   offset: '90%'
 })
 
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
   else
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
 }, {
   offset: '-20'
 })


  $('.price-box')
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
   else
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
 }, {
   offset: '90%'
 })
 
 .waypoint( function(dir) {
   if ( dir === 'down' )
     $(this)
   .removeClass('fadeInUp')
   .addClass('fadeOutDown');
   else
     $(this)
   .removeClass('fadeOutDown')
   .addClass('fadeInUp');
 }, {
   offset: '-20'
 })


 

  var navLi = $("nav li");

  $('.tracked').waypoint( function(dir) {
   if ( dir === 'down' ) {
     var hash = $(this).attr('id');
     console.log(hash);
     $('nav li').removeClass("active");
     $.each(navLi, function(){
       href = $(this).children('a').attr('href').slice(1);
       if (href==hash) {
        $(this).addClass("active");
      };
    });
   };
 }, {offset:'10%'});

  $('.tracked').waypoint( function(dir) {
   if ( dir === 'up' ) {
     var hash = $(this).attr('id');
     console.log(hash);
     $('nav li').removeClass("active");
     $.each(navLi, function(){
       href = $(this).children('a').attr('href').slice(1);
       if (href==hash) {
        $(this).addClass("active");
      };
    });
   };
 }, {offset:'-20'});
 
 
 
