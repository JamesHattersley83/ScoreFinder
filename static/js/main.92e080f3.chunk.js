(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.4c59b995.svg"},23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),s=t(15),m=t(16),o=t(21),i=t(17),u=t(22),d=t(5),b=t(6),p=(t(28),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-5"},r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Score Finder")),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav align-items-center ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/standings",className:"nav-link"},"Standings")))))}),g=(t(37),function(e){var a=e.name,t=e.crestUrl,n=e.founded,l=e.ground;return r.a.createElement("div",{className:"card text-center mx-auto shadow p-3 mb-5 rounded",style:{width:"20rem"}},r.a.createElement("img",{alt:"team",src:"".concat(t),className:"card-img"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Founded: ",n),r.a.createElement("li",{className:"list-group-item"},"Ground: ",l)),r.a.createElement("div",{className:"card-body"},r.a.createElement(d.b,{to:"/fixtures",className:"btn btn-primary mr-2"},"Fixtures"),r.a.createElement(d.b,{to:"/results",className:"btn btn-primary"},"Results"))))}),E=t(20),v=t.n(E),f=function(e){var a=e.teams,t=a.map(function(e,t){return r.a.createElement(g,{key:t,id:a[t].id,crestUrl:a[t].crestUrl,name:a[t].name,founded:a[t].founded,ground:a[t].venue})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"mb-5 mx-auto d-block",src:v.a,alt:"logo"}),r.a.createElement("div",{className:"container d-flex flex-wrap"},t))},h=function(){return r.a.createElement("div",{className:"card text-center mx-auto shadow p-3 mb-5 rounded",style:{width:"50rem"}},r.a.createElement("h1",null,"Results"))},x=function(){return r.a.createElement("div",{className:"card text-center mx-auto shadow p-3 mb-5 rounded",style:{width:"50rem"}},r.a.createElement("h1",null,"Fixtures"))},N=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(i.a)(a).call(this))).state={teams:[],leagueId:"",fixtures:[],results:[]},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.football-data.org/v2/competitions/2021/teams",{headers:{"X-Auth-Token":"491659630092491e821fa9ea920342da"}}).then(function(e){return e.json()}).then(function(a){return e.setState({teams:a.teams})})}},{key:"render",value:function(){var e=this.state.teams;return r.a.createElement(d.a,{basename:"/ScoreFinder"},r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,{teams:e})}}),r.a.createElement(b.a,{path:"/fixtures",component:x}),r.a.createElement(b.a,{path:"/results",component:h}))))}}]),a}(n.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.92e080f3.chunk.js.map