$(document).ready(function(){
	$("select").formSelect();

    // if (window.matchMedia("(max-width: 600px)").matches) {
    //   /* The viewport is at least 400 pixels wide */
    //   console.log('smol boy')
    //   $("#rowResponsive").removeClass("valign-wrapper");
    // } else {
    //     console.log('big boy')
    // }

	$("#addSticker").on("click", function() {
		$("#secondField").css("display", "block");
		$("#addSticker").addClass("disabled");
	}) 
       
    $("form").on("submit", function(){
    	event.preventDefault();
    	var first_name = $("#first_name").val();
    	var last_name = $("#last_name").val();
    	var email = $("#email").val();

    	var stickerType = $("#stickerType").val();
    	var quantity = $("#quantity").val();
    	var sticker1 = [stickerType, quantity]

    	var stickerType2 = $("#stickerType2").val();
    	var quantity2 = $("#quantity2").val();
    	var sticker2 = [stickerType2, quantity2];

    	var order = [sticker1, sticker2];

    	console.log(first_name, last_name, email, order);
    })
});
