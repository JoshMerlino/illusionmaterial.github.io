Material.init({
	
})

var homeURL = "file:///C:/Users/joshu/Desktop/IllusionMaterial.com/index.html"

$(function(){
	$(".banner.top .menu").click(function(e){
		e.stopPropagation()
		$(".banner.left.o").fadeIn(200).animate({
			left:"0px"
		}, 350)
	})
	$(".banner.left.o").click(function(e){
		e.stopPropagation()
	})
	$(document).click(function(){
		$(".banner.left").animate({
			left:"-" + $(this).width() + "px"
		}, 350).fadeOut(200)
	})
	$(".banner.left .option").each(function(){
		Waves.attachColor(this, "#E91E63");
	}).click(function(){
		var sel = ".banner.left." + $(this).text().toLowerCase();
		$(sel).show().animate({
			left:"0px"
		}, 350);
		
		var href = $(this).attr("href")
		if(href){
			window.location.href = href
		}
		
		var h = window.location.href.split("#")[1] + ".html"
		$("iframe.content").attr("src", h)
	
	})
	$(".banner.left").click(function(e){
		e.stopPropagation();
	})
	$(".banner.left .title").click(function(){
		window.location.href = homeURL
	})
	$("iframe.content").each(function(){
		
		var h = window.location.href.split("#")[1] + ".html"
		$(this).attr("src", h)
	}).mouseover(function(){
		$(".banner.left").animate({
			left:"-" + $(this).width() + "px"
		}, 350).fadeOut(200)
	})
	$(".pagetop").click(function(){
		var w = window.open("mailto:illusionmaterial@gmail.com?subject=Material Bugs&body=Please state the version number your using and in detail, describe the issue.");
		setTimeout(function(){
			w.close()
		},100);
	})
})
