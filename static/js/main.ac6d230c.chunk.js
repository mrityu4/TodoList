(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(2),i=n.n(a),c=n(11),s=n.n(c),d=(n(17),n(18),n(10)),r=n(3),h=n(4),u=n(5),b=n(1),l=n(7),j=n(6),O=n(8),v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(h.a)(this,n),(o=e.call(this,t)).state={todo:""},o.handleSubmit=o.handleSubmit.bind(Object(b.a)(o)),o.handleChange=o.handleChange.bind(Object(b.a)(o)),o}return Object(u.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(O.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.create(Object(r.a)({},this.state)),this.setState({todo:""})}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"task",children:"Create task"}),Object(o.jsx)("input",{type:"text",name:"todo",placeholder:"New Todo",value:this.state.todo,id:"todo",onChange:this.handleChange}),Object(o.jsx)("button",{children:"Add Todo"})]})})}}]),n}(a.Component),p=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(h.a)(this,n),(o=e.call(this,t)).handleRemove=o.handleRemove.bind(Object(b.a)(o)),o.handleUpdate=o.handleUpdate.bind(Object(b.a)(o)),o}return Object(u.a)(n,[{key:"handleRemove",value:function(){this.props.remove(this.props.id)}},{key:"handleUpdate",value:function(){this.props.update(this.props.id)}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:this.props.todo}),Object(o.jsx)("button",{onClick:!0,children:"edit"}),Object(o.jsx)("button",{onClick:this.handleRemove,children:"del"})]})}}]),n}(a.Component),f=n(21),m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(h.a)(this,n),(o=e.call(this,t)).state={todos:[]},o.createTodo=o.createTodo.bind(Object(b.a)(o)),o.remove=o.remove.bind(Object(b.a)(o)),o}return Object(u.a)(n,[{key:"createTodo",value:function(t){var e=Object(r.a)(Object(r.a)({},t),{},{id:Object(f.a)(),finished:!1});this.setState({todos:[].concat(Object(d.a)(this.state.todos),[e])})}},{key:"remove",value:function(t){console.log(t),this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){this.remove(t);var n=Object(r.a)(Object(r.a)({},e),{},{id:t,finished:!1});this.setState({todos:[].concat(Object(d.a)(this.state.todos),[n])})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(o.jsx)(p,{id:e.id,todo:e.todo,remove:t.remove},e.id)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{create:this.createTodo}),e]})}}]),n}(a.Component);var x=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),o(t),a(t),i(t),c(t)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.ac6d230c.chunk.js.map