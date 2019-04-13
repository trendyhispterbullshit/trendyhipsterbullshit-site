$(document).ready(function(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

	$("select").formSelect();
    var $form = $("form#orderForm")
    var url = 'https://script.google.com/macros/s/AKfycbzlff4kD5HUprkvuAJJ8QqZzRMvfrAfJoWYd4DRSjoHQxrR1Ak/exec'

	$("#addSticker").on("click", function() {
		$("#secondField").css("display", "block");
		$("#addSticker").addClass("disabled");
	}) 

    // reliant on two stickers
    $(".logo").on('click', function() {
        if ($("#hipsterLogo").css("display") == 'none') {
            $("#hipsterLogo").css("display", "inline-block");
            $("#hypebeastLogo").css("display", "none"); 
        } else if ($("#hipsterLogo").css("display") == 'inline-block') {
            $("#hipsterLogo").css("display", "none");
            $("#hypebeastLogo").css("display", "inline-block");
        }
    })

    $("form").on("submit", function(){
    	event.preventDefault();

        var stuff = $form.serializeObject();
        stuff.date = today;


        console.log("let's post to sheets")
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: stuff,
          success: function() {
              console.log('form submit success')
              $("#submitButton").removeClass("pink");
              $("#submitButton").removeClass("lighten-3");
              $("#submitButton").text("Order Placed");
              $("#submitButton").addClass("disabled");
          }
        })
    })
});
