(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(12),a(13),a(4)),o=a(1);var i=function(e){var t=e.handleClick,a=e.value,n=a?"squares ${value}":"squares";return r.a.createElement("div",null,r.a.createElement("button",{className:n,onClick:t},a))};var m=function(e){var t=e.squares,a=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(i,{key:t,value:e,handleClick:function(){return a(t)}})})))};var s=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),i=Object(o.a)(l,2),s=i[0],v=i[1],f=Object(n.useState)(!0),E=Object(o.a)(f,2),b=E[0],d=E[1],p=b?"X":"O",j=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(o.a)(t[a],3),r=n[0],c=n[1],l=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}(a[s]),h=a.map((function(e,t){var a=t?"Go to move #"+t:"Go to game start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return v(e=t),void d(e%2===0);var e}},a))}));return r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Tic Tac Toe Game"),r.a.createElement("div",null,r.a.createElement(m,{squares:a[s],onClick:function(e){var t=a.slice(0,s+1),n=t[s],r=Object(u.a)(n);j||r[e]||(r[e]=p,c([].concat(Object(u.a)(t),[r])),v(t.length),d(!b))}})),r.a.createElement("div",{className:"info"},r.a.createElement("div",null,r.a.createElement("h3",null,"History"),h),r.a.createElement("h3",null,j?"Winner: "+j:"Next player: "+p)))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null))};a(14);l.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.8da77272.chunk.js.map