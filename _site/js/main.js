$(document).ready(function() {

	$('.nav a').click(function() {
		var areaId = $(this).attr('href');

		$('.nav a').parent().removeClass('active'); //reset all
		$(this).parent().addClass('active');		//add on current	

		if ((areaId == "#sobre") || (areaId == "#blog")) {
			$('body').scrollTo( areaId, 1000, { offset: 130 } );	//add or deduct from the final position				
		} 	
		else {
			$('body').scrollTo( areaId, 1000 );		//add or deduct from the final position	
		}
	});


	$('.role-para-baixo').click(function() {		
		$('.nav a#nav_btn_talentos').click();
	});

	$('#entre-em-contato').click(function() {
		$('.nav a#nav_btn_contato').click();
	});

});