(function(e){function t(t){for(var o,i,s=t[0],c=t[1],r=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(t);while(d.length)d.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},a={app:0},l=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6a4ba222"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"0e433876"}[e]+".css",a=c.p+o,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var r=l[s],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){r=d[s],u=r.getAttribute("data-href");if(u===o||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete i[e],h.parentNode.removeChild(h),n(l)},h.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){i[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var l=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=l);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/work/",c.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var h=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01e0":function(e,t,n){"use strict";var o=n("77a9"),i=n.n(o);i.a},"0383":function(e,t,n){"use strict";var o=n("a21c"),i=n.n(o);i.a},"069b":function(e,t,n){"use strict";var o=n("74bf"),i=n.n(o);i.a},"0992":function(e,t,n){},"163a":function(e,t,n){"use strict";var o=n("ba9a"),i=n.n(o);i.a},"21d4":function(e,t,n){"use strict";var o=n("5d2b"),i=n.n(o);i.a},4629:function(e,t,n){},"50c6":function(e,t,n){"use strict";var o=n("8306"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l=(n("5c0b"),n("2877")),s={},c=Object(l["a"])(s,i,a,!1,null,null,null),r=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("NowTime"),n("div",{staticClass:"d-flex"},[n("AddTodo",{attrs:{name:this.name},on:{handleAddTodo:e.addTodoList}}),n("SearchTodo",{on:{handleSearchTodos:e.handleSearchTodos,handleSearchTodosReset:e.handleSearchTodosReset}})],1),n("TodoListRoot",{attrs:{todos:this.handleSortTodos,sortTodos:this.sortTodos},on:{handleTodoEdit:e.handleEdit,handleCheckAll:e.handleCheckAll,handleDelete:e.handleDelete}}),e.switchEdit?n("LightBox",{attrs:{edit:this.edit},on:{handleCancel:e.handleCancel,handleEditEnter:e.handleEditEnter}}):e._e()],1)},h=[],m=(n("4de4"),n("7db0"),n("4160"),n("c975"),n("498a"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])}),f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},p=v,g=(n("e2d3"),Object(l["a"])(p,m,f,!1,null,"1dfc7223",null)),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){return e.update(t)}}})])},y=[],T={name:"VmodelInput",props:{value:{required:!1,type:String}},model:{prop:"value",event:"update"},methods:{update:function(e){console.log(e),this.$emit("update",e.target.value)}}},k=T,A=(n("01e0"),Object(l["a"])(k,_,y,!1,null,"5ccd84f8",null)),N=A.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-50"},[n("span",[e._v("名稱：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todoTitle,expression:"todoTitle"}],attrs:{type:"text",placeholder:"輸入名稱"},domProps:{value:e.todoTitle},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"Enter",void 0,t.key,void 0)?null:e.handleAddTodo(t)},input:function(t){t.target.composing||(e.todoTitle=t.target.value)}}}),n("br"),n("br"),n("span",[e._v("內容：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todoInfo,expression:"todoInfo"}],attrs:{type:"text",placeholder:"輸入內容"},domProps:{value:e.todoInfo},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"Enter",void 0,t.key,void 0)?null:e.handleAddTodo(t)},input:function(t){t.target.composing||(e.todoInfo=t.target.value)}}}),n("br"),n("br"),n("span",[e._v("選擇時間：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todoTime,expression:"todoTime"}],attrs:{type:"date"},domProps:{value:e.todoTime},on:{input:function(t){t.target.composing||(e.todoTime=t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:e.handleAddTodo}},[e._v("新增")])])},S=[],x=(n("fb6a"),n("a9e3"),{name:"AddTodo",data:function(){return{todoTitle:"",todoInfo:"",todoTime:"",serachTodo:""}},methods:{handleAddTodo:function(){this.$emit("handleAddTodo",{todoTitle:this.todoTitle,todoInfo:this.todoInfo,todoTime:this.todoTime}),this.todoTitle="",this.todoInfo=""}},props:{name:{type:String|Number}},created:function(){var e=new Date,t=("0"+e.getDate()).slice(-2),n=("0"+(e.getMonth()+1)).slice(-2),o=e.getFullYear()+"-"+n+"-"+t;this.nowTime=e.toLocaleString(),this.todoTime=o}}),E=x,C=(n("8f23"),Object(l["a"])(E,w,S,!1,null,"6e4bfcfa",null)),$=C.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-50"},[n("span",[e._v("搜尋：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.serachTodo,expression:"serachTodo"}],attrs:{type:"text",placeholder:"輸入名稱"},domProps:{value:e.serachTodo},on:{input:function(t){t.target.composing||(e.serachTodo=t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:e.handleSearchTodos}},[e._v("查詢")]),n("button",{on:{click:e.handleSearchTodosReset}},[e._v("重置")])])},O=[],D={name:"SearchTodo",data:function(){return{serachTodo:""}},methods:{handleSearchTodos:function(){this.$emit("handleSearchTodos",this.serachTodo),this.serachTodo=""},handleSearchTodosReset:function(){this.$emit("handleSearchTodosReset"),this.serachTodo=""}}},I=D,B=(n("ebe0"),Object(l["a"])(I,j,O,!1,null,"1c23c9ea",null)),P=B.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"gutter"}),n("button",{on:{click:e.handleCheckAll}},[e._v("全選")]),n("button",{on:{click:e.handleDelete}},[e._v("刪除")]),n("div",{staticClass:"todo mt-2"},[n("span"),n("span",[e._v("名稱")]),n("span",{staticClass:"time"},[e._v(" 時間 "),n("i",{class:{active:1==e.sortTodos},on:{click:function(t){return e.handleSort(1)}}},[e._v("▲")]),n("i",{class:{active:2==e.sortTodos},on:{click:function(t){return e.handleSort(2)}}},[e._v("▼")])]),n("span",[e._v("敘述")]),n("span",[e._v("編輯")])]),n("ul",{staticClass:"todo"},[e._l(e.todos,(function(t){return[n("TodoList",{key:t.id,attrs:{item:t},on:{handleTodoEdit:function(n){return e.handleTodoEdit({id:t.id,title:t.title,info:t.info,time:t.time})}}})]}))],2)])},R=[],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.checkbox,expression:"item.checkbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.item.checkbox)?e._i(e.item.checkbox,null)>-1:e.item.checkbox},on:{change:function(t){var n=e.item.checkbox,o=t.target,i=!!o.checked;if(Array.isArray(n)){var a=null,l=e._i(n,a);o.checked?l<0&&e.$set(e.item,"checkbox",n.concat([a])):l>-1&&e.$set(e.item,"checkbox",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.item,"checkbox",i)}}})]),n("span",[e._v(e._s(e.item.title))]),n("span",[e._v(e._s(e.item.time))]),n("span",[e._v(e._s(e.item.info))]),n("span",[n("button",{on:{click:e.handleTodoEdit}},[e._v("編輯")])])])},z=[],H={name:"TodoList",props:{item:{type:Object}},data:function(){return{}},methods:{handleTodoEdit:function(){this.$emit("handleTodoEdit")}}},K=H,M=(n("163a"),Object(l["a"])(K,F,z,!1,null,"bf362418",null)),U=M.exports,V={name:"TodoListRoot",components:{TodoList:U},props:{todos:{type:Array},sortTodos:{type:Number}},data:function(){return{}},methods:{handleTodoEdit:function(e){this.$emit("handleTodoEdit",e)},handleCheckAll:function(){this.$emit("handleCheckAll")},handleDelete:function(){this.$emit("handleDelete")},handleSort:function(e){1===e?this.$parent.sortTodos=1:2===e&&(this.$parent.sortTodos=2)}}},q=V,J=(n("9768"),Object(l["a"])(q,L,R,!1,null,"85cd0da8",null)),Y=J.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"time"},[e._v("現在時間："+e._s(e.nowTime))])},X=[],G={name:"NowTime",data:function(){return{nowTime:""}},created:function(){var e=new Date,t=("0"+e.getDate()).slice(-2),n=("0"+(e.getMonth()+1)).slice(-2);e.getFullYear();this.nowTime=e.toLocaleString()},mounted:function(){var e=this;setInterval((function(){e.nowTime=(new Date).toLocaleString()}),1e3)}},Q=G,Z=(n("50c6"),Object(l["a"])(Q,W,X,!1,null,"6fee91da",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lightBox"},[n("div",{staticClass:"lightBox-close"}),n("div",{staticClass:"lightBox-container"},[n("span",[e._v("名稱：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.title,expression:"edit.title"}],attrs:{type:"text"},domProps:{value:e.edit.title},on:{input:function(t){t.target.composing||e.$set(e.edit,"title",t.target.value)}}}),n("br"),n("br"),n("span",[e._v("內容：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.info,expression:"edit.info"}],attrs:{type:"text"},domProps:{value:e.edit.info},on:{input:function(t){t.target.composing||e.$set(e.edit,"info",t.target.value)}}}),n("br"),n("br"),n("span",[e._v("選擇時間：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit.time,expression:"edit.time"}],attrs:{type:"date"},domProps:{value:e.edit.time},on:{input:function(t){t.target.composing||e.$set(e.edit,"time",t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:e.handleCancel}},[e._v("取消")]),n("button",{on:{click:e.handleEditEnter}},[e._v("確定")])])])},ne=[],oe={name:"LightBox",props:{edit:{type:Object}},methods:{handleCancel:function(){this.$emit("handleCancel")},handleEditEnter:function(){this.$emit("handleEditEnter")}}},ie=oe,ae=(n("d547"),Object(l["a"])(ie,te,ne,!1,null,"6e3e684c",null)),le=ae.exports,se={name:"Home",components:{HelloWorld:b,VmodelInput:N,AddTodo:$,SearchTodo:P,TodoListRoot:Y,NowTime:ee,LightBox:le},data:function(){return{name:"123",todos:[],catchTodos:[],switchEdit:!1,edit:[],sortTodos:0,allCheckoutBox:!1}},computed:{handleSortTodos:function(){return 1===this.sortTodos?this.todos.sort((function(e,t){return new Date(e.time).getTime()-new Date(t.time).getTime()})):2===this.sortTodos?this.todos.sort((function(e,t){return new Date(t.time).getTime()-new Date(e.time).getTime()})):this.todos.sort((function(e,t){return e.id-t.id}))}},methods:{addTodoList:function(e){if(""!==e.todoTitle.trim())if(""!==e.todoInfo.trim()){var t=new Date;this.todos.push({id:t.getTime(),time:e.todoTime,title:e.todoTitle,info:e.todoInfo,checkbox:!1}),this.sortTodos=0,this.handleSearchTodosReset()}else alert("請輸入列表內容");else alert("請輸入列表名稱")},handleEdit:function(e){this.edit=e,this.switchEdit=!0},handleCancel:function(){this.edit=[],this.switchEdit=!1},handleEditEnter:function(){var e=this,t=this.todos.find((function(t){return t.id===e.edit.id}));""!==this.edit.title.trim()?""!==this.edit.info.trim()?(t.title=this.edit.title,t.info=this.edit.info,t.time=this.edit.time,this.edit=[],this.switchEdit=!1):alert("請輸入列表內容"):alert("請輸入列表名稱")},handleCheckAll:function(){!1===this.allCheckoutBox?(this.allCheckoutBox=!0,this.todos.forEach((function(e){e.checkbox=!0}))):(this.allCheckoutBox=!1,this.todos.forEach((function(e){e.checkbox=!e.checkbox})))},handleDelete:function(){this.todos=this.todos.filter((function(e){return!0!==e.checkbox})),this.catchTodos=this.catchTodos.filter((function(e){return!0!==e.checkbox}))},handleSearchTodos:function(e){""!==e.trim()?(this.catchTodos=this.todos,this.todos=this.todos.filter((function(t){return-1!==t.title.indexOf(e)}))):alert("請輸入搜尋名稱")},handleSearchTodosReset:function(){0!==this.catchTodos.length&&(this.todos=this.catchTodos,this.catchTodos=[])}},created:function(){console.log(this.$route)}},ce=se,re=(n("0383"),Object(l["a"])(ce,d,h,!1,null,"7e6aa626",null)),ue=re.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"select"},[n("Select",{attrs:{items:e.itemsArray,defaultSelected:1},on:{onFocus:e.onFocus,onBlur:e.onBlur,onSearch:e.onSearch,onSelect:function(e){}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),0!==e.name.length?n("p",[e._v(e._s(e.name))]):e._e()],1),n("div",{staticClass:"select"},[n("Select",{attrs:{items:e.iiiiiiii,placeholder:e.placeholder,defaultSelected:0},on:{onFocus:e.onFocus,onBlur:e.onBlur,onSearch:e.onSearch,onSelect:function(e){}},model:{value:e.name2,callback:function(t){e.name2=t},expression:"name2"}}),0!==e.name2.length?n("p",[e._v(e._s(e.name2))]):e._e()],1)])},he=[],me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.switchSelect?n("div",{staticClass:"closeSelect",on:{click:function(t){return t.stopPropagation(),e.handleSelectUp(t)}}}):e._e(),n("h1",{staticClass:"bigTitle"},[e._v("Select")]),n("div",{staticClass:"w-50"},[n("p",{staticClass:"title"},[e._v("選擇人員：")]),n("div",{staticClass:"selectRoot"},[e.switchSelect?e._e():n("div",{staticClass:"labelRoot",on:{click:e.openSelect,mouseover:e.showDelete,mouseout:e.hideDelete}},[n("span",{staticClass:"finalSelect",style:""!==e.newSelectAllName&&"font-weight: bold"},[e._v(" "+e._s(""===e.newSelectAllName?e.placeholder:e.newSelectAllName))]),0!==e.selectAllName.length?n("div",{staticClass:"totalSelect"},[e._v("共"+e._s(e.selectAllName.length)+"位"),n("span",{staticClass:"toolTip"},[e._v(e._s(e.newSelectAllName))])]):e._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.deleteClose||""===e.newSelectAllName,expression:"!deleteClose || newSelectAllName === ''"}]},[e._v("▼")]),""!==e.newSelectAllName?n("i",{directives:[{name:"show",rawName:"v-show",value:e.deleteClose,expression:"deleteClose"}],on:{click:function(t){return t.stopPropagation(),e.handleDeleteAll(t)}}},[e._v("X")]):e._e()]),e.switchSelect?n("div",{staticClass:"inputRoot"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTitle,expression:"searchTitle"}],ref:"inputdom",attrs:{type:"text",disabled:"",placeholder:0===e.selectAllName.length?e.placeholder:e.newSelectAllName},domProps:{value:e.searchTitle},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleBack(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleInputEsc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.handleKeyUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.handleKeyDown(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleKeyEnter(t)}],keyup:e.handleSearch,input:function(t){t.target.composing||(e.searchTitle=t.target.value)}}}),0!==e.selectAllName.length?n("div",{staticClass:"totalSelect"},[e._v("共"+e._s(e.selectAllName.length)+"位"),n("span",{staticClass:"toolTip"},[e._v(e._s(e.newSelectAllName))])]):e._e(),""!==e.searchTitle?n("i",{on:{click:e.handleDeleteSearch}},[e._v("X")]):e._e(),n("ul",{ref:"selectDom",staticClass:"select"},[e._l(e.searchAllName,(function(t){return n("li",{key:t.id,staticClass:"select-item",class:{active:t.active},on:{click:function(n){return n.stopPropagation(),e.handleTarget(t.name,t.id)}}},[t.select?n("i",{staticClass:"tick"},[e._v("∨")]):e._e(),e._v(e._s(t.name))])})),0===e.searchAllName.length?n("li",{staticClass:"select-item"},[e._v("找不到搜尋結果")]):e._e()],2)]):e._e()])])])},fe=[],ve=(n("b0c0"),n("2f62")),pe={name:"Select",model:{prop:"value",event:"change"},props:{items:{type:Array},placeholder:{type:String,default:"請選擇"},defaultSelected:Number||0,value:{type:Array,required:!1,default:[]}},data:function(){return{searchName:this.value,searchTitle:"",deleteClose:!1,searchClose:!1,itemActive:0,itemTotal:0,scrollNum:0,totalScrollNum:0,catchItemActive:0,switchSelect:!1,selectAllName:[],newSelectAllName:"",myItems:[]}},computed:{searchAllName:function(){var e=this;return""===this.searchTitle?this.myItems:this.myItems.filter((function(t){return-1!==t.name.indexOf(e.searchTitle)}))}},watch:{searchName:function(){this.searchAllName},items:function(){this.readItem()}},created:function(){this.itemActive=this.defaultSelected||0,this.readItem(),this.$emit("change",this.selectAllName)},mounted:function(){this.itemTotal=this.searchAllName.length},methods:{readItem:function(){var e=this;for(var t in this.myItems=JSON.stringify(this.items),this.myItems=JSON.parse(this.myItems),this.myItems)this.myItems[t].select=!1,this.myItems[t].active=!1;this.myItems.forEach((function(t){!0===t.select&&e.selectAllName.push(t.name)})),this.newSelectAllName="",this.selectAllName.forEach((function(t){e.newSelectAllName+=t+","})),this.newSelectAllName=this.newSelectAllName.slice(0,this.newSelectAllName.length-1)},openSelect:function(e){var t=this;e.stopPropagation(),this.switchSelect=!0,this.itemTotal=this.searchAllName.length,this.$nextTick((function(){t.$emit("onFocus",t.$refs.inputdom),t.$emit("onSearch",t.$refs.inputdom),t.searchAllName.forEach((function(e,n){e.active=!1,t.itemActive===n&&(e.active=!0)})),t.totalScrollNum=t.$refs.selectDom.clientHeight,t.itemActive===t.defaultSelected&&(t.scrollNum=45*t.defaultSelected),t.scrollNum>=t.totalScrollNum&&(t.scrollNum=t.totalScrollNum),t.$refs.selectDom.scrollTo(0,t.scrollNum)}))},handleTarget:function(e,t){var n=this;t&&this.myItems.forEach((function(e){e.id===t&&(e.select=!e.select)})),this.selectAllName=[],this.myItems.forEach((function(e){!0===e.select&&n.selectAllName.push(e.name)})),this.newSelectAllName="",this.selectAllName.forEach((function(e){n.newSelectAllName+=e+","})),this.newSelectAllName=this.newSelectAllName.slice(0,this.newSelectAllName.length-1),this.$emit("onFocus",this.$refs.inputdom)},handleSearch:function(){var e=this;this.itemTotal=this.searchAllName.length,this.searchAllName.forEach((function(e,t){e.active=!1})),""!==this.searchTitle&&0!==this.searchAllName.length?this.searchAllName[this.catchItemActive].active=!0:(this.catchItemActive=0,this.searchAllName.forEach((function(t,n){t.active=!1,e.itemActive===n&&(t.active=!0)}))),this.handleSearchName()},handleSelectUp:function(){this.switchSelect=!1,this.deleteClose=!1,this.searchTitle="",this.$emit("change",this.selectAllName)},showDelete:function(){this.deleteClose=!0},hideDelete:function(){this.deleteClose=!1},handleDeleteAll:function(){this.newSelectAllName="",this.selectAllName=[],this.searchAllName.forEach((function(e){e.select=!1})),this.$emit("change",this.selectAllName)},handleBack:function(){var e=this;setTimeout((function(){e.$refs.selectDom.scrollTo(0,e.scrollNum)}),0)},handleInputEsc:function(){var e=this;""!==this.searchTitle?(this.searchTitle="",this.$emit("change",this.selectAllName),this.$nextTick((function(){e.$refs.selectDom.scrollTo(0,e.scrollNum)}))):(this.$emit("onBlur",this.$refs.inputdom),this.switchSelect=!1)},handleDeleteSearch:function(){this.searchTitle="",this.$emit("change",this.selectAllName),this.$refs.inputdom.focus()},handleKeyUp:function(){var e=this;if(this.$listeners.onSelect){if(this.totalScrollNum=this.$refs.selectDom.clientHeight,""!==this.searchTitle){if(0===this.catchItemActive)return;this.catchItemActive-=1,this.searchAllName.forEach((function(t,n){t.active=!1,n===e.catchItemActive&&(t.active=!0)}))}else{if(0===this.itemActive)return;if(this.itemActive-=1,this.searchAllName.forEach((function(t,n){t.active=!1,n===e.itemActive&&(t.active=!0)})),this.scrollNum<=0)return;this.scrollNum-=45}this.$refs.selectDom.scrollTo(0,this.scrollNum)}},handleKeyDown:function(){var e=this;if(this.$listeners.onSelect){if(this.totalScrollNum=this.$refs.selectDom.clientHeight,""!==this.searchTitle){if(this.catchItemActive===this.itemTotal-1)return;this.catchItemActive+=1,this.searchAllName.forEach((function(t,n){t.active=!1,n===e.catchItemActive&&(t.active=!0)}))}else{if(this.itemActive===this.itemTotal-1)return;if(this.itemActive+=1,this.searchAllName.forEach((function(t,n){t.active=!1,n===e.itemActive&&(t.active=!0)})),this.scrollNum>=this.totalScrollNum)return;this.scrollNum+=45}this.$refs.selectDom.scrollTo(0,this.scrollNum)}},handleKeyEnter:function(){var e=this;this.searchAllName.forEach((function(t,n){(n===e.itemActive&&""===e.searchTitle||n===e.catchItemActive&&""!==e.searchTitle)&&(t.select=!t.select)})),this.handleTarget()},handleSearchName:function(){this.$emit("change",this.selectAllName)}}},ge=pe,be=(n("069b"),Object(l["a"])(ge,me,fe,!1,null,"7abcb9de",null)),_e=be.exports,ye={name:"SelectPage",components:{Select:_e},data:function(){return{placeholder:"拜託拜託，請選擇",name:[],name2:[],iiiiiiii:[]}},computed:Object(ve["c"])({itemsArray:function(e){return e.select.allName}}),created:function(){var e=this;setTimeout((function(){e.iiiiiiii=[{id:1,name:"fff"},{id:2,name:"fffasd"},{id:3,name:"f213ff"}]}),1e3),setTimeout((function(){e.iiiiiiii=[{id:1,name:"fff"}]}),5e3)},mounted:function(){},methods:{onFocus:function(e){e.focus()},onBlur:function(e){e.blur()},onSearch:function(e){e.removeAttribute("disabled"),e.focus()}}},Te=ye,ke=(n("d8f6"),Object(l["a"])(Te,de,he,!1,null,"76fd2260",null)),Ae=ke.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{style:{"margin-bottom":"20px"},attrs:{columns:e.columns,data:e.data,titleBold:"font-bold"},scopedSlots:e._u([{key:"name",fn:function(t){return[n("strong",[e._v(e._s(t.data))])]}},{key:"age",fn:function(t){return[n("strong",[e._v(e._s(t.data))])]}},{key:"actions",fn:function(t){return[n("Button",{attrs:{type:"error",size:"small"},on:{click:function(n){return e.removeList(t.index,t.keyValue,{data:e.data})}}},[e._v("刪除")])]}}])}),n("Table",{attrs:{columns:e.columns2,data:e.data2},scopedSlots:e._u([{key:"skill",fn:function(t){return[n("strong",[e._v(e._s(t.data))])]}},{key:"info",fn:function(t){return[n("strong",[e._v(e._s(t.data))])]}},{key:"button",fn:function(t){return[n("Button",{attrs:{type:"error",size:"large"},on:{click:function(n){return e.removeList(t.index,t.keyValue,{data2:e.data2})}}},[e._v("刪除")])]}}])}),n("br"),n("br"),n("Button",{attrs:{type:"primary"}},[e._v("Yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")]),n("br"),n("br"),n("Button",{attrs:{type:"primary",size:"small"}}),n("br"),n("br"),n("Button",{attrs:{type:"error",size:"large"}})],1)},we=[],Se=(n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,on:{click:e.handleClickLink}},[e._t("default",[e._v("預設")])],2)}),xe=[],Ee=n("ade3"),Ce="btn",$e={name:"Button",props:{type:{validator:function(e){return"default"===e||"primary"===e||"error"===e},default:"default"},size:{validator:function(e){return"default"===e||"small"===e||"large"===e},default:"default"}},computed:{classes:function(){return["".concat(Ce),"".concat(Ce,"-").concat(this.type),Object(Ee["a"])({},"".concat(Ce,"-").concat(this.size),"default"!==this.size)]}},created:function(){},methods:{handleClickLink:function(e){this.$emit("click",e)}}},je=$e,Oe=(n("b998"),Object(l["a"])(je,Se,xe,!1,null,"73fedf63",null)),De=Oe.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table"},[n("colgroup",e._l(e.columns,(function(e){return n("col",{key:e.title,attrs:{width:e.width?e.width:100}})})),0),n("thead",[n("tr",e._l(e.columns,(function(t){return n("th",{key:t.title},[e._v(e._s(t.title))])})),0)]),n("tbody",e._l(e.data,(function(t,o){return n("tr",{key:o},[e._l(e.columns,(function(i,a){return[n("td",{key:a,class:{"btn-center":"center"===e.columns[a].align}},["slot"===Object.keys(e.columns[a])[1]?n("span",[e._t(e.columns[a].slot,null,{data:t[e.columns[a][Object.keys(e.columns[a])[1]]],keyValue:t[Object.keys(t)[0]],index:o})],2):"key"===Object.keys(e.columns[a])[1]?n("span",[e._v(e._s(t[e.columns[a].key]))]):e._e()])]}))],2)})),0)])])},Be=[],Pe={name:"Table",components:{Button:De},props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},titleBold:{validator:function(e){return"default"===e||"font-bold"===e},default:"default"}},data:function(){return{columnNum:""}},computed:{},created:function(){this.columnNum=100/this.columns.length+"%"}},Le=Pe,Re=(n("21d4"),Object(l["a"])(Le,Ie,Be,!1,null,"08e537a9",null)),Fe=Re.exports,ze={name:"TablePage",components:{Button:De,Table:Fe},data:function(){return{columns:[{title:"姓名",slot:"name"},{title:"年齡",slot:"age",align:"center"},{title:"居住地",key:"address",align:"center"},{title:"操作",slot:"actions",width:80,align:"center"}],data:[{name:"Aga",age:18,address:"外太空"},{name:"Matol",age:100,address:"太陽"}],columns2:[{title:"技能名稱",slot:"skill"},{title:"CD",key:"cd"},{title:"購買金額",key:"money"},{title:"說明",slot:"info"},{title:"操作",slot:"button",align:"center",width:50}],data2:[{skill:"製仗",cd:30,money:500,info:"耍白癡"},{skill:"販劍",cd:10,money:200,info:"婊子"},{skill:"持盾",cd:30,money:999,info:"少根筋"},{skill:"聖盔",cd:10,money:99999,info:"沒救"}]}},methods:{removeList:function(e,t,n){console.log("name",t),console.log("num",e);var o=Object.keys(n)[0];this[o]=this[o].filter((function(t,n){return n!==e}))}}},He=ze,Ke=(n("848e"),Object(l["a"])(He,Ne,we,!1,null,"b004397a",null)),Me=Ke.exports;o["a"].use(u["a"]);var Ue=[{path:"/",name:"Home",component:ue},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"ef4c"))}},{path:"/select",name:"Select",component:Ae},{path:"/table",name:"Table",component:Me}],Ve=new u["a"]({routes:Ue}),qe=Ve,Je={namespaced:!0,state:{user:"frank"},getters:{fullName:function(){return"frank wu"}},mutations:{say:function(){console.log("a say")}},actions:{delaySay2:function(e){return new Promise((function(e,t){setTimeout((function(){console.log("a說話2."),e()}),1e3)}))}}},Ye={namespaced:!0,state:{allName:[{id:"01",name:"阿嘎"},{id:"02",name:"frank"},{id:"03",name:"bob"},{id:"04",name:"evanna"},{id:"05",name:"a-pon"},{id:"06",name:"小明"},{id:"07",name:"小華"},{id:"08",name:"志明"},{id:"09",name:"春嬌"},{id:"10",name:"小美"}],selectName:""},getters:{searchAllName:function(e){return""===e.selectName?e.allName:e.allName.filter((function(t){return-1!==t.name.indexOf(e.selectName)}))}},mutations:{},actions:{}};o["a"].use(ve["a"]);var We=new ve["a"].Store({state:{root:"跟"},getters:{hello:function(e,t){return e.root+"哈囉"+t.cat},cat:function(){return"貓"}},mutations:{say:function(e,t){console.log("我說話")}},actions:{delaySay2:function(e){var t=this;return new Promise((function(n,o){setTimeout((function(){console.log("我說話2."),console.log(e,t),n()}),1e3)}))}},modules:{a:Je,select:Ye}});o["a"].config.productionTip=!1,new o["a"]({router:qe,store:We,render:function(e){return e(r)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"5d2b":function(e,t,n){},"6cbe":function(e,t,n){},"6ed6":function(e,t,n){},"74bf":function(e,t,n){},"77a9":function(e,t,n){},8306:function(e,t,n){},"848e":function(e,t,n){"use strict";var o=n("c475"),i=n.n(o);i.a},"8ed0":function(e,t,n){},"8f23":function(e,t,n){"use strict";var o=n("6ed6"),i=n.n(o);i.a},9768:function(e,t,n){"use strict";var o=n("ee31"),i=n.n(o);i.a},"9c0c":function(e,t,n){},a016:function(e,t,n){},a21c:function(e,t,n){},b998:function(e,t,n){"use strict";var o=n("4629"),i=n.n(o);i.a},ba9a:function(e,t,n){},c475:function(e,t,n){},d547:function(e,t,n){"use strict";var o=n("6cbe"),i=n.n(o);i.a},d8f6:function(e,t,n){"use strict";var o=n("8ed0"),i=n.n(o);i.a},e2d3:function(e,t,n){"use strict";var o=n("0992"),i=n.n(o);i.a},ebe0:function(e,t,n){"use strict";var o=n("a016"),i=n.n(o);i.a},ee31:function(e,t,n){}});
//# sourceMappingURL=app.0e2c0674.js.map