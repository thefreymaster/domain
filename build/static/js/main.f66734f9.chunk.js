(this.webpackJsonprainmaker=this.webpackJsonprainmaker||[]).push([[0],{312:function(e,t,n){e.exports=n(612)},317:function(e,t,n){},318:function(e,t,n){},365:function(e,t){},607:function(e,t){},612:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),c=n.n(o),r=(n(317),n(17)),l=(n(318),n(270)),s=n(624),u=n(630),m=n(620),d=n(78),f=n.n(d),h=n(122),g=n.n(h),E=n(128),p=n.n(E),v=n(60),y=n(271),w=n.n(y),b=(n(394),g()("http://192.168.124.69:6700/")),z=function(e){var t=e.zone,n=e.setZones;return i.a.createElement(s.a,Object(l.a)({style:{minHeight:"100% !important"},key:t.zone,cover:i.a.createElement("img",{style:{width:v.isMobile?window.innerWidth:(window.innerWidth-100)/4,transition:"filter 350ms ease-in-out",height:140,objectFit:"cover"},alt:"lawn",src:"/api/zone/image/".concat(t.zone)})},"style",{width:v.isMobile?window.innerWidth:(window.innerWidth-100)/4}),i.a.createElement(s.a.Meta,{avatar:i.a.createElement("i",{className:"fas fa-tint"}),title:t.name,description:t.uptime?i.a.createElement(u.a,{color:"success"},"Watering ",i.a.createElement(j,{time:t.uptime})):i.a.createElement(u.a,null,"Not Watering")}),i.a.createElement("br",null),i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},i.a.createElement(m.a,{onChange:function(){return t.active?function(e){var t=e.zone,n=e.setZones;return f.a.get("/api/zone/off/".concat(t.zone)).then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}({zone:t,setZones:n}):function(e){var t=e.zone,n=e.setZones;f.a.get("/api/zone/on/".concat(t.zone)).then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}({zone:t,setZones:n})},checked:t.active,defaultChecked:t.active}),i.a.createElement(x,{zone:t})))},j=function(e){var t=e.time;return i.a.createElement(p.a,{initialTime:new Date-Date.parse(t)},i.a.createElement(p.a.Minutes,null),":",i.a.createElement(p.a.Seconds,null)," minutes")},x=function(e){var t=e.zone;return i.a.createElement("div",{style:{marginLeft:10,fontWeight:t.active?700:300,color:t.active&&"#6b9b6f"}},t.active?"Active":"Inactive")},W=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),l=Object(r.a)(c,2),s=l[0],u=l[1];return Object(a.useLayoutEffect)((function(){b.on("zones_update",(function(e){console.log(e),o(e)})),f.a.get("/api/zones").then((function(e){return e})).catch((function(e){console.log(e)})).then((function(e){var t=e.data;o(t),u(!1)}))}),[]),s?i.a.createElement("div",{style:{minWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(w.a,{type:"Grid",color:"#001529",height:80,width:80})):n.map((function(e){return i.a.createElement("div",{key:e.zone,style:{paddingLeft:v.isMobile?0:20,paddingBottom:20,minHeight:"100% !important"}},i.a.createElement(z,{zone:e,setZones:o}))}))},C=n(629),O=n(628),k=n(57),S=n(59),M=n(277),D=n(623),I=n(187),H=n(625),L=g()("http://192.168.124.69:6700/");console.log("production");var Z=new Date(2020,0,1),R=new Date(2020,11,31),B={minWidth:"100%",minHeight:"100%",margin:{top:50,right:10,bottom:10,left:50},from:Z.toISOString(),to:R.toISOString()},_=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=i.a.useState(0),l=Object(r.a)(c,2),u=l[0],m=l[1];return Object(a.useLayoutEffect)((function(){L.on("calendar_update",(function(e){console.log(e),o(e)})),f.a.get("/api/calendar").then((function(e){return e})).catch((function(e){console.log(e)})).then((function(e){var t=e.data;o(t)})),L.on("calendar_count_update",(function(e){console.log(e),m(e)})),f.a.get("/api/calendar/count").then((function(e){return e})).catch((function(e){console.log(e)})).then((function(e){var t=e.data;m(t.length)}))}),[]),i.a.createElement("div",{style:{paddingLeft:20,paddingBottom:20,paddingRight:20}},i.a.createElement(s.a,{cover:i.a.createElement("div",{style:{width:"100%",height:window.innerHeight-570,display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(M.a,Object.assign({data:n,colors:["#2d472a","#5f8b63","#7fc085","#91b594","#5d9761"],align:"center",emptyColor:"#f3f3f3"},B)))},i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start"}},i.a.createElement(s.a.Meta,{avatar:i.a.createElement(D.a,{icon:i.a.createElement(k.a,{icon:S.b})}),title:"Watering Calendar",description:"Days with active watering"}),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(I.a,{placement:"bottom",title:"Days watered in the current calendar month"},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement(H.a.Text,{strong:!0},"Days Watered/Month"),i.a.createElement(D.a,{size:40,style:{backgroundColor:q}},u))))))},G=n(306),N=function(e){return i.a.createElement(G.a,{open:e.open,onRequestClose:e.setOpen},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement(k.a,{color:"white",icon:S.c,size:"6x"}),i.a.createElement("div",{style:{color:"white",fontWeight:900,fontSize:36}},"Rain Maker"),i.a.createElement("div",{style:{color:"white",fontWeight:500,fontSize:18}},"v1.0.1")))},T=C.a.Header,F=C.a.Footer,J=C.a.Content,q="#5f8b63";var A=function(){var e=i.a.useState(window.innerHeight),t=Object(r.a)(e,2),n=(t[0],t[1]),a=i.a.useState(!1),o=Object(r.a)(a,2),c=o[0],l=o[1];return window.addEventListener("resize",(function(){n(window.innerHeight-129)})),i.a.createElement(C.a,null,i.a.createElement(T,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:v.isMobile?"center":"flex-start",alignItems:"center"}},i.a.createElement(k.a,{color:"white",icon:S.c}),i.a.createElement("div",{style:{color:"white",fontWeight:900,marginLeft:10}},"Rain Maker"),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(O.a,{style:{color:"white"},type:"link",onClick:function(){return l(!c)},icon:i.a.createElement(k.a,{icon:S.a})}))),i.a.createElement(C.a,null,i.a.createElement(J,null,i.a.createElement("div",{className:"zones-container",style:{width:"100%",flexWrap:"wrap",paddingTop:20,paddingRight:20}},i.a.createElement(W,null)),!v.isMobile&&i.a.createElement(_,null),i.a.createElement(N,{open:c,setOpen:l}))),i.a.createElement(F,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontSize:11,color:"#b4b6ba"}},"Canvas 23 Studios")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[312,1,2]]]);
//# sourceMappingURL=main.f66734f9.chunk.js.map