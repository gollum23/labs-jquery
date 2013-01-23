$(document).on('ready',inicio)

function inicio(){
	$(window).scroll(seguir)
}
function seguir(){
	y = $('#principal').offset().top;
	yw = window.pageYOffset;
	c = $('#caja').height()-10;
	h = $('header').height();
	lc = $('#lcolumn').height();
	console.log(y-yw+' , '+(yw));
	if (y-yw <= 10){
		$('#caja').addClass("cajafixed");
		if(y-yw <=10 && (yw+c > h+lc)){
			$('#caja').removeClass("cajafixed")
			$('#caja').addClass("cajafixed1");
		}else {
			$('#caja').removeClass("cajafixed1")
		}
	}
	else {
		$('#caja').removeClass("cajafixed");
	}
}