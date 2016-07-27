define(function(require,exports,module){

	var oInput=document.getElementById('input1');
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	var oDiv3=document.getElementById('div3');
	
	var drag=require('./drag.js');
	drag.drag(oDiv3);

	oInput.onclick=function(){
		oDiv1.style.display='block';
		// var scale=require('./resize.js').scale(oDiv1,oDiv2);
		// 异步加载 按需加载 
		require.async('./resize.js',function(ex){
			ex.scale(oDiv1,oDiv2);
		});
		
	}

})
