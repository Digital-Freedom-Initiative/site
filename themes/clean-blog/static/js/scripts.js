$(function() {
  
  $("#button1").click(function() {
      $('html, body').animate({scrollTop: $("#part1").offset().top}, 500, "swing");
  }); 
  $("#button2").click(function() {
      $('html, body').animate({scrollTop: $("#part2").offset().top}, 500, "swing");
  });  
  $("#button3").click(function() {
      $('html, body').animate({scrollTop: $("#part3").offset().top}, 500, "swing");
  });  
  $("#button4").click(function() {
      $('html, body').animate({scrollTop: $("#part4").offset().top}, 500, "swing");
  });  
  $("#button5").click(function() {
      $('html, body').animate({scrollTop: $("#part5").offset().top}, 500, "swing");
  });  
  $("#button6").click(function() {
      $('html, body').animate({scrollTop: $("#part6").offset().top}, 500, "swing");
  });  
  $("#button7").click(function() {
      $('html, body').animate({scrollTop: $("#part7").offset().top}, 500, "swing");
  });  
  

  

  //About Me Modal   
  $("#pgp-block pre").hide(0);
  $("#pgp-btn").click(function() {
  $("#pgp-block pre").toggle("blind", 400, "swing");
  $(this).text(function(i, v){return v === 'Hide PGP Public Key Block' ? 'View PGP Public Key Block' : 'Hide PGP Public Key Block' });
  });



  
});