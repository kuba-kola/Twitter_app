(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(10),c=n.n(i),r=(n(16),n(7)),o=n(8),l=n(3),s=n(4),u=n(2),b=n(6),d=n(5),j=(n(17),n(0)),h=function(t){var e=t.liked,n=t.allPosts;return Object(j.jsxs)("div",{className:"app-header d-flex",children:[Object(j.jsx)("h1",{children:"\u042f\u043a\u0443\u0431 \u0422\u0440\u0430\u0444\u0456\u043c\u043e\u0432\u0456\u0447"}),Object(j.jsxs)("h2",{children:[" ",n," \u0437\u0430\u043f\u0456\u0441\u0430\u045e, \u0437 \u0456\u0445 \u0441\u043f\u0430\u0434\u0430\u0431\u0430\u043b\u0430\u0441\u044f ",e]})]})},f=(n(19),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(j.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0448\u0443\u043a \u043f\u0430 \u0437\u0430\u043f\u0456\u0441\u0430\u0445",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(a.Component)),p=(n(20),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0423\u0441\u0435"},{name:"like",label:"\u0421\u043f\u0430\u0434\u0430\u0431\u0430\u043b\u0430\u0441\u044f"}],a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props,c=i.filter,r=i.onFilterSelect,o=c===n?"btn-info":"btn-outline-secondary";return Object(j.jsx)("button",{type:"button",className:"btn ".concat(o),onClick:function(){return r(n)},children:a},n)}));return Object(j.jsx)("div",{className:"btn-group",children:e})}}]),n}(a.Component)),m=n(11),O=(n(21),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return t.important&&(c+=" important"),t.like&&(c+=" like"),Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("span",{className:"app-list-item-label",onClick:i,children:e}),Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(j.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(j.jsx)("i",{className:"fa fa-star"})}),Object(j.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(j.jsx)("i",{className:"fa fa-trash-o"})}),Object(j.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(a.Component)),v=(n(22),["id"]),g=function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c=e.map((function(t){if("object"===typeof t&&function(t){for(var e in t)return!0;return!1}(t)){var e=t.id,c=Object(m.a)(t,v);return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)(O,Object(r.a)(Object(r.a)({},c),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return i(e)}}))},e)}}));return Object(j.jsx)("ul",{className:"app-list list-group",children:c})},x=(n(23),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(j.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"\u041f\u0440\u0430 \u0448\u0442\u043e \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0446\u0435 \u0437\u0430\u0440\u0430\u0437?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u0430\u0434\u0430\u0446\u044c"})]})}}]),n}(a.Component)),k=(n(24),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={data:[{label:"\u0417\u0431\u0456\u0440\u0430\u044e\u0441\u044f \u0432\u0443\u0447\u044b\u0446\u044c React",importan:!0,like:!1,id:1},{label:"\u0423\u0441\u0451 \u044f\u0448\u0447\u044d \u0437\u0431\u0456\u0440\u0430\u044e\u0441\u044f \u0432\u0443\u0447\u044b\u0446\u044c React",importan:!1,like:!1,id:2},{label:"\u0421\u044f\u0434\u0436\u0443 \u0456 \u0434\u0443\u043c\u0430\u044e \u0434\u043b\u044f \u0447\u0430\u0433\u043e \u043c\u043d\u0435 \u0433\u044d\u0442\u0430 \u0432\u043e\u0441\u044c \u045e\u0441\u0451",importan:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(u.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(u.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(u.a)(a)),a.maxId=4,a}return Object(s.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(o.a)(n.slice(0,a)),Object(o.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(o.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{important:!i.important});return{data:[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{like:!i.like});return{data:[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.length,r=this.filterPost(this.searchPost(e,n),a);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(h,{liked:i,allPosts:c}),Object(j.jsxs)("div",{className:"search-panel d-flex",children:[Object(j.jsx)(f,{onUpdateSearch:this.onUpdateSearch}),Object(j.jsx)(p,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(j.jsx)(g,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(j.jsx)(x,{onAdd:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.4238ae74.chunk.js.map