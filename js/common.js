(function($) {


	$(document).ready(function() {
		fullWidthHeight();
		getSetImage();
		pageWrapperHeight();
		mobileNav();
	});

	$(window).resize(function() {
		fullWidthHeight();
		pageWrapperHeight();
	});


	function fullWidthHeight(){
		var w = $(window).width();
		var h = $(window).height();
		$(".main-wrapper").css({
			width : w,
			"min-height": h
		});
	}

	function getSetImage(){
		var path = $(".bg-wrapper").attr("data-mainbg");
		$(".main-wrapper.bg-wrapper").css({
			"background-image" : "url("+path+")"
		});
	}

	function pageWrapperHeight(){
		var total = $(".main-wrapper").height();
		var footer = $(".front-display").outerHeight();
		var page = total - footer;
		if($("html").hasClass("ff")){
			$(".page-wrapper").css("height", page);
			$(".page-wrapper").css("min-height", page);
		}
		else{
			$(".page-wrapper").css("min-height", page);
		}
	}
})(jQuery);
