addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		var images = document.querySelectorAll('#picturesbox>img');
		for(var i=0;i<images.length; i++){
			images[i].addEventListener('dragstart',dragged);//добавили прослушиватель для всех картинок
		}
		//source1 = document.getElementById('image'); //переменная для источника
		//source1.addEventListener('dragstart',dragged); //прослушиватель для источника
		drop = document.getElementById('dropbox'); //переменная для целевого документа
		drop.addEventListener('dragenter',enter);//прослушиватель  для целевого документа
		drop.addEventListener('dragover',over); //по методу dragover срабатывает функция over
		drop.addEventListener('drop',dropped);//отпустили элемент
		
	}	
	function enter(e){
		e.preventDefault();
		drop.style.background = 'teal';
	}
	function over(e){
		e.preventDefault();
	}	
	function dragged(e){
		element = e.target; //то же самое что this - jquery
		e.dataTransfer.setData('Text',element.getAttribute('id')); //передаем из целевой в источник
		/*var code='<img src= " '+source1.getAttribute('src')+' ">';
		e.dataTransfer.setData('Text',code);//объявляет переменную для передачи целевой*/
		drop.style.background = 'yellow';
	}
	function dropped(e){
		e.preventDefault(); //отмена действия по умолчанию
		var id = e.dataTransfer.getData('Text');
		var src = document.getElementById(id).src;
		var img = '<img src = "'+src+'"/>';
		
		drop.innerHTML += img;
		/*drop.innerHTML=e.dataTransfer.getData('Text'); //перехват данных*/
		drop.style.background = 'red';
		drop.style.color = 'red';
	}