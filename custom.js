$(document).ready(function(){

	
	setTimeout(function(){
		$("#bhavul").animate({
			opacity: 1},
			1000, function() {
			/* stuff to do after animation is complete */
		});
		$(".typed-cursor").show(2500);
	},1000);

	$("#p_taglines").typed({
		strings : ["a computer science undergrad at bits pilani university",
		"a seasoned web and graphic designer","a sucker for poor jokes and puns",
		"a novice programmer","a hopeful poet/writer","a fat guy",
		"a live walking gadget news feed","a cute face",
		"a passionate workaholic for the work I take up","a free soul",
		"a hobbit sized thinking machine","a solitary walker",
		"a silent guardian","a man of the night's watch","a dreamer",
		"a million in one."],

		typespeed : 10,
		startDelay : 5000,
		backDelay : 1500,
		callback : function(){
			$(".typed-cursor").hide('slow');
		}
	});

	$("#about-link").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".header").animate({
			backgroundColor: "#e74c3c"},
			500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".header").animate({
			backgroundColor: "#2BB9D8"},
			500);
	});

	$("#interests-link").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".header").animate({
			backgroundColor: "#8e44ad"},
			500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".header").animate({
			backgroundColor: "#2BB9D8"},
			500);
	});

	$("#projects-link").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".header").animate({
			backgroundColor: "#16a085"},
			500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".header").animate({
			backgroundColor: "#2BB9D8"},
			500);
	});

	$("#contact-link").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".header").animate({
			backgroundColor: "#2c3e50"},
			500);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".header").animate({
			backgroundColor: "#2BB9D8"},
			500);
	});

	$("#about-link").click(function(){
		$("#about-section").animate({top:"0%"},750,'easeOutElastic');
		$("#heading").text("i am...").css("font-size","16vmin");
		
	});

	
		
});