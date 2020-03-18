/*
Copyright 2020 3dhexagon.000webhostapp.com
Not for Use
*/

function hp3d(elm,colors=['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],bcolor='#000'){
	elm.style.perspective=(elm.offsetWidth*5)+'px';
	var hxgn=document.createElement('div');
	hxgn.style.width=elm.offsetWidth+'px';
	hxgn.style.height=elm.offsetHeight+'px';
	hxgn.style.transformStyle='preserve-3d';
	//hxgn.style.transform="rotateX(-90deg)";
	//hxgn.style.webkitAnimation="rot 20s infinite linear";
	elm.appendChild(hxgn);
	hxgn.className="hxgn";
	var fcs=new Array();
	var rotY=0,rotX=-90;
	for(var i=0;i<6;i++){
		fcs[i]=document.createElement('div');
		fcs[i].style.position='absolute';
		fcs[i].style.width=elm.offsetWidth+'.5px';
		fcs[i].style.height=elm.offsetHeight+'px';
		fcs[i].style.background=colors[i];
		fcs[i].style.border='0.5px solid '+bcolor;
		fcs[i].style.transformStyle='preserve-3d';
		fcs[i].style.transform='rotateY('+rotY+'deg) translateZ('+(elm.offsetWidth*87/100)+'px)';
		fcs[i].style.opacity="0.85";
		fcs[i].style.background="url('img/"+i+".jpg')";
		fcs[i].style.backgroundSize="100% 100%";
		hxgn.appendChild(fcs[i]);
		rotY+=60;
	}
	for(var i=6;i<8;i++){
		fcs[i]=document.createElement('div');
		var lt=document.createElement('div');
		var mid=document.createElement('div');
		var rt=document.createElement('div');
		lt.style.width='0px';
		lt.style.height='0px';
		lt.style.borderTop=(elm.offsetWidth*87.5/100)+'px solid transparent';
		lt.style.borderBottom=(elm.offsetWidth*87.5/100)+'px solid transparent';
		lt.style.borderRight=(elm.offsetWidth/2)+'px solid '+colors[i];
		lt.style.position='absolute';
		mid.style.width=(elm.offsetWidth+2)+'px';
		mid.style.height=(elm.offsetWidth*2*87.5/100)+'px';
		mid.style.left=(elm.offsetWidth/2-1)+'px';
		mid.style.background=colors[i];
		mid.style.position='absolute';
		rt.style.width='0px';
		rt.style.height='0px';
		rt.style.borderTop=(elm.offsetWidth*87.5/100)+'px solid transparent';
		rt.style.borderBottom=(elm.offsetWidth*87.5/100)+'px solid transparent';
		rt.style.borderLeft=(elm.offsetWidth/2)+'px solid '+colors[i];
		rt.style.position='absolute';
		rt.style.right='0px';
		fcs[i].style.position='absolute';
		fcs[i].style.width=(elm.offsetWidth*2)+'px';
		fcs[i].style.height=((elm.offsetWidth*2)*87.5/100)+'px';
		fcs[i].style.transformStyle='preserve-3d';
		fcs[i].style.transform='translateX('+(-elm.offsetWidth/2)+'px) rotateX('+rotX+'deg) translateZ('+(-elm.offsetWidth*87.5/100)+'px)';
		fcs[i].style.opacity="0.85";
		hxgn.appendChild(fcs[i]);
		fcs[i].appendChild(lt);
		fcs[i].appendChild(mid);
		fcs[i].appendChild(rt);
		rotX+=180;
	}
	var solve=elm.offsetHeight-elm.offsetWidth*87.5/100;
	fcs[7].style.transform='translateX('+(-elm.offsetWidth/2)+'px) rotateX(90deg) translateZ('+-solve+'px)';
}
function mousecont(elm,hxgn){
	
	var lastMouseX = 0,
		lastMouseY = 0;
	var rotX = 0,
		rotY = 0;

	$(elm).on("mousedown", function(ev) {
		lastMouseX = ev.clientX;
		lastMouseY = ev.clientY;
		$(elm).on("mousemove", mouseMoved);
	});
	$(elm).on("mouseup", function() {
		$(elm).off("mousemove", mouseMoved);
	});

	function mouseMoved(ev) {
		var deltaX = ev.pageX - lastMouseX;
		var deltaY = ev.pageY - lastMouseY;
		lastMouseX = ev.pageX;
		lastMouseY = ev.pageY;
		rotY += deltaX * 0.3;
		rotX -= deltaY * 0.3;
		if(rotX<0){
			rotX=360-(-rotX%360);
		}
		else{
			rotX=rotX%360;
		}
		if(rotX>90&&rotX<270)
		{
			rotY-=2*deltaX*0.3;
		}
		$(hxgn).css("transform", "rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");
		document.getElementById('rates').innerHTML='rotX:'+rotX+'<br>rotY:'+rotY;
	}
}