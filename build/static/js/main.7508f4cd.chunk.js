(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),u=n(11),c=n(12),i=n(14),m=n(13),l=n(15),p=function(e){var t=e.person,n=e.delName;return r.a.createElement("div",null,t.name," ",t.number," ",r.a.createElement("button",{onClick:n},"Delete"))},d=n(2),h=n.n(d),f=(n(41),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleNameChange=function(e){n.setState({newName:e.target.value})},n.handleNumberChange=function(e){n.setState({newNumber:e.target.value})},n.addName=function(e){e.preventDefault();var t={name:n.state.newName,number:n.state.newNumber};h.a.post("https://tinttis-contacts.herokuapp.com/api/persons",t).then(function(e){n.setState({persons:n.state.persons.concat(e.data),newName:"",newNumber:""})})},n.deleteName=function(e){return function(){var t="https://tinttis-contacts.herokuapp.com/api/persons/".concat(e),a=n.state.persons.find(function(t){return t.id===e});window.confirm("Do you really want to delete ".concat(a.name,"?"))&&h.a.delete(t,a).then(function(t){n.setState({persons:n.state.persons.filter(function(t){return t.id!==e})})})}},n.state={persons:[],newName:"",newNumber:""},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://tinttis-contacts.herokuapp.com/api/persons").then(function(t){e.setState({persons:t.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"konsta"},r.a.createElement("h2",null,"Phone book"),r.a.createElement("form",{onSubmit:this.addName},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:this.state.newName,onChange:this.handleNameChange})),r.a.createElement("div",null,"Phone number: ",r.a.createElement("input",{value:this.state.newNumber,onChange:this.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"submit"))),r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,this.state.persons.map(function(t){return r.a.createElement(p,{key:t.id,person:t,delName:e.deleteName(t.id)})})))}}]),t}(r.a.Component));h.a.get("https://tinttis-contacts.herokuapp.com/api/persons").then(function(e){var t=e.data;s.a.render(r.a.createElement(f,{persons:t}),document.getElementById("root"))}),s.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7508f4cd.chunk.js.map