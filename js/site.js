$("document").ready(function(){

	setTimeout(function(){
		window.scrollTo(0,1);
	}, 0);

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