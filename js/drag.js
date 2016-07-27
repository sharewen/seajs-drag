define(function(require,exports,module){

	// onmousedown onmousedown onmouseup
	// 1. 当拖拽图片时 浏览器默认行为 会残留在原来的位置 return false
	// 2. IE8 之前的版本 ，选中元素时就有问题
	//  在IE 选中元素时生成一个透明的层 setCapture() 全局捕获（就是生成一个透明的层）
	// 释放全局捕获 releaseCapture()
	function drag(obj){
		var disX=0;
		var disY=0;
		obj.onmousedown=function(ev){
			var ev=ev|| window.event;
			disX=ev.clientX-obj.offsetLeft;// 鼠标按下时距离obj左边距离
			disY=ev.clientY-obj.offsetTop;

			if(obj.setCapture){
				obj.setCapture(); // 增加一个遮罩层
			}
			// obj.onmousemove=function(){}  因为 mousemove 有反应时间 当快速拖拽时 鼠标脱离 出问题
			document.onmousedown=function(ev){ // 鼠标作用在document上, 有反应时间 也会到达鼠标的点
				var ev=ev||window.event;

				var L=require('./range.js').range(ev.clientX-disX,document.documentElement.clientWidth-obj.offsetWidth,0);
				var T=require('./range.js').range(ev.clientY-disY,document.documentElement.clientHeight-obj.offsetHeight,0)
				obj.style.left=L+'px';
				obj.style.top=T+'px';

			}
			document.onmouseup=function(){
				document.onmousemove=null;// 当up时 move还在 所以要滞空
				document.onmouseup=null;
				if(obj.releaseCapture){
					obj.releaseCapture();
				}
			}

			return false;// 阻止默认行为
		}
	}
	exports.drag=drag;

});
