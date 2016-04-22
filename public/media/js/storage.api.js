addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		var button = document.getElementById('save');
		button.addEventListener('click',newitem);
		show();
	}
	
	function newitem() {
		var keyword = document.getElementById('keyword').value; //обращаемся к значению а не к id
		var value = document.getElementById('text').value; //обращаемся к значению а не к id
		sessionStorage.setItem(keyword, value); //sessionStorage является суперглобальным объектом
		//==sessionStorage[keyword] = value; аналогично массиву
		//show(keyword);
		show();
	}
	//	function show(keyword) {
	function show() {
		var databox = document.getElementById('databox');//куда выводить
		//var value = sessionStorage.getItem(keyword);//что выводить
		//databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';//сам вывод
		//databox.innerHTML = '';
		databox.innerHTML = '<input type="button" onclick="removeAll()" value="Очистить все"/>';
		for(var f=0; f<sessionStorage.length; f++) {
			var keyword = sessionStorage.key(f);
			var value = sessionStorage.getItem(keyword);
			databox.innerHTML += '<div>'+keyword+'-'+value+' <input type="button" onclick="removeItem(\''+keyword+'\')" value="remove"/></div>';
		}
	}
	function removeItem(keyword) {
		if(confirm('Вы уверены?')){
			sessionStorage.removeItem(keyword);
			show();
		}
	}
	function removeAll() {
		if(confirm('Вы уверены?')){
			sessionStorage.clear();
			show();
		}
	}