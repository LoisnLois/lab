function initbox(){(dom||ie||ns4)&&(crossobj=dom?document.getElementById("dropin").style:ie?document.all.dropin:document.dropin,scroll_top=ie?document.body.scrollTop:window.pageYOffset,crossobj.top=scroll_top-70+"px",document.body.offsetWidth>660?crossobj.left=(document.body.offsetWidth-550)/2+"px":crossobj.left=(document.body.offsetWidth-350)/2+"px",crossobj.visibility=dom||ie?"visible":"show",dropstart=setInterval("dropin()",50))}function dropin(){scroll_top=ie?document.body.scrollTop:window.pageYOffset,parseInt(crossobj.top)<scroll_top-30?crossobj.top=parseInt(crossobj.top)+32+"px":(clearInterval(dropstart),bouncestart=setInterval("bouncein()",50))}function bouncein(){crossobj.top=parseInt(crossobj.top)-bouncelimit+"px",bouncelimit<0&&(bouncelimit+=8),0==(bouncelimit*=-1)&&clearInterval(bouncestart)}function dismissbox(){window.bouncestart&&clearInterval(bouncestart),crossobj.visibility="hidden"}function shiny(){"none"===$(".panelhome i").css("display")?$(".panelhome i").show():$(".panelhome i").hide()}function birdfly(){$(".box > div").animate({marginLeft:(document.body.scrollWidth-550)/2},{queue:!0,duration:5e3,complete:function(){$(".box > div").css("transform","rotateY(180deg)")}}).animate({marginLeft:-141},1e3,function(){$(".box > div").css("transform","rotateY(0deg)")})}var ie=document.all,dom=document.getElementById,ns4=document.layers,bouncelimit=32,curtop,direction="up",boxheight="",timer=setInterval("birdfly()",1e3);setTimeout("initbox()",6200);var shinytimer=setInterval("shiny()",500);setTimeout("clearInterval(shinytimer);$('.panelhome i').show();",11e3),setTimeout("clearInterval(timer)",1e3);var Wave=function(){function e(){var e=y.createLinearGradient(.5*x,.2*f,.5*x,f);e.addColorStop(0,"#00aabb"),e.addColorStop(1,"rgba(0,200,250,0)"),y.clearRect(0,0,x,f),y.fillStyle=e,y.beginPath(),y.moveTo($[0].x,$[0].y);for(var t,i,r,a=0;a<$.length;a++)if(t=$[a],i=$[a-1],r=$[a+1],i&&r){var l=0;if(l+=-h*(i.y-t.y),l+=h*(t.y-r.y),l+=h/15*(t.y-t.original.y),t.velocity.y+=-l/t.mass+t.force.y,t.velocity.y/=b,t.force.y/=b,t.y+=t.velocity.y,(s=n(W,t))<g){var s=n(W,{x:t.original.x,y:t.original.y});j.x=.98*j.x,j.y=.98*j.y,t.force.y+=p*(1-s/g)*j.y}y.quadraticCurveTo(i.x,i.y,i.x+(t.x-i.x)/2,i.y+(t.y-i.y)/2)}y.lineTo($[$.length-1].x,$[$.length-1].y),y.lineTo(x,f),y.lineTo(0,f),y.lineTo($[0].x,$[0].y),y.fill(),y.fillStyle="#rgba(0,200,255,0)",y.beginPath();for(a=0;a<E.length;a++){var c=E[a],v=o(c);if(d=n(W,c),c.velocity.y/=c.y>v.y?I:M,c.velocity.y+=c.y>v.y?-.01*(c.y-v.y)/c.mass:1/c.mass,c.y+=c.velocity.y,c.x>x-c.currentSize&&(c.velocity.x=-c.velocity.x),c.x<c.currentSize&&(c.velocity.x=Math.abs(c.velocity.x)),c.velocity.x/=1.04,c.velocity.x=c.velocity.x<0?Math.min(c.velocity.x,-.8/c.mass):Math.max(c.velocity.x,.8/c.mass),c.x+=c.velocity.x,!1===c.dissolved)y.moveTo(c.x,c.y),y.arc(c.x,c.y,c.currentSize,0,2*Math.PI,!0);else{for(c.velocity.x/=1.15,c.velocity.y/=1.05;c.children.length<c.dissolveSize;)c.children.push({x:0,y:0,size:Math.random()*c.dissolveSize,velocity:{x:20*Math.random()-10,y:-10*Math.random()}});for(var m=0;m<c.children.length;m++){var u=c.children[m];u.x+=u.velocity.x,u.y+=u.velocity.y,u.velocity.x/=1.1,u.velocity.y+=.4,u.size/=1.1,y.moveTo(c.x+u.x,c.y+u.y),y.arc(c.x+u.y,c.y+u.y,u.size,0,2*Math.PI,!0)}}}y.fill()}function o(e){for(var o=0,t=1e3,i=0;i<$.length;i++){var r=n($[i],e);r<t&&(t=r,o=i)}return $[o]}function t(){if(E.length>z){var e=0;if(E[e].dissolved){for(;e<E.length;e++)if(0==E[e].dissolved){E[e].dissolveSize=S,i(e);break}}else i(e)}var o=15+15*Math.random(),t={x:30+Math.random()*(x-30),y:f-30,velocity:{x:30*Math.random()-15,y:0},size:o,mass:o/30+1,dissolved:!1,dissolveSize:T,children:[]};t.currentSize=t.size,E.push(t)}function i(e){var o=E[e];0==o.dissolved&&(o.dissolved=!0,setTimeout(function(){for(var e=0;e<E.length;e++)if(E[e]==o){E.splice(e,1);break}},2e3))}function n(e,o){var t=o.x-e.x,i=o.y-e.y;return Math.sqrt(t*t+i*i)}function r(e){j.x=Math.max(Math.min(e.layerX-W.x,40),-40),j.y=Math.max(Math.min(e.layerY-W.y,40),-40),W.x=e.layerX,W.y=e.layerY}function a(e){mouseIsDown=!0;for(var o=E.length,t=1e3,i=0;i<o;i++){var r=n(E[i],W);r<t&&(t=r,i)}}function l(e){mouseIsDown=!1}function s(){x=window.innerWidth,f=window.innerHeight,c.width=x,c.height=f;for(var e=0;e<=w;e++)$[e].x=x/(w-4)*(e-2),$[e].y=.5*f,$[e].original.x=$[e].x,$[e].original.y=$[e].y}var c,y,v,m,u=function(e,o,t){e.addEventListener?e.addEventListener(o,t,!1):e.attachEvent("on"+o,function(){t.call(e)})},x=window.innerWidth,f=window.innerHeight,h=.75,b=1.14,p=.09,g=200,w=Math.round(x/50),I=1.07,M=1.02,z=10,T=20,S=6,j={x:0,y:0},W={x:0,y:0},$=[],E=[];return function(o){if((c=document.getElementById(o))&&c.getContext){y=c.getContext("2d");for(var i=0;i<=w;i++)$.push({x:x/(w-4)*(i-2),y:f/2,original:{x:0,y:f/2},velocity:{x:0,y:3*Math.random()},force:{x:0,y:0},mass:10});u(c,"mousemove",r),u(c,"mousedown",a),u(c,"mouseup",l),u(window,"resize",s),v=setInterval(e,40),m=setInterval(t,400),t(),s()}}}();new Wave("canvas");