(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),u=t.n(l),c=t(14),o=t(2),i=function(e){var n=e.parts,t=e.handleClick;return r.a.createElement("p",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"Delete"))},m=function(e){var n=e.filteredPerson,t=e.handleClick;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(i,{key:e.name,parts:e,handleClick:t(e.id,e.name)})})))},d=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t})))},f=function(e){var n=e.addNumber,t=e.newName,a=e.newNumber,l=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:l})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=t(3),h=t.n(s),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},g=function(e){return h.a.post(b,e).then((function(e){return e.data}))},v=function(e){h.a.delete("".concat(b,"/").concat(e))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},n)},C=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),s=i[0],h=i[1],b=Object(a.useState)(""),C=Object(o.a)(b,2),k=C[0],j=C[1],O=Object(a.useState)(""),N=Object(o.a)(O,2),y=N[0],S=N[1],F=Object(a.useState)(null),D=Object(o.a)(F,2),P=D[0],T=D[1],B=t.filter((function(e){return e.name.toUpperCase().includes(y.toUpperCase())}));Object(a.useEffect)((function(){p().then((function(e){l(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:P}),r.a.createElement(d,{newFilter:y,handleFilterChange:function(e){console.log("filter is",e.target.value),S(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(f,{addNumber:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===s}));if(console.log("duplicate is",n),0!==n.length){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var a=n[0].id,r=t.find((function(e){return e.id===a})),u=Object(c.a)({},r,{number:k});E(a,u).then((function(e){l(t.map((function(n){return n.id!==a?n:e}))),h(""),j(""),T("".concat(s,"'s phone number has been updated!")),setTimeout((function(){T(null)}),3e3)})).catch((function(e){T("".concat(s," has already been removed!")),setTimeout((function(){T(null)}),3e3),l(t.filter((function(e){return e.id!==a}))),h(""),j("")}))}h(""),j("")}else{g({name:s,number:k}).then((function(e){l(t.concat(e)),h(""),j("")})),T("".concat(s," has been added!")),setTimeout((function(){T(null)}),3e3)}},newName:s,newNumber:k,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{filteredPerson:B,handleClick:function(e,n){return function(){window.confirm("Delete ".concat(n,"?"))&&(v(e),l(t.filter((function(n){return n.id!==e}))))}}}))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.10c5dad7.chunk.js.map