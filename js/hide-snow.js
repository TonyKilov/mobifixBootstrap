$(document).ready(function(){
	$(".product-hide").hide();

	$(".product-btn").click(function(){
		if($(".product-hide").css('display') == "none"){
			$(".product-hide").show();
		} else {
			$(".product-hide").hide();
		}
		
	});

	
	$(".header-menu").click(function(){
		if($(".header-menu .container > ul").css('display') == "none"){
			$(".header-menu .container > ul").show();
		} else {
			$(".header-menu .container > ul").hide();
		}
		
	});


});