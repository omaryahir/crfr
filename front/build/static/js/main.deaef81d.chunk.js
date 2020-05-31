(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,a,t){e.exports=t(65)},40:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),s=t.n(r),o=(t(40),t(13)),m=t(12),c=t(5),i=t(6),u=t(9),h=t(7),d=t(8),p=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/register"},"Register"))),a=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/profile"},"User")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"",onClick:this.logOut.bind(this),className:"nav-link"},"LogOut")));return l.a.createElement("nav",{className:"navbar nav-expand-lg navbar-dark bg-dark rounded"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar1","aria-controls":"navbar1","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar1"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-link"},"Home"))),localStorage.usertoken?a:e))}}]),a}(n.Component),b=Object(m.e)(p),E=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"WELCOME"))))}}]),a}(n.Component),v=t(16),g=t(11),f=t(20),N=t.n(f),O=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(e)),e.onSubmit=e.onSubmit.bind(Object(g.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault(),function(e){return N.a.post("/api_v1/users/login",{auth:{username:e.email,password:e.password}}).then((function(e){return localStorage.setItem("usertoken",e.data),e.data})).catch((function(e){console.log(e)}))}({email:this.state.email,password:this.state.password}).then((function(e){e.error||a.props.history.push("/profile")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign in")))))}}]),a}(n.Component),j=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={first_name:"",last_name:"",email:"",password:""},e.onChange=e.onChange.bind(Object(g.a)(e)),e.onSubmit=e.onSubmit.bind(Object(g.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault(),function(e){return N.a.post("/api_v1/users/register",{first_name:e.first_name,last_name:e.last_name,username:e.email,password:e.password}).then((function(e){console.log(e)}))}({first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password}).then((function(e){a.props.history.push("/login")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Register"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"first_name"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter First Name",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"last_name"},"Last Name"),l.a.createElement("input",{type:"last_name",className:"form-control",name:"last_name",placeholder:"Enter last name",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),a}(n.Component),y=t(34),w=t.n(y),k=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={first_name:"",last_name:"",email:"",errors:{}},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken;console.log(e);var a=w()(e);console.log("DECODED"),console.log(a),this.setState({first_name:a.identity.first_name,last_name:a.identity.last_name,email:a.identity.email}),console.log("STATE")}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mt-5"},l.a.createElement("h1",{className:"text-center"},"PROFILE")),l.a.createElement("table",{className:"table col-md-6 mx-auto"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"First Name"),l.a.createElement("td",null,this.state.first_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Name"),l.a.createElement("td",null,this.state.last_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.email))))))}}]),a}(n.Component);var _=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(m.a,{exact:!0,path:"/",component:E}),l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{exact:!0,path:"/register",component:j}),l.a.createElement(m.a,{exact:!0,path:"/login",component:O}),l.a.createElement(m.a,{exact:!0,path:"/profile",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.deaef81d.chunk.js.map