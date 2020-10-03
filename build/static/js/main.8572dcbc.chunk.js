(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{100:function(e,t,a){var n={"./project1.png":101,"./project2.png":102,"./project3.png":103,"./project4.png":104};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=100},101:function(e,t,a){e.exports=a.p+"static/media/project1.a1a4e2c2.png"},102:function(e,t,a){e.exports=a.p+"static/media/project2.2bdd9eab.png"},103:function(e,t,a){e.exports=a.p+"static/media/project3.e15ba1bf.png"},104:function(e,t,a){e.exports=a.p+"static/media/project4.f48e7211.png"},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(86),o=a.n(c),l=(a(96),a(97),a(8)),i=a(9),s=a(11),m=a(10),u=(a(98),a(99),a(87)),p=a(26),h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){"Project".concat(this.props.id);return r.a.createElement("div",{className:"Cards"},r.a.createElement("h1",{className:"Cards-title"},this.props.title),r.a.createElement("img",{src:a(100)("./project".concat(this.props.id,".png")),alt:"first",className:"Cards-img"}),r.a.createElement("p",{className:"Card-technology"},this.props.technology),r.a.createElement("p",null,this.props.description),r.a.createElement("div",{className:"Cards-links"},r.a.createElement("a",{target:"_blank",href:this.props.github},r.a.createElement(p.a,null))," ",r.a.createElement("a",{target:"_blank",href:this.props.link},r.a.createElement(u.a,null))))}}]),n}(n.Component),d=a(12),b=a.n(d),f=a(21),E=a(25),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Projects",id:"Projects"},r.a.createElement(b.a,{bottom:!0},r.a.createElement("h1",{className:"Projects-title"},"Work"),r.a.createElement("div",{className:"Projects-cards"},this.props.projects.map((function(e){return r.a.createElement(h,{id:e.id,title:e.title,technology:e.technology,description:e.description,github:e.github,link:e.link})})))),r.a.createElement(b.a,{bottom:!0},r.a.createElement(f.NavHashLink,{smooth:!0,to:"/Contact#Contact",activeClassName:"selected"},r.a.createElement(E.a,{className:"Projects-icon"}))))}}]),a}(n.Component);g.defaultProps={projects:[{id:1,title:"Pokedex",technology:"React.js & CSS",description:"Pokedex is a project created with the purpose of enforcing styling practices as well as import and exporting components.",github:"https://github.com/iamjpyo/Pokedex",link:"https://pokedex-84c4c.web.app/"},{id:2,title:"Dice Game",technology:"Javascript & CSS",description:"Dice Game was made using JavaScript and CSS as a practice of logic as well as DOM manipulation.",github:"https://github.com/iamjpyo/Dice-Game-With-DOM",link:"https://iamjpyo.github.io/Dice-Game-With-DOM/"},{id:3,title:"Crystals Game",technology:"jQuery, Javascript & CSS",description:"Crystals Game was created with the purpose of enforcing logic as well as a practice of DOM manipulation.",github:"https://github.com/iamjpyo/unit-4-game",link:"https://iamjpyo.github.io/unit-4-game/"},{id:4,title:"Disaster Relief",technology:"React.js, Node.js & Express",description:"Friend Finder is a collaborative project made as a disaster relief effort for IBM's Call for Code with Heroku deployment.",github:"https://github.com/iamjpyo/project2",link:"https://project2fam.herokuapp.com/"}]};var j=g,v=(a(111),a(16)),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"About",id:"About"},r.a.createElement(b.a,{bottom:!0},r.a.createElement("h1",{className:"About-title"},"About Me")),r.a.createElement(b.a,{bottom:!0},r.a.createElement("p",{className:"About-paragraph"},"Hello! I am JP Luncumilla, a certified web developer graduate at the Full Stack Development Program at The University of Miami. My front end skills consist of:"),r.a.createElement("p",{className:"About-icons"}," ",r.a.createElement(v.c,null)," ",r.a.createElement(v.i,null)," ",r.a.createElement(v.e,null)," ",r.a.createElement(v.a,null)," ",r.a.createElement(v.d,null)," "),r.a.createElement("p",{className:"About-paragraph"},"My back end and database skills consist of:"),r.a.createElement("p",{className:"About-icons"}," ",r.a.createElement(v.g,null)," ",r.a.createElement(v.h,null)," ",r.a.createElement(v.f,null)," ",r.a.createElement(v.b,null)," "),r.a.createElement("p",{className:"About-paragraph"},"Outside of my programming skills I have prior experience in hospitality that includes managerial experience working in a shared workspace in a start up enviroment as well as luxury hotels.")),r.a.createElement(b.a,{bottom:!0},r.a.createElement(f.NavHashLink,{smooth:!0,to:"/Projects#Projects",activeClassName:"selected"},r.a.createElement(E.a,{className:"About-icon"}))))}}]),a}(n.Component),y=(a(112),n.Component,a(113),a(89)),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Contact",id:"Contact"},r.a.createElement(b.a,{bottom:!0},r.a.createElement("h1",{className:"Contact-title"},"Contact Me"),r.a.createElement("div",{className:"Contact-icons"},r.a.createElement("a",{target:"_blank",href:"mailto:jpluncumilla@gmail.com"},r.a.createElement(p.c,null))," ",r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/juan-pablo-luncumilla-945070136/"},r.a.createElement(p.b,null))," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/iamjpyo"},r.a.createElement(p.a,null))," ",r.a.createElement("a",{target:"_blank",href:"https://drive.google.com/file/d/1IfEQTffFdkbY6es15T6HaO4ZXhCq-Gei/view"},r.a.createElement(y.a,null)))))}}]),a}(n.Component),O=(a(114),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",null,"Powered by: JP Luncumilla"))}}]),a}(n.Component)),C=(a(115),a(90)),w=a.n(C),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Jumbo"},r.a.createElement(w.a,{className:"Particles-background",params:{particles:{number:{value:70},size:{value:2}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),r.a.createElement(b.a,{left:!0},r.a.createElement("h1",{className:"Jumbo-title"},"JP Luncumilla")),r.a.createElement(b.a,{right:!0},r.a.createElement("h2",{className:"Jumbo-subtitle"},"front end developer")),r.a.createElement(b.a,{bottom:!0},r.a.createElement(f.NavHashLink,{smooth:!0,to:"/About#About",activeClassName:"selected"},r.a.createElement(E.a,{className:"Jumbo-icon"}))))}}]),a}(n.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(k,null),r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(48);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.BrowserRouter,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(322)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[91,1,2]]]);