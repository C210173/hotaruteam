$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		console.log(pos_body);

// change color hightline
		if(pos_body<720){
			$('.color__0').removeClass('color__hightline');
			$('.color__1').removeClass('color__hightline');
			$('.color__2').removeClass('color__hightline');
			$('.color__3').removeClass('color__hightline');
		}
		if(pos_body>720 && pos_body<2272){
			$('.color__0').addClass('color__hightline');
			$('.color__2').addClass('color__hightline');
			$('.color__3').addClass('color__hightline');
			$('.color__1').removeClass('color__hightline');
		}
		if(pos_body>2272 && pos_body<3895) {
			$('.color__0').addClass('color__hightline');
			$('.color__1').addClass('color__hightline');
			$('.color__3').addClass('color__hightline');
			$('.color__2').removeClass('color__hightline');
		}
		if(pos_body>3895) {
			$('.color__0').addClass('color__hightline');
			$('.color__1').addClass('color__hightline');
			$('.color__2').addClass('color__hightline');
			$('.color__3').removeClass('color__hightline');
		}

// show leaf tokyo
		if(pos_body>225) {
			$('.leaf-01').addClass('leaf-01__show');
			$('.leaf-02').addClass('leaf-02__show');
			$('.leaf-03').addClass('leaf-03__show');
			$('.leaf-04').addClass('leaf-04__show');
			$('.leaf-05').addClass('leaf-05__show');
			$('.leaf-06').addClass('leaf-06__show');
			$('.leaf-07').addClass('leaf-07__show');
			$('.leaf-08').addClass('leaf-08__show');
		}
		else {
			$('.leaf-01').removeClass('leaf-01__show');
			$('.leaf-02').removeClass('leaf-02__show');
			$('.leaf-03').removeClass('leaf-03__show');
			$('.leaf-04').removeClass('leaf-04__show');
			$('.leaf-05').removeClass('leaf-05__show');
			$('.leaf-06').removeClass('leaf-06__show');
			$('.leaf-07').removeClass('leaf-07__show');
			$('.leaf-08').removeClass('leaf-08__show');
		}
// show title tokyo
		if(pos_body>225) {
			$('.tokyo__title__merge1').addClass('tokyo__title__merge1__show');
			$('.tokyo__title__merge2').addClass('tokyo__title__merge2__show');
			$('.tokyo__title__merge3').addClass('tokyo__title__merge3__show');
			$('.tokyo__title__merge4').addClass('tokyo__title__merge4__show');
			$('.tokyo__title__merge5').addClass('tokyo__title__merge5__show');
		}

// show momiji circle tokyo_sub
		if(pos_body>1190) {
			$('.tokyo__slider__momiji__circle').addClass('tokyo__slider__momiji__circle__show');
		}

// show title yokohama
		if(pos_body>1700) {
			$('.yokohama__title').addClass('yokohama__title__show');
		}

// show title yokohama__sub
		if(pos_body>2500) {
			$('.yokohama__sub__header').addClass('yokohama__sub__header__show');
		}

// show img yokohama__sub
		if(pos_body>2500) {
			$('.yokohama__sub__slider').addClass('yokohama__sub__slider__show');
		}

// show khối vuông yokohama__sub

		if(pos_body>3000) {
			$('.yokohama__sub__f1').addClass('yokohama__sub__f1__show');
			$('.yokohama__sub__f2').addClass('yokohama__sub__f2__show');
			$('.yokohama__sub__f3').addClass('yokohama__sub__f3__show');
		}

// show background saitama
		
		if(pos_body>3600) {
			$('.saitama__img__1').addClass('saitama__img__1__show');
			$('.saitama__img__2').addClass('saitama__img__2__show');
			$('.saitama__img__3').addClass('saitama__img__3__show');
			$('.saitama__img__4').addClass('saitama__img__4__show');
			$('.saitama__img__5').addClass('saitama__img__5__show');
		}
		
// show flower saitama

		if(pos_body>3600) {
			$('.flower-01').addClass('flower-01__show');
			$('.flower-02').addClass('flower-02__show');
			$('.flower-03').addClass('flower-03__show');
			$('.flower-04').addClass('flower-04__show');
			$('.flower-05').addClass('flower-05__show');
			$('.flower-06').addClass('flower-06__show');
			$('.flower-07').addClass('flower-07__show');
			$('.flower-08').addClass('flower-08__show');
			$('.flower-09').addClass('flower-09__show');
			$('.flower-10').addClass('flower-10__show');
			$('.flower-11').addClass('flower-11__show');
			$('.flower-12').addClass('flower-12__show');
		}
		else {
			$('.flower-01').removeClass('flower-01__show');
			$('.flower-02').removeClass('flower-02__show');
			$('.flower-03').removeClass('flower-03__show');
			$('.flower-04').removeClass('flower-04__show');
			$('.flower-05').removeClass('flower-05__show');
			$('.flower-06').removeClass('flower-06__show');
			$('.flower-07').removeClass('flower-07__show');
			$('.flower-08').removeClass('flower-08__show');
			$('.flower-09').removeClass('flower-09__show');
			$('.flower-10').removeClass('flower-10__show');
			$('.flower-11').removeClass('flower-11__show');
			$('.flower-12').removeClass('flower-12__show');
		}


// show back_to_top

		if(pos_body<700){
			$('.back_to_top').removeClass('back_to_top_show_tokyo');
			$('.back_to_top').removeClass('back_to_top_show_yokohama');	
		}
		if(pos_body>700 && pos_body<1725){
			$('.back_to_top').addClass('back_to_top_show_tokyo');
			$('.back_to_top').removeClass('back_to_top_show_yokohama');
		}
		if(pos_body>1725){
			$('.back_to_top').removeClass('back_to_top_show_tokyo');
			$('.back_to_top').addClass('back_to_top_show_yokohama');
		}
		
	});

	$('.back_to_top').click(function(event) {
		$('html, body').animate( {scrollTop : 0}, 100 );
        return false;
	});
});


