function downBox() {
	var venJudge = true;
	var venIndex;
	$('.ven-sel span').on('click', function() {
		if (venIndex == $(this).parent('div').index()) {
			if (venJudge == true) {
				$(this).siblings('ul').css({display : 'block'});
				$(this).parent('.ven-sel').siblings('.ven-sel').children('ul').css({display : 'none'});
				venJudge = false;
				venIndex = $(this).parent('div').index();
			}
			else {
				$(this).siblings('ul').css({display : 'none'});
				venJudge = true;
				venIndex = $(this).parent('div').index();
			}
		}
		else {
			venJudge = true;
			if (venJudge == true) {
				$(this).siblings('ul').css({display : 'block'});
				$(this).parent('.ven-sel').siblings('.ven-sel').children('ul').css({display : 'none'});
				venJudge = false;
				venIndex = $(this).parent('div').index();
			}
			else {
				$(this).siblings('ul').css({display : 'none'});
				venJudge = true;
				venIndex = $(this).parent('div').index();
			}
		}
		
	})
	$('.ven-sel ul li').hover(function() {
		$(this).css({background : '#d4e5ee'});
		$(this).on('click', function() {
			$(this).parent('ul').siblings('span').html($(this).html());
			$(this).parent('ul').css({display : 'none'});
			venJudge = true;
		})
	},function() {
		$(this).css({background : '#fff'})
	})
}
downBox();

function selFontsColor() {
	var fontsColor = document.getElementById('hhwTable').getElementsByTagName('span');
	var fontsLens = fontsColor.length;

	for (var i = 0; i < fontsLens; i++) {
		if (fontsColor[i].innerHTML == '已取消' || fontsColor[i].innerHTML == '待确认' || fontsColor[i].innerHTML == '已过期' || fontsColor[i].innerHTML == '未支付') {
			fontsColor[i].style.color = '#df7901';
		}
		if (fontsColor[i].innerHTML == '已确认' || fontsColor[i].innerHTML == '部分消费' || fontsColor[i].innerHTML == '已付款') {
			fontsColor[i].style.color = '#2fa501';
		}
		if (fontsColor[i].innerHTML == '已消费' || fontsColor[i].innerHTML == '已退款') {
			fontsColor[i].style.color = '#0f6701';
		}
	}	
}
selFontsColor();