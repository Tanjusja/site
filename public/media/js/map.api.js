addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		var get = document.getElementById('getlocation');
		get = document.addEventListener('click',getLocation);
	}
	
	function getLocation() {
		navigator.geolocation.getCurrentPosition(showinfo, error, geoconfig); //если браузер определил местоположение, вызывается showinfo;
		//если не срабортал, то срабатывает error
	}
	var geoconfig = {
		enableHightAccuraty: true,
		timeout: 10000, //не успевает за 1 сотую секунды опредлить=100мс местоположение
		maximumAge: 60000 //через 60 сек будет переопределять местоположение
	}
	function showinfo(position) {
	console.log(position.coords);
		var location = document.getElementById('location'); //переменная для определения широты, долготы, точности
		var mapurl = 'http://maps.google.com/maps/api/staticmap?center= ' +position.coords.latitude+','+position.coords.longitude+'&zoom=17&size=500x500&sensor=false&markers='+position.coords.latitude+','+position.coords.longitude; // определяем широту и долготу для центра и маркера
		var img = '<img src = "'+mapurl+'"/>';
		var data = img;
		//var data = '';
		data +='Широта '+position.coords.latitude+'<br/>';
		data +='Долгота '+position.coords.longitude+'<br/>';
		data +='Точность '+position.coords.accuracy+'<br/>';
		location.innerHTML=data;
	}
	
	function error(er){
		alert('Ошибка  '+error.code+'  '+error.message);
	}