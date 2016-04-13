addEventListener ('load', initiate); //к селектору добавляем прослушиватель, здесь не указан селектор, по умолчанию прослушиваем всю страницу: document
	function initiate() {
		maxim=400;
		media=document.getElementById('media'); //getElementsByTagName, getElementsByClass, querySelector(''), querySelectorAll('')
		play=document.getElementById('play');
		progress=document.getElementById('progress');
		bar=document.getElementById('bar');
		mute=document.getElementById('mute');
		volume=document.getElementById('volume');
		leftmenu=document.getElementById('leftmenu');
		
		play.addEventListener('click',push);
		mute.addEventListener('click',sound);
		bar.addEventListener('click',move);
		volume.addEventListener('change',level); //ползунок
	}

	function push() {
	if (!media.paused&&!media.ended) {
		media.pause();
		play.value='Play';
		clearInterval(loop);
		}
	else { 
		media.play();
		play.value='Pause';
		loop=setInterval(status,1000); //каждую 1000мс будет запускаться функция статус; если достигается конец, то clearInterval(loop);
		}
	}
	function status(){
		if (!media.ended) {
			var size=parseInt(media.currentTime*maxim/media.duration); //округление
			progress.style.width=size+'px';
		}
		else {
			progress.style.width='0';
			play.InnerHTML='Play';
			clearInterval(loop);
		}
			
	}
	function sound(){
		if (mute.value=='Mute') {
			media.muted=true;
			mute.value='Sound';
		}
		else {
			media.muted=false;
			mute.value='Mute';
		}
	}
	function move(e){
		var mouseX=e.pageX-bar.offsetLeft-leftmenu.offsetWidth;
		var newTime=mouseX*media.duration/maxim;
		media.currentTime=newTime;
		progress.style.width=mouseX+'px';
		console.log(mouseX);
		console.log(leftmenu);
		
	}
	function level() {
		media.volume=volume.value;
	}