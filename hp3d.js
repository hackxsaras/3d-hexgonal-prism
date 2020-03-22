/*
Copyright © hackxsaras
*/

function hp3d(elm){
	elm.style.perspective=(elm.offsetWidth*5)+'px';
	var hxgn=document.createElement('div');
	hxgn.style.width=elm.offsetWidth+'px';
	hxgn.style.height=elm.offsetHeight+'px';
	hxgn.style.transformStyle='preserve-3d';
	elm.appendChild(hxgn);
	hxgn.className="hxgn";
	var fcs=new Array();
	var rotY=0,rotX=-90;
	for(var i=0;i<6;i++){
		fcs[i]=document.createElement('div');
		fcs[i].style.position='absolute';
		fcs[i].style.width=elm.offsetWidth+'.5px';
		fcs[i].style.height=elm.offsetHeight+'px';
		fcs[i].style.transformStyle='preserve-3d';
		fcs[i].style.transform='rotateY('+rotY+'deg) translateZ('+(elm.offsetWidth*87/100)+'px)';
		hxgn.appendChild(fcs[i]);
		rotY+=60;
	}
	for(var i=6;i<8;i++){
		fcs[i]=document.createElement('div');
		fcs[i].style.position='absolute';
		fcs[i].style.width=(elm.offsetWidth*2)+'px';
		fcs[i].style.height=((elm.offsetWidth*2)*87.5/100)+'px';
		fcs[i].style.webkitClipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
		fcs[i].style.clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
		fcs[i].style.transformStyle='preserve-3d';
		fcs[i].style.transform='translateX('+(-elm.offsetWidth/2)+'px) rotateX('+rotX+'deg) translateZ('+(-elm.offsetWidth*87.5/100)+'px)';
		hxgn.appendChild(fcs[i]);
		rotX+=180;
	}
	var solve=elm.offsetHeight-elm.offsetWidth*87.5/100;
	fcs[7].style.transform='translateX('+(-elm.offsetWidth/2)+'px) rotate(180deg) rotateY(180deg) rotateX(90deg) translateZ('+solve+'px)';
	return hxgn;
}