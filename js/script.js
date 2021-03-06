
//顯示loading
var loading = function(){
	$('#loadingBox').modal('show');
	//測試關閉用, 請把setTimeout刪除,自訂js
	/*
	setTimeout("loadingClose()",2000);
	*/
}
//關閉loading
var loadingClose = function(){
	$('#loadingBox').modal('hide');
}

$(function(){
	$('#menu a').click(function(e){
		var $id=$('#'+$(this).attr('data-id'));
		if($id.size()!=0){
			e.preventDefault();
			e.stopPropagation();
			$id.click();
		}
	});
	$('.search').click(function(e){
		var $id=$('#'+$(this).attr('data-id'));
		if($id.size()!=0){
			e.preventDefault();
			e.stopPropagation();
			$id.click();
		}
	});
	$('.control .btn').on('click', function(){
		var _amount = parseInt($(this).parents(".control").find("input").val());
		if($(this).hasClass("btn-minus")){
			if(_amount-1 < 0){
				_amount=1;
			}
			$(this).parents(".control").find("input").val(_amount-1);
		}else if($(this).hasClass("btn-plus")){
			$(this).parents(".control").find("input").val(_amount+1);
		}
	});
	$("#cart .pro-slick").owlCarousel({
	    center: true,
	    items:2,
	    loop:true,
	    responsive:{
	        768:{
	            items:4
	        }
	    }
	});
	$("#ab .pro-slick").owlCarousel({
	    center: true,
	    items:2,
	    loop:true,
	    responsive:{
	        768:{
	            items:4
	        },
	        980:{
	            items:6
	        }
	    }
	});
	$(".full-carousel").owlCarousel({
		autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    items:1,
	    loop:true,
	});


	var $menu = $('#menu nav'),
		_width = $menu.width(), 
		_scrollWidth =  $menu.prop('scrollWidth'), 
		_maxScrollWidth = _scrollWidth - _width,
		_least = 0;
	
 
	$('#menu nav').scroll(function(){
		var $this = $(this);

		if(_maxScrollWidth - $this.scrollLeft() > _least+5){
			$('#menu').removeClass("righthide");
		}else{
			$('#menu').addClass("righthide");
		}
		if($this.scrollLeft() > _least){
			$('#menu').addClass("leftshow");
		}else{
			$('#menu').removeClass("leftshow");
		}
	});

	/* 滾動置頂 */
	$('.btn-top').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 800);
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.btn-top').addClass("show");
		}else{
			$('.btn-top').removeClass("show");
		}

	});

	$('.product .pro-img > img').each(function(){
		var $bg=$(this).attr('src');
		$(this).parents(".pro-img").css({'background':'url('+$bg+') no-repeat center center','background-size':'cover'});
	});
});

$(document).ready(function() {
	$(".imgLiquidFill").imgLiquid();
});

$(window).load(function() {
	$(".bg_load").fadeOut("slow");
	$(".load-wrapper").fadeOut("slow");
})