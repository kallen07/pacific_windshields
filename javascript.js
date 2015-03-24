$(document).ready(function(){

	if( document.documentElement.clientWidth < 480 ) {
		text = $("p#callnow").html("<p>Call Now</p><p>635-9000</p>");
		$("p#callnow").css("font-size", "40px");
		$("p#callnow").css("text-align", "center");
		$("p#callnow").css("margin", "0");
		$("p#callnow").css("font-family", "palatino");
	}
	
	else {
		text = $("p#callnow").html("<p>Call Now 635-9000</p>");
		$("p#callnow").css("color", "#0778be;");
	}
	
	if( document.documentElement.clientWidth > 880 ) {
	 	$("div#fade").hide();
	 	setTimeout(function() {
            	$("div#fade").fadeIn(3000);
         	},700);   
         		 
 	}
 	
});

	