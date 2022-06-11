	let sy=0;
	let vy=10;
	let sx=0;
	let vx=10;
window.onkeydown = function move(){
    if(event.code == "ArrowRight"){
        sx-=vx;
        document.getElementById('map').style.backgroundPositionX = sx + 'px';
		document.getElementById('plane').style.transform = "rotate(90deg)";
			
    }
    if(event.code == "ArrowLeft"){
            sx+=vx;
            document.getElementById('map').style.backgroundPositionX = sx +'px';
			document.getElementById('plane').style.transform = "rotate(270deg)";
        }
		
	if(event.code == "ArrowUp"){
            sy+=vy;
            document.getElementById('map').style.backgroundPositionY = sy +'px';
			document.getElementById('plane').style.transform = "rotate(0deg)";
        }
		
	if(event.code == "ArrowDown"){
            sy-=vy;
            document.getElementById('map').style.backgroundPositionY = sy +'px';
			document.getElementById('plane').style.transform = "rotate(180deg)";
        }
};

