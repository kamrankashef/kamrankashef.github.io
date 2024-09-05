(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
    
    //animateCircle(600,600,0,2/3*(curSlide-1),2/3*curSlide);
    function animateCircle(ctx,x,y,r,m,w,d,c,s,sp)
		{
			var di=0;
			if(!sp) sp=0.002;
			if(d == "L") di=1; 
			ctx.lineWidth = w;
			ctx.strokeStyle = c;
			ctx.beginPath();
		  ctx.arc(x, y, r, m*Math.PI, s*Math.PI,di);
		  //console.log(x, y, r, 0, s*Math.PI,di);
		  ctx.stroke();
		  if (s<2 && s>-2) c1a=requestAnimationFrame(function() { animateCircle(ctx,x,y,r,m,w,d,c,(di?s-sp:s+sp),sp); });
		  //console.log(m,s);
		}
		
		window.CL = window.CL || 
		{
			init:function()
			{
				var a=arguments;
				var c = a[0].get(0);
				var ctx = c.getContext("2d");
				//ctx.globalAlpha = 0.3;
				for (var i=0;i<a[1].length;i++)
	 			{
	 				//console.log(a[1][i]);
	 				animateCircle(ctx,a[1][i][0],a[1][i][1],a[1][i][2],a[1][i][3],a[1][i][4],a[1][i][5],a[1][i][6],a[1][i][3],a[1][i][7]||0.002);
	 			}	
			}
		}
}());
