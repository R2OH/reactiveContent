$(document).ready(function(){
	//shows Blue Story and hides Red Story
	$("#blue1").click(function() {
		$(".blue1").toggle()
		$(".red1").hide()
	});
	//shows Red Story and hides Blue Story
	$("#red1").click(function() {
		$(".red1").toggle()
		$(".blue1").hide()
	});

});