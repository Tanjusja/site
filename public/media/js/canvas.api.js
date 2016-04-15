addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		
		var elem=document.getElementById('canvas'); //getElementsByTagName, getElementsByClass, querySelector(''), querySelectorAll('')
		var canvas=elem.getContext('2d');//у браузера есть 2д и 3д рисовалки. Все переменные будут использовать через переменную canvas
		canvas.save(); //текущее состояние холста
		
		canvas.fillStyle = 'teal';
		canvas.strokeStyle = 'gold';
		canvas.strokeRect(100,100,120,120);
		canvas.fillRect(110,110,100,100);
		canvas.clearRect(120,120,80,80);

		canvas.restore();
		canvas.strokeStyle = 'gold';
		grad = canvas.createLinearGradient(100,0,500,300);
		grad.addColorStop(0.2, 'blue');
		grad.addColorStop(1, 'black');
		canvas.fillStyle = grad;
		canvas.strokeRect(300,100,120,120);
		canvas.fillRect(310,110,100,100);
		canvas.clearRect(320,120,80,80);

		canvas.beginPath();
		canvas.arc(200, 100, 50, 0, Math.PI*2, false);
		canvas.closePath();
		canvas.stroke();
		canvas.restore();
		var radians = Math.PI/180*90;
		canvas.arc(60,60,30,140, radians, false);
		canvas.closePath();
		canvas.fill();
		
		
		canvas.beginPath();
		canvas.moveTo(50,50);
		canvas.quadraticCurveTo(100,125,50,200);
		canvas.moveTo(250,50);
		canvas.bezierCurveTo(200,125,300,125,250,200); //x1y1 xy x2y2
		canvas.closePath();
		canvas.stroke();
		
		
		canvas.beginPath();
		canvas.moveTo(500,100);
		canvas.lineTo(600,200);
		canvas.lineTo(500,200);
		canvas.clip();
		for(var f=0; f<300; f=f+10) {
			canvas.moveTo(0,f);
			canvas.lineTo(500,f);
		}
		canvas.closePath();
		canvas.stroke();
		canvas.restore();
		
	}