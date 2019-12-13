$(document).ready(function(){
	$('#intro .mouse').click(function(event) {
		var heightHeader = document.getElementsByTagName('#intro')[0].offsetHeight;
		$('').animate({scrollTop:heightHeader}, 'slow');
		return false;
	});

	$(".slider div[id^=slide_]:first-child").addClass("active");
	$(".pre_slide").click(function(){
		active_slide = $(".slider div[id^=slide_].active").attr("id");
		//alert(active_slide);
		
		//alert($(".slider .pre_slide").index());
		
		id_slide = active_slide.split('_');
		//alert(id_slide[1]);
		
		if(id_slide[1] <= 0){
			$(".slider div[id^=slide_" + (id_slide[1]) + "]").removeClass("active");
			$(".slider div[id^=slide_]").last().addClass("active");
		}
		else{
			$(".slider div[id^=slide_" + (id_slide[1]) + "]").removeClass("active");
			$(".slider div[id^=slide_" + (parseInt(id_slide[1]) - 1) + "]").addClass("active");
		}
	});
	
	$(".next_slide").click(function(){
		active_slide = $(".slider div[id^=slide_].active").attr("id");
		//alert(active_slide);
		
		//alert($(".slider .pre_slide").index());
		
		id_slide = active_slide.split('_');
		// alert(id_slide[1]);
		// alert(parseInt(id_slide[1]) + 1);
		
		// alert($(".slider div[id^=slide_]").length - 1);
		if(id_slide[1] >= $(".slider div[id^=slide_]").length - 1){
			$(".slider div[id^=slide_" + (id_slide[1]) + "]").removeClass("active");
			$(".slider div[id^=slide_]").first().addClass("active");
		}
		else{
			$(".slider div[id^=slide_" + (id_slide[1]) + "]").removeClass("active");
			$(".slider div[id^=slide_" + (parseInt(id_slide[1]) + 1) + "]").addClass("active");
		}
	});
	
	$("#article-tab .article-left-column div[class$=-article]").click(function(){
        var article_id = $(this).find("input[name=article_id]").attr("value");
        //alert(article_id);
        $(".right-article-details").addClass("open");
		$(".right-article-details div[class$=-article-details]").css("display", "none");
		$("."+article_id +"-article-details").css("display", "block");
		$("#right-close-article-details").css("display", "block");
    });
    $("#article-tab .article-right-column div[class$=-article]").click(function(){
        var article_id = $(this).find("input[name=article_id]").attr("value");
        //alert(article_id);
        $(".left-article-details").addClass("open");
		$(".left-article-details div[class$=-article-details]").css("display", "none");
		$("."+article_id +"-article-details").css("display", "block");
		$("#left-close-article-details").css("display", "block");
    });
	/* $("#article-tab .article-right-column div[class$=-article-details]").click(function(){
		 var article-details_id = $(this).find("input[name=article-details_id]").attr("value");
		 
		 $(".left-article-details").addClass("open");
		 //$(article-details_id +"-article-details").addClass("open");
		 $("#left-close-article-details").css("display", "block");
	}); */
    $("#left-close-article-details, #right-close-article-details").click(function(){
        $(this).css("display", "none");
		$(".right-article-details div[class$=-article-details]").css("display", "none");
		$(".left-article-details div[class$=-article-details]").css("display", "none");
        $(this).parent().removeClass("open");		
    });
    
    $("#burger-nav").click(function(){
        $("#nav").toggleClass("open");
        $("#nav ul li.separator span.pipe").html("<hr/>");
    });
});

jQuery(function($) {
	$('.typist')
		.typist({
			speed: 10
		})
        .typistPause(1500)
		.typistPause(2000) // 2 sec
		.typistAdd('Développeur Web')
		.typistPause(1000)
		.typistRemove(15)
		.typistAdd('Bienvenue sur mon Portfolio !')
		.typistStop();
});

 
    