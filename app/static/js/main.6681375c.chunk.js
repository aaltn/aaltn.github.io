(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=n(7),i=n(6),s=n(1),u=n(2),d=n(4),m=n(3),f=n(5),h=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),b=(n(17),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={searchLine:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({searchLine:t}),n.props.onSearchChange(t)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{className:"form-control  search-input",placeholder:"type to search",type:"text",value:this.state.searchLine,onChange:this.onSearchChange})}}]),t}(a.Component)),p=n(10),g=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c="todo-list-item";return e.done&&(c+=" done"),e.important&&(c+=" important"),o.a.createElement("div",{className:c},o.a.createElement("span",{className:"float-right"},o.a.createElement("button",{className:"btn btn-outline-danger btn-sm",type:"button",title:"Delet done",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{className:"btn btn-outline-success btn-sm",type:"button",title:"mark Important",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"}))),o.a.createElement("span",{className:"todo-list-item-label",title:"mark done",onClick:a},t))}}]),t}(a.Component)),v=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c=t.map((function(e){var t=e.id,c=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleDone:function(){return a(t)},onToggleImportant:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group  todo-list"},c)}),O=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{className:"btn ".concat(c),type:"button",key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component)),j=(n(21),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLableChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form  d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{className:"item-add-form-input  form-control",placeholder:"type what needs to do",type:"text",onChange:this.onLableChange,value:this.state.label}),o.a.createElement("button",{className:"btn  btn-outline-secondary",title:"Delet done"},"Add\xa0item"))}}]),t}(a.Component)),y=(n(22),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Learn React"),n.createTodoItem("Build Awesome React App"),n.createTodoItem("Give to the world my 'Todo\xa0App'")],searchLine:"",filter:"all"},n.deleteItem=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n.slice(0,a),r=n.slice(a+1);return{todoData:[].concat(Object(i.a)(o),Object(i.a)(r))}}))},n.addItem=function(e){console.log("text:",e);var t=n.createTodoItem(e);n.setState((function(e){var n=e.todoData;return{todoData:[].concat(Object(i.a)(n),[t])}}))},n.onToggleImportant=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(l.a)({},o,{important:!o.important});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},n.onToggleDone=function(e){n.setState((function(t){var n=t.todoData,a=n.findIndex((function(t){return t.id===e})),o=n[a],r=Object(l.a)({},o,{done:!o.done});return{todoData:[].concat(Object(i.a)(n.slice(0,a)),[r],Object(i.a)(n.slice(a+1)))}}))},n.onSearchChange=function(e){n.setState({searchLine:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"filterList",value:function(e,t){switch(t){case"all":return e;case"done":return e.filter((function(e){return e.done}));case"active":return e.filter((function(e){return!e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.searchLine,a=e.filter,r=this.filterList(this.search(t,n),a),c=this.state.todoData.filter((function(e){return e.done})).length,l=this.state.todoData.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel  d-flex"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(O,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(v,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(j,{onItemAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6681375c.chunk.js.map