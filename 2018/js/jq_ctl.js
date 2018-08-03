$(function(){	
	var goPage;
	var topPos;
	var scrollSpeed = 1000;

	function pageScroll(obj) {
		if(obj == "") {
			$(window).scrollTo({left:0, top:0}, scrollSpeed, {ease:"easeInOutQuint"});
		} else {
			var isAndroid = (navigator.userAgent.indexOf("Android") > -1);
			var isIOS = ((navigator.userAgent.indexOf("iPhone") > -1) || (navigator.userAgent.indexOf("iPad") > -1));
			if (!isAndroid && !isIOS) {					
				goPage = $(obj).attr("href");
				topPos = $(obj).offset().top - 80;
				$(window).scrollTo({left:0, top:topPos}, scrollSpeed, {ease:"easeInOutQuint"});
			}
			else
			{
				goPage = $(obj).attr("href");
				topPos = $(obj).offset().top - 30;
				$(window).scrollTo({left:0, top:topPos}, scrollSpeed, {ease:"easeInOutQuint"});	
			}
		}
	}

	$("#navigation a").click(function(e) {
		e.preventDefault();
		$("#navigation a").removeClass("on");
		$(this).addClass("on");		
		
		$("#navigation a img").each(function(index){
			$("#navigation a img").eq(index).attr("src",$("#navigation a img").eq(index).attr("src").replace("_on",""));			
		});
		var ImgClass = $(this).attr("href").replace("#","");		
		if (ImgClass != "main_area2")		
		{
			var ImgClassArry = $("." + ImgClass).attr("src").split(".");
			$("." + ImgClass).attr("src",ImgClassArry[0]+"_on."+ImgClassArry[1]);
		}
		goPage = $(this).attr("href");		
		pageScroll(goPage);
	});

});