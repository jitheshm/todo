(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),s=a.n(r),l=a(4),c=a(1);var d=function(e){var t=e.obj,a=e.toDos,n=e.setTodos,r=e.id;return console.log(t),o.a.createElement(c.b,{key:"drag".concat(r),draggableId:"drag".concat(r),index:r},function(e,r){return o.a.createElement("div",Object.assign({className:"border rounded bg-white mx-4 mb-4",style:{minHeight:"33px",boxShadow:"1px 1px 5px rgb(44,49,52)"},name:"looping div",ref:e.innerRef},e.draggableProps,e.dragHandleProps),o.a.createElement("div",null,o.a.createElement("p",{style:{overflowWrap:"break-word"}},"Completed"===t.status&&o.a.createElement("span",null,t.data),"Cancelled"===t.status&&o.a.createElement("span",{style:{textDecoration:"line-through",color:"rgb(230, 9, 9)"}},t.data))),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6"},t.date),o.a.createElement("i",{onClick:function(){window.confirm("Are you sure ?")&&n(a.filter(function(e){return e.id!==t.id}))},className:"far fa-trash-alt text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6"})))})};var i=function(e){var t=e.obj,a=e.toDos,n=e.setTodos,r=e.id;return o.a.createElement(c.b,{key:"drag".concat(r),draggableId:"drag".concat(r),index:r},function(e,r){return o.a.createElement("div",Object.assign({className:"border rounded bg-white mx-4 mb-4",style:{minHeight:"33px",boxShadow:"1px 1px 5px 0px rgb(44,49,52)"},name:"looping div",ref:e.innerRef},e.draggableProps,e.dragHandleProps),o.a.createElement("div",null,o.a.createElement("p",{style:{overflowWrap:"break-word"}}," ",t.data," ")),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"fs-6 fw-lighter d-lg-flex justify-content-lg-start align-items-lg-end col-6"},t.date),o.a.createElement("i",{onClick:function(){n(a.filter(function(e){return e.id===t.id&&(e.status="Cancelled",e.date=(new Date).toLocaleDateString()),e}))},className:"fas fa-times text-danger d-flex d-md-flex justify-content-end justify-content-md-end col-6"})))})},m=a(8);var u=function(e){var t=e.toDos,a=e.setTodos,n=e.toDo,r=e.setTodo,s=(new Date).toLocaleDateString("en-us",{weekday:"long"});return o.a.createElement("div",null,o.a.createElement("div",{className:"mt-2"},o.a.createElement("h1",{className:"text-center text-warning"},"ToDo List")),o.a.createElement("div",null,o.a.createElement("h5",{className:"text-center text-light"},"Hey, it's ",s)),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("div",{className:"text-start bg-white border rounded col-6",style:{height:"44px"}},o.a.createElement("input",{value:n,onChange:function(e){r(e.target.value)},type:"text",className:"col-8 my-2 ms-1 border-0 shadow-none",style:{outline:"none"},placeholder:"Plan something....."}),o.a.createElement("i",{onClick:function(){var e=(new Date).toLocaleDateString();a([].concat(Object(m.a)(t),[{data:n,date:e,status:"Todo",id:Date.now()}]))},className:"fas fa-plus text-end float-end mt-2 me-3",style:{fontSize:"22px"}}))))};var g=function(e){var t=e.toDos,a=e.passComponent,n=e.currentStatus,r=e.currentSecStatus,s=e.colour,l=e.id;return o.a.createElement(c.c,{droppableId:l,key:l},function(e,l){return o.a.createElement("div",Object.assign({id:String(n),className:"col-md-3 ".concat(l.isDraggingOver?"border border-danger":""," ").concat(s," px-0 m-1"),ref:e.innerRef},e.droppableProps),o.a.createElement("div",null,o.a.createElement("h4",{className:"ms-2"},n)),o.a.createElement("div",{className:"mt-2"},t.map(function(e,t){return e.status===String(n)||e.status===String(r)?a(e,t):null}),e.placeholder))})};var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),f=m[0],p=m[1];return o.a.createElement("section",{className:"container-fluid"},o.a.createElement(u,{toDos:a,setTodos:r,toDo:f,setTodo:p}),o.a.createElement("div",{className:"row mt-4 mx-3 justify-content-center"},o.a.createElement(c.a,{onDragEnd:function(e){if(e.destination){var t=e.source.index,n=e.destination.droppableId;r(a.filter(function(e,a){return a===t&&(e.status=String(n),e.date=(new Date).toLocaleDateString()),e}))}}},o.a.createElement(g,{toDos:a,passComponent:function(e,t){return o.a.createElement(i,{obj:e,toDos:a,setTodos:r,id:t})},currentStatus:"Todo",colour:"bg-info",id:"Todo"}),o.a.createElement(g,{toDos:a,passComponent:function(e,t){return o.a.createElement(i,{obj:e,toDos:a,setTodos:r,id:t})},currentStatus:"Progress",colour:"bg-warning",id:"Progress"}),o.a.createElement(g,{toDos:a,passComponent:function(e,t){return o.a.createElement(d,{obj:e,toDos:a,setTodos:r,id:t})},currentStatus:"Completed",currentSecStatus:"Cancelled",colour:"bg-success",id:"Completed"}))))};s.a.createRoot(document.getElementById("root")).render(o.a.createElement(f,null))},9:function(e,t,a){e.exports=a(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.57dd6ada.chunk.js.map