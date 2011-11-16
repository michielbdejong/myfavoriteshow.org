$(document).ready(function() {
  // register a click handler for our button
  $('.mailing_list input').keypress(function() { 
    $('.mailing_list > button').removeAttr("disabled");
    $('.mailing_list input').unbind();
  });

  $(".mailing_list button").click(function() {
    $('.mailing_list input').attr("disabled", true);
    $('.mailing_list > button').fadeOut(200, function() {
      $('.mailing_list .next_step').fadeIn(500, function() {
        $(".mailing_list .next_step button").click(function() {
          $('.mailing_list .next_step').hide();
          $('.mailing_list .waiting').show();
          navigator.id.get(function(assertion) {
            alert("got assertion " + assertion);
          }, { requiredEmail: $.trim($('.mailing_list input').val()) });
        });
      });
    });
  });
});
