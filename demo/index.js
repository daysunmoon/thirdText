$(".one").click(function(){
	$(this).parent().find("ul").toggle();
	$(this).find("i").toggle();
//	$(".more").css("display","block");
//	$(this).siblings().children().slice(1,3).css("display","none");	
})

//点击弹窗弹出mask和下标
$(".window").click(function(){
	$index = ($(this).parent().parent().parent().parent().index()-1)+"-"+$(this).parent().parent().index();
//	alert($index);
	$("#mask").css("display","block");
	$("#mask i").html($index);
})
//mask消失
$("#mask").click(function(){
	$("#mask").css("display","none");
})
//展开
	if($(".more").index() > 3){
		$(".more").css("display","block");
		
		$(".first:gt(1)").css("display","none");
		$(".second:gt(1)").css("display","none");
		$(".third:gt(1)").css("display","none");
		
	}else{
		$(".more").css("display","none");
	}
	
	$(".more").click(function(){
		$(this).slideToggle("slow");
		$(this).siblings().css("display","block");
	})

