(this.webpackJsonpcreditcard=this.webpackJsonpcreditcard||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(1),i=t.n(s),a=t(8),o=t.n(a),c=(t(14),t(2)),p=t(3),h=t(5),m=t(4),u=(t(7),t.p+"static/media/visapng.d8bedd00.png");function j(e){return Object(r.jsx)("section",{className:"cardcontainer",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"cardImg",children:[Object(r.jsx)("img",{src:"https://img.icons8.com/plasticine/100/000000/sim-card-chip.png",alt:"puce electronique"}),Object(r.jsx)("img",{className:"visa",src:u,alt:""})]}),Object(r.jsxs)("div",{className:"cardInfo",children:[Object(r.jsx)("p",{className:"cardName",children:e.nom}),Object(r.jsxs)("p",{className:"cardExpire",children:["Expire le ",Object(r.jsx)("br",{}),e.expireMois,"/",e.expireAnnee]}),Object(r.jsx)("p",{className:"cardNumero",children:e.numero})]})]})})}var l=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).state={numero:"ca marche !"},r}return Object(p.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("label",{children:"Num\xe9ro"}),Object(r.jsx)("input",{defautValue:this.props.numero,onChange:this.props.onNumeroChange,type:"number",required:!0}),Object(r.jsx)("label",{children:"Date d'expiration"}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)("input",{className:"expirationinput",value:this.props.ExpireMois,type:"number",maxLength:"2",required:!0,onChange:this.props.onExpireMoisChange}),Object(r.jsx)("span",{children:"/"}),Object(r.jsx)("input",{className:"expirationinput",value:this.props.ExpireAnnee,onChange:this.props.onExpireAnneeChange})]}),Object(r.jsx)("label",{children:"Nom"}),Object(r.jsx)("input",{value:this.props.nom,onChange:this.props.onNomChange}),Object(r.jsx)("label",{children:"Prenom"}),Object(r.jsx)("input",{value:this.props.prenom,onChange:this.props.onPrenomChange})]})})}}]),t}(s.Component),x=function(e){Object(h.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).state={nom:"nom",prenom:"prenom",expireMois:"##",expireAnnee:"##",numero:"#### #### #### ####"},e.onNomChange=function(n){e.setState({nom:n.target.value})},e.onPrenomChange=function(n){e.setState({prenom:n.target.value})},e.onExpireMoisChange=function(n){e.setState({expireMois:n.target.value})},e.onExpireAnneeChange=function(n){e.setState({expireAnnee:n.target.value})},e.onNumeroChange=function(n){e.setState({numero:n.target.value})},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{nom:this.state.nom,prenom:this.state.prenom,expireMois:this.state.expireMois,expireAnnee:this.state.expireAnnee,numero:this.state.numero}),Object(r.jsx)(l,{onNomChange:this.onNomChange,onPrenomChange:this.onPrenomChange,onExpireMoisChange:this.onExpireMoisChange,onExpireAnneeChange:this.onExpireAnneeChange,onNumeroChange:this.onNumeroChange,nom:this.state.nom,prenom:this.state.prenom,expireMois:this.state.expireMois,expireAnnee:this.state.expireAnnee,numero:this.state.numero})]})})}}]),t}(s.Component),d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),s(e),i(e),a(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),d()},7:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.b906cc3e.chunk.js.map