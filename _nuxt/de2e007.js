(window.webpackJsonp=window.webpackJsonp||[]).push([[183,18,108,130,139],{418:function(e,t,o){"use strict";o.r(t);var l={name:"notice",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"}},data:function(){return{}},computed:{},methods:{}},n=(o(423),o(58)),component=Object(n.a)(l,(function(){var e=this;return(0,e._self._c)("div",{class:e.borderClass+" notice p-2",domProps:{innerHTML:e._s(e.message)}})}),[],!1,null,"07b98bc0",null);t.default=component.exports},419:function(e,t,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(93).default)("7a3b6d4c",content,!0,{sourceMap:!1})},421:function(e,t,o){"use strict";o.r(t);o(20),o(125);var l={components:{multiSelect:o(426).default},name:"fieldGroup",props:{group:{type:Object,default:function(){return{}}},wrapperClass:{type:String,default:function(){return""}},buttonsColClass:{type:String,default:function(){return""}},includeButtons:{type:Boolean,default:function(){return!1}},includeCustomCol:{type:Boolean,default:function(){return!1}},includeCustomColBefore:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwitchOption:[{text:"Yes",value:!0},{text:"No",value:!1}]}},computed:{}},n=(o(429),o(58)),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:e.wrapperClass},[t("b-row",[e.includeCustomColBefore?e._t("custom-col-before"):e._e(),e._v(" "),e._l(e.group,(function(o,l){return t("b-col",{key:l,attrs:{id:l}},[t("b-form-group",{class:o.labelClass?o.labelClass:o.class?o.class:"width-st",attrs:{label:o.label,description:o.description,disabled:o.disabled}},[o.labelInfoHover?t("label",{staticClass:"mb-1"},[e._v(e._s(o.labelInfoHover)+" "),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline float-right py-0",staticStyle:{"font-size":"12px"},attrs:{variant:"link",title:o.labelInfoHoverText}},[t("b-icon",{staticClass:"text-warning",attrs:{icon:"info-circle"}})],1)],1):e._e(),e._v(" "),"readOnly"===o.type?t("div",{class:o.class?o.class:""},[t("label"),e._v(" "),t("span",[e._v(e._s(o.value))])]):e._e(),e._v(" "),"link"===o.type?t("div",{class:o.class?o.class:""},[t("label"),e._v(" "),t("span",[t("a",{attrs:{href:"#"}},[e._v(e._s(o.value))])])]):e._e(),e._v(" "),"text"===o.type?t("b-form-input",{class:o.class?o.class:"",model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"currency"===o.type?t("b-input-group",{attrs:{prepend:"$"}},[t("b-form-input",{class:o.class?o.class:"",model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}})],1):e._e(),e._v(" "),"textarea"===o.type?t("b-form-textarea",{class:o.class?o.class:"",attrs:{rows:o.rows?o.rows:""},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"file"===o.type?t("b-form-file",{class:o.class?o.class:"",model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"lov"===o.type?t("b-form-select",{class:o.class?o.class:"",attrs:{options:o.options?o.options:[]},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"mlov"===o.type?t("MultiSelect",{class:o.class?o.class:"",attrs:{options:o.options?o.options:[]},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"date"===o.type?t("b-form-datepicker",{class:o.class?o.class:"",model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"switch"===o.type?t("b-form-radio-group",{class:o.class?o.class:"",attrs:{options:o.options?o.options:e.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"radio"===o.type?t("b-form-radio-group",{class:o.class?o.class:"",attrs:{options:o.options?o.options:e.defaultSwitchOption,"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}}):e._e(),e._v(" "),"checkbox"===o.type?t("b-form-checkbox",{class:"mt-1"+(o.class?o.class:""),attrs:{value:!0,"unchecked-value":!1},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"field.value"}},[e._v("\n          "+e._s(o.subLabel)+"\n        ")]):e._e(),e._v(" "),"dayHourMinute"===o.type?t("div",[t("label",{staticClass:"d-inline mr-1"},[e._v("Days")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.days,callback:function(t){e.days=t},expression:"days"}}),e._v(" "),t("label",{staticClass:"d-inline mr-1 ml-2"},[e._v("Hours")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.hours,callback:function(t){e.hours=t},expression:"hours"}}),e._v(" "),t("label",{staticClass:"d-inline mr-1 ml-2"},[e._v("Minutes")]),t("b-form-input",{staticClass:"d-inline width-xs",model:{value:e.mins,callback:function(t){e.mins=t},expression:"mins"}})],1):e._e()],1)],1)})),e._v(" "),e.includeCustomCol?e._t("custom-col"):e._e(),e._v(" "),e.includeButtons?t("b-col",{class:e.buttonsColClass},[t("div",{staticClass:"d-flex p-4"},[t("label"),e._v(" "),e._t("inline-buttons")],2)]):e._e()],2)],1)}),[],!1,null,"4514f2be",null);t.default=component.exports;installComponents(component,{MultiSelect:o(426).default})},423:function(e,t,o){"use strict";o(419)},424:function(e,t,o){var l=o(92)((function(i){return i[1]}));l.push([e.i,".notice[data-v-07b98bc0]{background:var(--grey-100)!important;color:var(--grey-500)!important}.green[data-v-07b98bc0]{border-left:4px solid var(--success)!important}.blue[data-v-07b98bc0]{border-left:4px solid var(--primary)!important}.yellow[data-v-07b98bc0]{border-left:4px solid var(--yellow)!important}.red[data-v-07b98bc0]{border-left:4px solid var(--danger)!important}",""]),l.locals={},e.exports=l},425:function(e,t,o){"use strict";o.r(t);var l={name:"tableFooter",props:{showIncludeDeleted:{type:Boolean,default:function(){return!0}},showExplanation:{type:Boolean,default:function(){return!1}},deletedLabel:{type:String,default:function(){return"Include deleted/inactive"}}},data:function(){return{itemsPerPage:"5",includeDeleted:!1,variant:"checkbox",showOnTop:!1}},computed:{}},n=(o(435),o(58)),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{},[e.showIncludeDeleted&&e.showOnTop?t("b-row",[t("b-col",{staticClass:"text-right"},[t("b-form-group",["switch"===e.variant?t("label",[e._v("Include deleted/inactive?")]):e._e(),e._v(" "),"switch"===e.variant?t("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:e.includeDeleted,callback:function(t){e.includeDeleted=t},expression:"includeDeleted"}}):e._e(),e._v(" "),"checkbox"===e.variant?t("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[e._v("\n          "+e._s(e.deletedLabel)+"\n        ")]):e._e()],1)],1)],1):e._e(),e._v(" "),t("b-row",[t("b-col",{attrs:{cols:"6"}},[e._v("\n      Displaying 1 to 10 of 276 items | No. of entries per page:\n      "),t("b-form-select",{staticStyle:{display:"inline",width:"54px"},attrs:{option:["5","10","50"]},model:{value:e.itemsPerPage,callback:function(t){e.itemsPerPage=t},expression:"itemsPerPage"}})],1),e._v(" "),t("b-col",{staticClass:"text-right"},[t("ul",{staticClass:"pagination b-pagination pagination-sm mb-1",attrs:{role:"menubar","aria-disabled":"false","aria-label":"Pagination"}},[t("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[t("b-icon",{attrs:{icon:"chevron-double-left"}})],1)]),e._v(" "),t("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[t("b-icon",{attrs:{icon:"chevron-left"}})],1)]),e._v(" "),t("li",{staticClass:"page-item",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 1","aria-checked":"true","aria-posinset":"1","aria-setsize":"13",tabindex:"0","data-dashlane-label":"true","data-dashlane-rid":"aa1d1d8f43d8b849","data-form-type":""}},[e._v("\n            1\n          ")])]),e._v(" "),t("li",{staticClass:"page-item active",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 2","aria-checked":"false","aria-posinset":"2","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"949d2576269765d3","data-form-type":""}},[e._v("\n            2\n          ")])]),e._v(" "),t("li",{staticClass:"page-item",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 3","aria-checked":"false","aria-posinset":"3","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"eb4b7f58b1f5a46c","data-form-type":""}},[e._v("\n            3\n          ")])]),e._v(" "),t("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 4","aria-checked":"false","aria-posinset":"4","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"8285634d78548067","data-form-type":""}},[e._v("\n            4\n          ")])]),e._v(" "),t("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[e._v("\n            5\n          ")])]),e._v(" "),t("li",{staticClass:"page-item bv-d-xs-down-none",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitemradio",type:"button","aria-controls":"historyForms","aria-label":"Go to page 5","aria-checked":"false","aria-posinset":"5","aria-setsize":"13",tabindex:"-1","data-dashlane-label":"true","data-dashlane-rid":"bf0d8bb4bbe2f23d","data-form-type":""}},[e._v("\n            ...\n          ")])]),e._v(" "),t("li",{staticClass:"page-item next-page",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{role:"menuitem",type:"button"}},[t("b-icon",{attrs:{icon:"chevron-right"}})],1)]),e._v(" "),t("li",{staticClass:"page-item last-page",attrs:{role:"presentation"}},[t("button",{staticClass:"page-link",attrs:{type:"button","aria-controls":"historyForms"}},[t("b-icon",{attrs:{icon:"chevron-double-right"}})],1)])])])],1),e._v(" "),e.showIncludeDeleted&&!e.showOnTop?t("b-row",{staticClass:"mt-2"},[t("b-col",{attrs:{cols:"3"}},[e.showExplanation?t("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.html",value:"<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>",expression:"\n          '<h5>Mockup notes</h5></li></li><ul><li>We only show current page number and up to three page numbers before and after it. <br> The three dots icon signals there are more page after/before it.</li><li>Clicking on the three dots will act as if they clicked on the last showing page number (in this demo it is page 5) (first showing if it was to the left of the numbers)</li></ul>'\n        ",modifiers:{hover:!0,html:!0}}],staticClass:"demoInfo",attrs:{title:"",variant:"link"}},[t("b-icon",{attrs:{icon:"info-circle"}}),e._v(" Table pagination explanation\n      ")],1):e._e()],1),e._v(" "),t("b-col",{staticClass:"text-right"},[t("b-form-group",["switch"===e.variant?t("label",[e._v(e._s(e.deletedLabel))]):e._e(),e._v(" "),"switch"===e.variant?t("b-form-radio-group",{attrs:{options:[{text:"Include",value:!0},{text:"Exclude",value:!1}],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:e.includeDeleted,callback:function(t){e.includeDeleted=t},expression:"includeDeleted"}}):e._e(),e._v(" "),"checkbox"===e.variant?t("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1}},[e._v("\n          "+e._s(e.deletedLabel)+"\n        ")]):e._e()],1)],1)],1):e._e()],1)}),[],!1,null,"72798235",null);t.default=component.exports},426:function(e,t,o){"use strict";o.r(t);var l={name:"multiSelect",props:{options:{type:Array,default:function(){return[]}}},methods:{}},n=o(58),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ms-container p-1"},[e._l(e.options,(function(option,o){return t("b-button",{key:o,attrs:{id:o,variant:"outline-dark"}},[e._v(e._s(option)+"  x")])})),e._v("  \n")],2)}),[],!1,null,"30d40a90",null);t.default=component.exports},428:function(e,t,o){var content=o(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(93).default)("51762d96",content,!0,{sourceMap:!1})},429:function(e,t,o){"use strict";o(428)},430:function(e,t,o){var l=o(92)((function(i){return i[1]}));l.push([e.i,".col[data-v-4514f2be]{flex-grow:0!important}.grow .col[data-v-4514f2be]{flex-grow:1!important}.input-group-text[data-v-4514f2be]{border-radius:0;font-size:.75rem}",""]),l.locals={},e.exports=l},431:function(e,t,o){var content=o(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(93).default)("2e15c730",content,!0,{sourceMap:!1})},435:function(e,t,o){"use strict";o(431)},436:function(e,t,o){var l=o(92)((function(i){return i[1]}));l.push([e.i,".pagination[data-v-72798235]{align-items:baseline;justify-content:flex-end}.pagination .page-link[data-v-72798235]{border:none;color:var(--primary_800);font-weight:400;height:44px;width:44px}.page-item.active .page-link[data-v-72798235]{background-color:#fff;border:1px solid var(--neutrals_300);color:var(--primary_900);z-index:3}.pagination-sm .page-link[data-v-72798235]{font-size:.875rem;line-height:1.5;padding:.25rem .5rem}",""]),l.locals={},e.exports=l},829:function(e,t,o){"use strict";o.r(t);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var l=o(3),n=o(421),r=o(418),c=o(107),d=o(425);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){Object(l.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={components:{FieldGroup:n.default,notice:r.default,tableFooter:d.default},name:"outstandingAllocationsModalContent",props:{contact:{type:Object,default:function(){return{typeFields:{type:{label:"Type",value:"Email Address",options:["Email Address","Work Telephone","Home Telephone","Mobile Telephone","Fax Number"],type:"lov"}}}}},mode:{type:String,default:function(){return"new"}}},data:function(){return{selectedEntity:null,modalArgs:{},blockType:"Please select",days:["Tuesday 13 June 2023","Wednesday 14 June 2023","Monday 19 June 2023","Tuesday 20 June 2023","Wednesday 21 June 2023","Thursday 22 June 2023","Friday 23 June 2023","Wednesday 28 June 2023","Thursday 29 June 2023","Monday 3 July 2023"],allocations:[0,0,0,50,0,0,0,25,0,0]}},computed:v({},Object(c.c)(["flow"])),methods:v({swapModalInParent:function(e){this.$emit("swapModal",e)}},Object(c.b)({toggleModalShow:"flow/toggleModalShow",openFlowModal:"flow/openFlowModal",setEntityListState:"flow/setEntityListState",toggleShowConfigAlert:"flow/toggleShowConfigAlert",setHomeScreenConfigItem:"flow/setHomeScreenConfigItem",toggleShowSecItems:"flow/toggleShowSecItems"}))},h=o(58),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("b-row",[t("b-col",[t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table b-table table-bordered"},[t("thead",[t("tr",[t("th",[e._v("Date")]),e._v(" "),t("th",[e._v("Current allocation")]),e._v(" "),t("th",{staticClass:"text-center",staticStyle:{"min-width":"80px"}},[e._v("Actions")])])]),e._v(" "),t("tbody",e._l(e.days,(function(o,l){return t("tr",{key:l,attrs:{id:l}},[t("td",[e._v(e._s(o))]),e._v(" "),t("td",[e._v(e._s(e.allocations[l])+"%")]),e._v(" "),t("td",{staticClass:"text-center"},[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{variant:"info"},expression:"{ variant: 'info' }",modifiers:{hover:!0}}],staticStyle:{"background-color":"#188a95 !important",color:"white !important",border:"none !important","border-radius":"5%"},attrs:{variant:"primary",size:"sm",title:"Will show the relevant effort allocation form (return to this list when the allocation form is saved or closed )"}},[e._v("\n                Add\n              ")])],1)])})),0)])])])],1),e._v(" "),t("b-row",{staticClass:"mt-2"},[t("b-col",[t("table-footer",{attrs:{showIncludeDeleted:!1}})],1)],1)],1)}),[],!1,null,"904b3226",null);t.default=component.exports}}]);