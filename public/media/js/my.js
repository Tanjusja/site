$(function(){
//������ ����, ������������

/*$('.topmenu a').bind('mouseover',function(){
		data=$(this).attr('data-url'); //���������� � ��������� �������� ���������
				//console.log(data); //����� �� ���������
		$('#header').css('background', 'url('+data+')');
		});//�������������� bind (����.��������, ��������� � ����-��� �������)
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