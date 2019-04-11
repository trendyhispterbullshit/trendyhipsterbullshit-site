// $(document).ready(function(){
// 	$("select").formSelect();

// 	$("#stickerType").on("change", function() {
// 		var currentSelect = $('select').formSelect('getSelectedValues');

// 		if (currentSelect.length <= 1) {
// 			$("#secondField").css("display", "none");
// 			$("#stickerType").removeAttr("multiple");
// 		} else {
// 			$("#secondField").css("display", "block");
// 			$("#stickerType").attr("multiple");
// 		}
		
// 	})
       
//     $("form").on("submit", function(){
//     	event.preventDefault();
//     	var first_name = $("#first_name").val();
//     	var last_name = $("#last_name").val();
//     	var email = $("#email").val();
//     	var stickerType = $("#stickerType").formSelect('getSelectedValues');
//     	var quantity = $("#quantity").val();
//     	var quantity = $("#quantity").val();
//     	console.log(first_name, last_name, email, stickerType, quantity);
//     })
// });