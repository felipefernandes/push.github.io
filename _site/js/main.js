$(document).ready(function() {

	/* 
		Navegação do site
	*/

	$('.nav a').click(function() {
		var areaId = $(this).attr('href');

		$('.nav a').parent().removeClass('active'); //reset all
		$(this).parent().addClass('active');		//add on current	

		if ((areaId == "#sobre") || (areaId == "#blog")) {
			$('body').scrollTo( areaId, 1000, { offset: 130 } );	//add or deduct from the final position				
		} 	
		else if (areaId == "#contato") {
			$('body').scrollTo( areaId, 1000, { offset: 166 } );	//add or deduct from the final position				
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


	/*
		Para cada load da página carrega uma imagem diferente no frontsite bg

	*/
	arr_colecao_bg = ["/img/bg-frontpage-1.png", 
					  "/img/bg-frontpage-2.png", 
					  "/img/bg-frontpage-3.png", 
					  "/img/bg-frontpage-4.png",
					  "/img/bg-frontpage-5.jpg",
					  "/img/bg-frontpage-6.jpg"];

	rand_num = Math.floor((Math.random() * arr_colecao_bg.length) + 1);
	bg_img_src = arr_colecao_bg[ rand_num ];

	console.log(bg_img_src);

	$('#frontSite .bg-frontsite').css({
		"background-color" 	: '#000',
		"background-image" 	: "url('" + bg_img_src + "')",
		"background-align" 	: "center",
		"background-repeat" : 'no-repeat',
		"background-size"	: "100%"
	});


});