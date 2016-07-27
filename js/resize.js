define(function(require,exports,module){

	function scale(obj1,obj2){
		var disX=0;
		var disY=0;
		var disW=0;
		var disH=0;

		obj2.onmousedown=function(ev){
			var ev=ev|| window.event;
			disX=ev.clientX;
			disY=ev.clientY;
			disW=obj1.offsetWidth;
			disH=obj1.offsetHeight;

			document.onmousemove=function(ev){
				var ev=ev|| window.event;
				var L=require('./range.js').range(ev.clientX-disX+disW,500,100);
			  	var T=require('./range.js').range(ev.clientY-disY+disH,500,100);
			    obj1.style.width=L+'px';
			    obj1.style.height=T+'px';

			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}

		}

	}
	exports.scale=scale;

});
