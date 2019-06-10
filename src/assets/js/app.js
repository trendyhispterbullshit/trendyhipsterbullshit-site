$(document).ready(function(){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

  $('.tooltipped').tooltip();
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
        var shipping_costs = 0.35;
        stuff.shipping_costs = shipping_costs;


        console.log("let's post to sheets")
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: stuff,
          success: function() {
              console.log('form submit success')
              M.toast({html: 'You will receive an email from nick@nickwong.io confirming order.'})
              $("#submitButton").removeClass("pink");
              $("#submitButton").removeClass("lighten-3");
              $("#submitButton").text("Order Placed");
              $("#submitButton").addClass("disabled");
          }
        })
    })
});
