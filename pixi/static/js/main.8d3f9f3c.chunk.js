(this["webpackJsonppixi-screen"]=this["webpackJsonppixi-screen"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},36:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(14),s=n.n(c),i=(n(24),n(19)),r=n(18),u=n(5),d=(n(25),n(3)),p=n(1),f=(n(36),n(2)),h=function(t){var e=t.progress;return Object(f.jsx)("div",{className:"container",children:Math.round(+e)})},j=function(t){var e=t.points,n=t.x,o=t.y;return Object(f.jsx)(d.Graphics,{x:n,y:o,scale:.4,draw:function(t){t.clear(),t.lineStyle(2,16761538),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);for(var o=1;o<e.length;o++)t.beginFill(16711714),t.drawCircle(e[o].x,e[o].y,10),t.endFill()}})},x=function(t){t.dx,t.dy;var e=Object(o.useRef)(0),n=Object(o.useMemo)((function(){for(var t=[],e=0;e<25;e++)t.push(new p.l(45*e,0));return t}),[]),a=Object(o.useState)(!0),c=Object(u.a)(a,2),s=c[0],i=c[1],h=Object(o.useState)(n),x=Object(u.a)(h,2),b=x[0],l=x[1],w=Object(o.useState)(-500),O=Object(u.a)(w,2),m=O[0],g=O[1];return Object(d.useTick)((function(t){for(var n=e.current+=.1*t,o=Object(r.a)(b),a=0;a<o.length;a++)o[a].x=45*a+20*Math.cos(.3*a+n),o[a].y=30*Math.sin(.5*a+n);l(o)})),Object(o.useEffect)((function(){m>500?setTimeout((function(){g(-500)}),10):setTimeout((function(){g(m+1)}),10)}),[m]),Object(f.jsxs)(d.Container,{interactive:!0,pointerdown:function(){return i((function(t){return!t}))},children:[Object(f.jsx)(d.SimpleRope,{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/snake.png",points:b,scale:.4,x:m,y:160}),s&&Object(f.jsx)(j,{points:b,x:m,y:160})]})},b=function(t,e){return e.data},l=function(){var t=Object(o.useReducer)(b),e=Object(u.a)(t,2),n=e[0],a=e[1],c=Object(o.useRef)(0);return Object(d.useTick)((function(t){var e=c.current+=.03*t;a({type:"update",data:{x:100*Math.sin(e)+200,y:100*Math.sin(e/1.5)+200,rotation:Math.sin(e)*Math.PI,anchor:Math.sin(e/2)}})})),Object(f.jsx)(d.Sprite,Object(i.a)({image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"},n))},w=function(){var t=Object(o.useState)(0),e=Object(u.a)(t,2),n=e[0],a=e[1],c=window.screen,s=c.width,i=c.height,r=i/300*500,j=i,b=Object(o.useState)({w:r,h:j/2}),w=Object(u.a)(b,2),O=w[0],m=w[1],g=Object(o.useState)({x:r,y:j}),y=Object(u.a)(g,2),S=y[0],v=y[1],M=Object(o.useState)({w:r,h:j}),k=Object(u.a)(M,2),z=k[0],H=k[1],T=Object(o.useState)({dx:0,dy:0}),B=Object(u.a)(T,2),C=B[0],I=B[1];return Object(o.useEffect)((function(){try{var t=new p.h;t.add(["https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/placeholder.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/snake.png","https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1624542316132-da49c1000e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1624649679167-46277a445e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"]).load((function(){})),t.onStart.add((function(){})),t.onError.add((function(){})),t.onLoad.add((function(){})),t.onProgress.add((function(t){var e=t.progress;a(e)})),t.onComplete.add((function(){}))}catch(e){console.error(e)}}),[]),Object(o.useEffect)((function(){H({x:s/360*180,y:i/640*130})}),[s,i]),100!==n?Object(f.jsx)(h,{progress:n}):Object(f.jsx)(d.Stage,{width:r,height:j,options:{backgroundAlpha:0},children:Object(f.jsx)(d.Container,{interactive:!0,pointermove:function(t){var e=t.data.global,n=e.x,o=e.y,a={up:4,down:-4};O.h>=j/2&&(a.up=0);var c=n>S.x?a.up:a.down,s=o>S.y?a.up:a.down;I({dx:c,dy:s}),m({w:O.w+c,h:O.h+s}),v({x:n,y:o})},children:Object(f.jsxs)(d.Sprite,{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/placeholder.png",width:r,height:j,anchor:.5,y:O.h,children:[Object(f.jsx)(d.Text,{text:O.h,anchor:.5,x:z.x,y:O.h/2,style:new p.q({align:"center",fontFamily:'"Source Sans Pro", Helvetica, sans-serif',fontSize:s*i/230400*20,fontWeight:400,fill:["#ffffff","#00ff99"],stroke:"#01d27e",strokeThickness:5,letterSpacing:10,dropShadow:!0,dropShadowColor:"#ccced2",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6,wordWrap:!0,wordWrapWidth:600})}),Object(f.jsx)(l,{}),Object(f.jsx)(d.Container,{interactive:!0,pointerdown:function(t){console.log("test:",t),alert("click me")},children:Object(f.jsx)(d.Sprite,{anchor:.5,x:50,y:O.h+2,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"})}),Object(f.jsx)(d.Sprite,{anchor:.5,x:100,y:400,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"}),Object(f.jsx)(d.Sprite,{anchor:.5,x:175,y:405,image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"}),Object(f.jsx)(x,{dx:C.dx,dy:C.dy})]})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),c(t),s(t)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),O()}},[[38,1,2]]]);
//# sourceMappingURL=main.8d3f9f3c.chunk.js.map