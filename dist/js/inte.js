"use strict";function next(e){var p=0,r=e.length;return function(){return p<r?e[p++]:null}}function parse(e){function p(){u.length>0&&o.push(u.join("")),u=[]}for(var r,s,o=[],u=[],n=[],t=[];null!==(r=e());)if("("===r)n.push(t),t=[];else if(")"===r){for(p();s=t.pop();)o.push(s);t=n.pop()}else if(op[r]){for(p();op[t[t.length-1]]>op[r]||!rc[r]&&op[t[t.length-1]]===op[r];)o.push(s=t.pop());t.push(r)}else u.push(r);for(p();s=t.pop();)o.push(s);return o}function interpret(e){for(var p,r=[],e=e.slice();p=e.shift();)if(op[p]){var s=Number(r.pop()),o=Number(r.pop());switch(p){case"+":r.push(o+s);break;case"-":r.push(o-s);break;case"*":r.push(o*s);break;case"/":r.push(o/s);break;case"^":r.push(Math.pow(o,s))}}else r.push(p);return r}var op={"+":1,"-":1,"*":2,"/":2,"^":3},rc={"^":1},s=parse(next("(1+2)^(3*(2^2))/5"));console.log(s,interpret(s));