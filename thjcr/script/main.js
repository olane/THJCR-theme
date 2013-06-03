 $(document).ready(function() {

	colours = ['rgb(141, 0, 56)', 'rgb(0, 133, 148)', 'rgb(41, 104, 35)', 'rgb(199, 114, 3)','rgb(107, 67, 165)', 'rgb(32, 143, 67)'];
	//top nav colours
	for(i = 1; i < $("#menu-top-navigation").find("li").length; i++){
		$("#menu-top-navigation > li:nth-of-type(" + i + ")").css({
			"border-bottom" : ("5px solid "+ colours[(i -1) % colours.length]),
			"margin" : "0 0 -5px"
		});

		$("#menu-top-navigation > li:nth-of-type(" + i + ") > ul").css({
			"border-bottom" : ("5px solid "+ colours[(i -1) % colours.length])
		});
	}

	//top nav dropdown

	//add indicators and hovers to submenu parents
	$(".menu-item").each(function() {
		if ($(this).find(".sub-menu").length > 0) {
			
			//$("<span>").text("^").appendTo($(this).children(":first"));

			//show subnav on hover
			$(this).mouseenter(function() {
				$(this).find("ul").slideDown(140);
			});
					
			//hide submenus on exit
			$(this).mouseleave(function() {
				$(this).find("ul").slideUp(200);
			});
		}
	});
 });