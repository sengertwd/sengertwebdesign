$("document").ready(function(){

	$(".open_mobile").on("click", function(){
		var $t = $(this),
			$nav = $("header nav");

		if($nav.hasClass("open")){
			$nav.removeClass("open");
		} else {
			$nav.addClass("open");
		}
	});

});