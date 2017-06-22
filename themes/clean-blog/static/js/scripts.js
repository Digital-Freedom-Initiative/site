$(function() {
  
  //---------- Long Format Articles -----------//
  
  //Article Nav Scroll
  var articleNav =  $(".article-nav-link");
  var articleSections = $(".section-head");
   $(articleNav).click(function(e) {
    e.preventDefault();
      $('html, body').animate({scrollTop: $(articleSections[articleNav.index(this)]).offset().top}, 500, "swing");
   });
 
  //---------- About Page -----------//
  
  //PGP Key Show/Hide  
  $("#pgp-block pre").hide(0);
  $("#pgp-btn").click(function() {
    $("#pgp-block pre").toggle("blind", 400, "swing");
    $(this).text(function(i, v){return v === 'Hide PGP Public Key Block' ? 'View PGP Public Key Block' : 'Hide PGP Public Key Block' });
  });
  
  //---------- Back to Top Button -----------//
  
 
  var offset = 250; 
  var duration = 300;

  $('.back-to-top').css({"display": "none"});
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(300);
    } else {
      $('.back-to-top').fadeOut(300);
    }
  });

  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
    return false;
  })
  

});
  
