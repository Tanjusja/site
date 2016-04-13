addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		
		name1=document.getElementById('firstname');
		name2=document.getElementById('lastname');
		button=document.getElementById('button');
		form=document.getElementById('form');

		name1.addEventListener('input',validation);
		name2.addEventListener('input',validation);
		button.addEventListener('click',validation);
		
	}

	function validation() {
		
		if(name1.value==''&&name2.value==''){
			name1.setCustomValidity('Заполните хотя бы одно поле');
			name1.style.background='red';
			name2.style.background='red';
			
		}
		else {
			name1.setCustomValidity('');
			name1.style.background='white';
			name2.style.background='white';
			form.submit();
		}
		
	}
	