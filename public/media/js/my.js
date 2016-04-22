$(function(){
//начало кода, ограничитель

/*$('.topmenu a').bind('mouseover',function(){
		data=$(this).attr('data-url'); //обращается к атрибутам текущего селектора
				//console.log(data); //лучше не оставлять
		$('#header').css('background', 'url('+data+')');
		});//прослушиватель bind (вход.параметр, принимает в колл-бэк функцию)
		*/
		$('.topmenu a').bind({'mouseover':function(){
			data=$(this).attr('data-url'); 		
			$('#header').css('background', 'url('+data+')');
		},
		'mouseout':function(){
			$('#header').css('background','url(media/img/numbers5.jpg)');
		},
		});
		
		$('#leftmenu a').bind({'click':function(){
			data=$(this).attr('data-title'); 		
			data2=$(this).attr('data-body'); 		
			data3=$(this).attr('data-url'); 		
			$('.h3main').text(data);
			$('.main').html(data2);
			console.log(data);
			$('.img_main').html('<img src='+data3+'>');
			}	
		});
		$('.call').bind({'mouseover':function(){
			$('#tel_call').hide();
			$('.button_call').css('visibility','visible');
			},
			'mouseout':function(){
			$('#tel_call').show();
			$('.button_call').css('visibility','hidden');
			},
		});
		$('.button_call').bind({'click':function(){
			$('#form').css('display','block');
			},
		});
		/*$$('not(.button_call)').bind({'click':function(){
			$('#form').css('display','none');
			},
		});
		('.call').bind({'mouseover':function(){
			$(this).hide('data-title');
			$('.button_call').show('fast');
		}
		});*/
});