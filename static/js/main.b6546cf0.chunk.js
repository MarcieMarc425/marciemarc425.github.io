(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/hero.93be78bf.mp4"},16:function(e,t,n){e.exports=n(27)},22:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(12),c=n.n(i),r=(n(22),n(28)),s=n(5),l=n(6),u=n(9),b=n(8),d=n(10),m=n(29),h=n(7),p=n(13),v=n.n(p),f=(n(23),function(e){var t=e.show,n=e.onAboutClicked,a=e.aboutText;return o.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0,backgroundColor:t?"rgba(41, 41, 41, 0.85)":"rgba(41, 41, 41, 0.5)",transition:"background-color 500ms linear",zIndex:2}},o.a.createElement("div",{className:"heroText",style:{visibility:t?"hidden":"visible"}},"Marc Tse"),o.a.createElement("div",{className:"heroText2",style:{visibility:t?"hidden":"visible"}},"A DEVELOPER"),o.a.createElement("div",{className:"about",onClick:n},a))}),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(b.a)(t).call(this,e))).onAboutClicked=function(e){e.preventDefault(),n.setState({isAboutOpen:!n.state.isAboutOpen},function(){n.state.isAboutOpen?n.setState({aboutText:"Close"}):n.setState({aboutText:"About"})})},n.state={isAboutOpen:!1,aboutText:"About"},n.onAboutClicked=n.onAboutClicked.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"homepage"},o.a.createElement(f,{show:this.state.isAboutOpen,onAboutClicked:this.onAboutClicked,aboutText:this.state.aboutText}),o.a.createElement("div",{className:"hero"},o.a.createElement("video",{id:"heroVid",autoPlay:!0,muted:!0,loop:!0},o.a.createElement("source",{src:v.a,type:"video/mp4"}))))}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{path:"/",exact:!0,component:E}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(r.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.b6546cf0.chunk.js.map