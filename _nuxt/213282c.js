(window.webpackJsonp=window.webpackJsonp||[]).push([[187,18,108,130,139],{418:function(t,e,l){"use strict";l.r(e);var o={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},n=(l(423),l(58)),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.borderClass+" notice p-2",domProps:{innerHTML:t._s(t.message)}})}),[],!1,null,"07b98bc0",null);e.default=component.exports},419:function(t,e,l){var content=l(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},421:function(t,e,l){"use strict";l.r(e);l(20),l(125);var o={components:{multiSelect:l(426).default},name:"fieldGroup",props:{group:{type:Object,default:function(){return{}}},wrapperClass:{type:String,default:function(){return""}},buttonsColClass:{type:String,default:function(){return""}},includeButtons:{type:Boolean,default:function(){return!1}},includeCustomCol:{type:Boolean,default:function(){return!1}},includeCustomColBefore:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwitchOption:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{}},n=(l(429),l(58)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.wrapperClass},[e("b-row",[t.includeCustomColBefore?t._t("custom-col-before"):t._e(),t._v(" "),t._l(t.group,(function(l,o){return e("b-col",{key:o,attrs:{id:o}},[e("b-form-group",{class:l.labelClass?l.labelClass:l.class?l.class:"width-st",attrs:{label:l.label,description:l.description,disabled:l.disabled}},[l.labelInfoHover?e("label",{staticClass:"mb-1"},[t._v(t._s(l.labelInfoHover)+" "),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline float-right py-0",staticStyle:{"font-size":"12px"},attrs:{variant:"link",title:l.labelInfoHoverText}},[e("b-icon",{staticClass:"text-warning",attrs:{icon:"info-circle"}})],1)],1):t._e(),t._v(" "),"readOnly"===l.type?e("div",{class:l.class?l.class:""},[e("label"),t._v(" "),e("span",[t._v(t._s(l.value))])]):t._e(),t._v(" "),"link"===l.type?e("div",{class:l.class?l.class:""},[e("label"),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v(t._s(l.value))])])]):t._e(),t._v(" "),"text"===l.type?e("b-form-input",{class:l.class?l.class:"",model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"currency"===l.type?e("b-input-group",{attrs:{prepend:"$"}},[e("b-form-input",{class:l.class?l.class:"",model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}})],1):t._e(),t._v(" "),"textarea"===l.type?e("b-form-textarea",{class:l.class?l.class:"",attrs:{rows:l.rows?l.rows:""},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"file"===l.type?e("b-form-file",{class:l.class?l.class:"",model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"lov"===l.type?e("b-form-select",{class:l.class?l.class:"",attrs:{options:l.options?l.options:[]},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"mlov"===l.type?e("MultiSelect",{class:l.class?l.class:"",attrs:{options:l.options?l.options:[]},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"date"===l.type?e("b-form-datepicker",{class:l.class?l.class:"",model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"switch"===l.type?e("b-form-radio-group",{class:l.class?l.class:"",attrs:{options:l.options?l.options:t.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"radio"===l.type?e("b-form-radio-group",{class:l.class?l.class:"",attrs:{options:l.options?l.options:t.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}}):t._e(),t._v(" "),"checkbox"===l.type?e("b-form-checkbox",{class:"mt-1"+(l.class?l.class:""),attrs:{value:!0,"unchecked-value":!1},model:{value:l.value,callback:function(e){t.$set(l,"value",e)},expression:"field.value"}},[t._v("\n          "+t._s(l.subLabel)+"\n        ")]):t._e(),t._v(" "),"dayHourMinute"===l.type?e("div",[e("label",{staticClass:"d-inline mr-1"},[t._v("Days")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.days,callback:function(e){t.days=e},expression:"days"}}),t._v(" "),e("label",{staticClass:"d-inline mr-1 ml-2"},[t._v("Hours")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.hours,callback:function(e){t.hours=e},expression:"hours"}}),t._v(" "),e("label",{staticClass:"d-inline mr-1 ml-2"},[t._v("Minutes")]),e("b-form-input",{staticClass:"d-inline width-xs",model:{value:t.mins,callback:function(e){t.mins=e},expression:"mins"}})],1):t._e()],1)],1)})),t._v(" "),t.includeCustomCol?t._t("custom-col"):t._e(),t._v(" "),t.includeButtons?e("b-col",{class:t.buttonsColClass},[e("div",{staticClass:"d-flex p-4"},[e("label"),t._v(" "),t._t("inline-buttons")],2)]):t._e()],2)],1)}),[],!1,null,"4514f2be",null);e.default=component.exports;installComponents(component,{MultiSelect:l(426).default})},423:function(t,e,l){"use strict";l(419)},424:function(t,e,l){var o=l(92)((function(i){return i[1]}));o.push([t.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),o.locals={},t.exports=o},425:function(t,e,l){"use strict";l.r(e);var o={name:"tableFooter",props:{showIncludeDeleted:{type:Boolean,default:function(){return!0}},showExplanation:{type:Boolean,default:function(){return!1}},deletedLabel:{type:String,default:function(){return"Include deleted/inactive"}}},data:function(){return{itemsPerPage:"5",includeDeleted:!1,variant:"checkbox",showOnTop:!1}},computed:{}},n=(l(435),l(58)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{},[t.showIncludeDeleted&&t.showOnTop?e("b-row",[e("b-col",{staticClass:"text-right"},[e("b-form-group",["switch"===t.variant?e("label",[t._v("Include deleted/inactive?")]):t._e(),t._v(" "),"switch"===t.variant?e("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:t.includeDeleted,callback:function(e){t.includeDeleted=e},expression:"includeDeleted"}}):t._e(),t._v(" "),"checkbox"===t.variant?e("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[t._v("\n          "+t._s(t.deletedLabel)+"\n        ")]):t._e()],1)],1)],1):t._e(),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[t._v("\n      Displaying 1 to 10 of 276 items | No. of entries per page:\n      "),e("b-form-select",{staticStyle:{display:"inline",width:"54px"},attrs:{option:["5","10","50"]},model:{value:t.itemsPerPage,callback:function(e){t.itemsPerPage=e},expression:"itemsPerPage"}})],1),t._v(" "),e("b-col",{staticClass:"text-right"},[e("ul",{staticClass:"pagination b-pagination pagination-sm mb-1",attrs:{role:"menubar","aria-disabled":"false","aria-label":"Pagination"}},[e("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[e("b-icon",{attrs:{icon:"chevron-double-left"}})],1)]),t._v(" "),e("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[e("b-icon",{attrs:{icon:"chevron-left"}})],1)]),t._v(" "),e("li",{staticClass:"page-item",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 1","aria-checked":"true","aria-posinset":"1","aria-setsize":"13",tabindex:"0","data-dashlane-label":"true","data-dashlane-rid":"aa1d1d8f43d8b849","data-form-type":""}},[t._v("\n            1\n          ")])]),t._v(" "),e("li",{staticClass:"page-item active",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 2","aria-checked":"false","aria-posinset":"2","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"949d2576269765d3","data-form-type":""}},[t._v("\n            2\n          ")])]),t._v(" "),e("li",{staticClass:"page-item",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 3","aria-checked":"false","aria-posinset":"3","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"eb4b7f58b1f5a46c","data-form-type":""}},[t._v("\n            3\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 4","aria-checked":"false","aria-posinset":"4","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"8285634d78548067","data-form-type":""}},[t._v("\n            4\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[t._v("\n            5\n          ")])]),t._v(" "),e("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[t._v("\n            ...\n          ")])]),t._v(" "),e("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[e("b-icon",{attrs:{icon:"chevron-right"}})],1)]),t._v(" "),e("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[e("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[e("b-icon",{attrs:{icon:"chevron-double-right"}})],1)])])])],1),t._v(" "),t.showIncludeDeleted&&!t.showOnTop?e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{cols:"3"}},[t.showExplanation?e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.html",value:"<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>",expression:"\n          '<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>'\n        ",modifiers:{hover:!0,html:!0}}],staticClass:"demoInfo",attrs:{title:"",variant:"link"}},[e("b-icon",{attrs:{icon:"info-circle"}}),t._v(" Table pagination explanation\n      ")],1):t._e()],1),t._v(" "),e("b-col",{staticClass:"text-right"},[e("b-form-group",["switch"===t.variant?e("label",[t._v(t._s(t.deletedLabel))]):t._e(),t._v(" "),"switch"===t.variant?e("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:t.includeDeleted,callback:function(e){t.includeDeleted=e},expression:"includeDeleted"}}):t._e(),t._v(" "),"checkbox"===t.variant?e("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[t._v("\n          "+t._s(t.deletedLabel)+"\n        ")]):t._e()],1)],1)],1):t._e()],1)}),[],!1,null,"72798235",null);e.default=component.exports},426:function(t,e,l){"use strict";l.r(e);var o={name:"multiSelect",props:{options:{type:Array,default:function(){return[]}}},methods:{}},n=l(58),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ms-container p-1"},[t._l(t.options,(function(option,l){return e("b-button",{key:l,attrs:{id:l,variant:"outline-dark"}},[t._v(t._s(option)+"  x")])})),t._v("  \n")],2)}),[],!1,null,"30d40a90",null);e.default=component.exports},428:function(t,e,l){var content=l(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(93).default)("51762d96",content,!0,{sourceMap:!1})},429:function(t,e,l){"use strict";l(428)},430:function(t,e,l){var o=l(92)((function(i){return i[1]}));o.push([t.i,".col[data-v-4514f2be]{flex-grow:0!important}.grow .col[data-v-4514f2be]{flex-grow:1!important}.input-group-text[data-v-4514f2be]{border-radius:0;font-size:.75rem}",""]),o.locals={},t.exports=o},431:function(t,e,l){var content=l(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(93).default)("2e15c730",content,!0,{sourceMap:!1})},435:function(t,e,l){"use strict";l(431)},436:function(t,e,l){var o=l(92)((function(i){return i[1]}));o.push([t.i,".pagination[data-v-72798235]{align-items:baseline;justify-content:flex-end}.pagination .page-link[data-v-72798235]{border:none;color:var(--primary_800);font-weight:400;height:44px;width:44px}.page-item.active .page-link[data-v-72798235]{background-color:#fff;border:1px solid var(--neutrals_300);color:var(--primary_900);z-index:3}.pagination-sm .page-link[data-v-72798235]{font-size:.875rem;line-height:1.5;padding:.25rem .5rem}",""]),o.locals={},t.exports=o},838:function(t,e,l){"use strict";l.r(e);var o=l(421),n=l(418),r=l(425),c={components:{FieldGroup:o.default,notice:n.default,tableFooter:r.default},name:"newsStatsModalContent",props:{doc:{type:Object,default:function(){return{}}},mode:{type:String,default:function(){return"new"}}},data:function(){return{followed:{options:{chart:{height:280,type:"radialBar"},series:[75],plotOptions:{radialBar:{hollow:{margin:15,size:"70%"},dataLabels:{showOn:"always",name:{offsetY:-10,show:!0,fontSize:"30px"},value:{color:"#888",fontSize:"30px",show:!0}}}},stroke:{lineCap:"round"},labels:["42 of 56"],colors:["#4789cb"]}},dismissed:{options:{chart:{height:280,type:"radialBar"},series:[50],plotOptions:{radialBar:{hollow:{margin:15,size:"70%"},dataLabels:{showOn:"always",name:{offsetY:-10,show:!0,fontSize:"30px"},value:{color:"#888",fontSize:"30px",show:!0}}}},stroke:{lineCap:"round"},labels:["28 of 56"],colors:["#457d57"]}},stats:[{userName:"Artois Stella",followedLink:!0,dismissed:!1},{userName:"Joyce James",followedLink:!0,dismissed:!0},{userName:"Rolling Stan",followedLink:!1,dismissed:!1}]}},computed:{}},d=l(58),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",[e("div",{staticClass:"text-center"},[e("h4",{staticStyle:{color:"#4789cb"}},[t._v("Link Followed")]),t._v(" "),e("apexchart",{attrs:{width:"100%",type:"radialBar",options:t.followed.options,series:t.followed.options.series}})],1)]),t._v(" "),e("b-col",[e("div",{staticClass:"text-center"},[e("h4",{staticStyle:{color:"#457d57"}},[t._v("Dismissed")]),t._v(" "),e("apexchart",{attrs:{width:"100%",type:"radialBar",options:t.dismissed.options,series:t.dismissed.options.series}})],1)])],1),t._v(" "),e("b-row",{staticClass:"mt-4 mb-2"},[e("b-col",{staticClass:"text-right"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline",attrs:{variant:"link",size:"sm",title:"Download as CSV"}},[e("b-icon",{attrs:{icon:"cloud-download"}})],1),t._v(" "),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline ml-2",attrs:{variant:"outline-primary",title:"Generate a reminder email to all users who have not yet dismissed this item"}},[t._v("Generate a reminder email")])],1)],1),t._v(" "),e("b-row",[e("b-col",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",[t._v("User")]),t._v(" "),e("th",{staticClass:"text-center",staticStyle:{width:"150px"}},[t._v("Link Followed")]),t._v(" "),e("th",{staticClass:"text-center",staticStyle:{width:"150px"}},[t._v("Dismissed")])])]),t._v(" "),e("tbody",t._l(t.stats,(function(l,o){return e("tr",{key:o,attrs:{id:o}},[e("td",[t._v("\n                "+t._s(l.userName)+"\n              ")]),t._v(" "),e("td",{staticClass:"text-center"},[l.followedLink?e("b-icon",{staticClass:"h4",attrs:{icon:"check",variant:"success"}}):t._e(),t._v(" "),l.followedLink?t._e():e("b-icon",{staticClass:"h4",attrs:{icon:"x",variant:"danger"}})],1),t._v(" "),e("td",{staticClass:"text-center"},[l.dismissed?e("b-icon",{staticClass:"h4",attrs:{icon:"check",variant:"success"}}):t._e(),t._v(" "),l.dismissed?t._e():e("b-icon",{staticClass:"h4",attrs:{icon:"x",variant:"danger"}})],1)])})),0)])]),t._v(" "),e("table-footer",{staticClass:"mb-4",attrs:{showIncludeDeleted:!1}})],1)],1),t._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",[t._v("\n      Dev notes:\n\n      "),e("ul",[e("li",[t._v("When exporting to CSV, followed link and dimissed values will transform to \"Yes\" and 'No'")])])])],1)],1)}),[],!1,null,"160f1746",null);e.default=component.exports}}]);