(window.webpackJsonp=window.webpackJsonp||[]).push([[128,22,139],{425:function(t,e,r){"use strict";r.r(e);var o={name:"tableFooter",props:{showIncludeDeleted:{type:Boolean,default:function(){return!0}},showExplanation:{type:Boolean,default:function(){return!1}},deletedLabel:{type:String,default:function(){return"Include deleted/inactive"}}},data:function(){return{itemsPerPage:"5",includeDeleted:!1,variant:"checkbox",showOnTop:!1}},computed:{}},n=(r(435),r(58)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{},[t.showIncludeDeleted&&t.showOnTop?e("b-row",[e("b-col",{staticClass:"text-right"},[e("b-form-group",["switch"===t.variant?e("label",[t._v("Include deleted/inactive?")]):t._e(),t._v(" "),"switch"===t.variant?e("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:t.includeDeleted,callback:function(e){t.includeDeleted=e},expression:"includeDeleted"}}):t._e(),t._v(" "),"checkbox"===t.variant?e("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[t._v("\n          "+t._s(t.deletedLabel)+"\n        ")]):t._e()],1)],1)],1):t._e(),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[t._v("\n      Displaying 1 to 10 of 276 items | No. of entries per page:\n      "),e("b-form-select",{staticStyle:{display:"inline",width:"54px"},attrs:{option:["5","10","50"]},model:{value:t.itemsPerPage,callback:function(e){t.itemsPerPage=e},expression:"itemsPerPage"}})],1),t._v(" "),e("b-col",{staticClass:"text-right"},[e("ul",{staticClass:"pagination b-pagination pagination-sm mb-1",attrs:{role:"menubar","aria-disabled":"false","aria-label":"Pagination"}},[e("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[e("b-icon",{attrs:{icon:"chevron-double-left"}})],1)]),t._v(" "),e("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[e("b-icon",{attrs:{icon:"chevron-left"}})],1)]),t._v(" "),e("li",{staticClass:"page-item",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 1","aria-checked":"true","aria-posinset":"1","aria-setsize":"13",tabindex:"0","data-dashlane-label":"true","data-dashlane-rid":"aa1d1d8f43d8b849","data-form-type":""}},[t._v("\n            1\n          ")])]),t._v(" "),e("li",{staticClass:"page-item active",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 2","aria-checked":"false","aria-posinset":"2","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"949d2576269765d3","data-form-type":""}},[t._v("\n            2\n          ")])]),t._v(" "),e("li",{staticClass:"page-item",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 3","aria-checked":"false","aria-posinset":"3","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"eb4b7f58b1f5a46c","data-form-type":""}},[t._v("\n            3\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 4","aria-checked":"false","aria-posinset":"4","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"8285634d78548067","data-form-type":""}},[t._v("\n            4\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[t._v("\n            5\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[t._v("\n            ...\n          ")])]),t._v(" "),e("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[e("b-icon",{attrs:{icon:"chevron-right"}})],1)]),t._v(" "),e("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[e("b-icon",{attrs:{icon:"chevron-double-right"}})],1)])])])],1),t._v(" "),t.showIncludeDeleted&&!t.showOnTop?e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{cols:"3"}},[t.showExplanation?e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.html",value:"<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>",expression:"\n          '<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>'\n        ",modifiers:{hover:!0,html:!0}}],staticClass:"demoInfo",attrs:{title:"",variant:"link"}},[e("b-icon",{attrs:{icon:"info-circle"}}),t._v(" Table pagination explanation\n      ")],1):t._e()],1),t._v(" "),e("b-col",{staticClass:"text-right"},[e("b-form-group",["switch"===t.variant?e("label",[t._v(t._s(t.deletedLabel))]):t._e(),t._v(" "),"switch"===t.variant?e("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:t.includeDeleted,callback:function(e){t.includeDeleted=e},expression:"includeDeleted"}}):t._e(),t._v(" "),"checkbox"===t.variant?e("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[t._v("\n          "+t._s(t.deletedLabel)+"\n        ")]):t._e()],1)],1)],1):t._e()],1)}),[],!1,null,"72798235",null);e.default=component.exports},427:function(t,e,r){"use strict";r.r(e);var o={name:"sortIcon",computed:{},methods:{}},n=r(58),component=Object(n.a)(o,(function(){var t=this._self._c;return t("span",{staticClass:"float-right"},[t("b-icon",{attrs:{icon:"arrow-down-up"}})],1)}),[],!1,null,"05a07955",null);e.default=component.exports},431:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("2e15c730",content,!0,{sourceMap:!1})},435:function(t,e,r){"use strict";r(431)},436:function(t,e,r){var o=r(92)((function(i){return i[1]}));o.push([t.i,".pagination[data-v-72798235]{align-items:baseline;justify-content:flex-end}.pagination .page-link[data-v-72798235]{border:none;color:var(--primary_800);font-weight:400;height:44px;width:44px}.page-item.active .page-link[data-v-72798235]{background-color:#fff;border:1px solid var(--neutrals_300);color:var(--primary_900);z-index:3}.pagination-sm .page-link[data-v-72798235]{font-size:.875rem;line-height:1.5;padding:.25rem .5rem}",""]),o.locals={},t.exports=o},472:function(t,e,r){"use strict";r.r(e);r(21),r(20),r(15),r(12),r(22),r(17),r(23);var o=r(3),n=r(427),l=r(107),c=r(425);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"casesTable",components:{SortIcon:n.default,tableFooter:c.default},props:{inRelatedFlow:{type:Boolean,default:function(){return!1}}},computed:v({},Object(l.c)(["flow"])),methods:v({},Object(l.b)({openFlowModal:"flow/openFlowModal"}))},m=r(58),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",[t._v("Case Number "),e("sort-icon")],1),t._v(" "),e("th",[t._v("Registry "),e("sort-icon")],1),t._v(" "),e("th",[t._v("Date Registered "),e("sort-icon")],1),t._v(" "),e("th",[t._v("Service"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Case Type "),e("sort-icon")],1),t._v(" "),e("th",[t._v("Case Sub-Type"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Hearing Date"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Decision"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Allocated to"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Judicial Office Holder"),e("sort-icon")],1),t._v(" "),e("th",[t._v("Party Role"),e("sort-icon")],1),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Actions")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("DG12345678-02")]),t._v(" "),e("td",[t._v("North East")]),t._v(" "),e("td",[t._v("19-07-2022")]),t._v(" "),e("td",[t._v("Antisocial Behaviour")]),t._v(" "),e("td",[t._v("Committal - ID-19")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("25-07-2022")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("Arthur Grumiaux")]),t._v(" "),e("td",[t._v("Belle Epoch")]),t._v(" "),e("td",[t._v("Applicant")]),t._v(" "),e("td",{staticClass:"text-center"},[e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.html",value:"Will take the user to the relevant carting/scheduling screens",expression:"\n                'Will take the user to the relevant carting/scheduling screens'\n              ",modifiers:{hover:!0,html:!0}}],staticClass:"mb-2",attrs:{variant:"outline-primary",size:"sm"}},[t._v("\n              Cart\n            ")]),t._v(" "),e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.html",value:"Will take the user to the relevant case screen",expression:"\n                'Will take the user to the relevant case screen'\n              ",modifiers:{hover:!0,html:!0}}],attrs:{variant:"primary",size:"sm"}},[t._v("\n              View/Edit\n            ")])],1)])])])])])}),[],!1,null,"afe43428",null);e.default=component.exports}}]);