(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{826:function(e,t,o){"use strict";o.r(t);o(21),o(20),o(22),o(17),o(23);var n=o(3),r=(o(15),o(12),o(201),o(107));function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d={components:{},name:"secItemModalContent",props:{mode:{type:String,default:function(){return""}}},data:function(){return{currentType:"",allowed:["Group A","Group D","Group 99"],blocked:["Group X","Group Y","Group T"],enabled:"Enable"}},computed:c(c({},Object(r.c)(["flow"])),{},{searchesList:function(){var e=this;return"All Types"===this.currentType?this.savedSearches:this.savedSearches.filter((function(t){return t.type===e.currentType}))}}),mounted:function(){},methods:c(c({},Object(r.b)({openFlowModal:"flow/openFlowModal",closeModal:"flow/closeModal",changeModalContent:"flow/changeModalContent"})),{},{moveItemToAllowed:function(e){var t=this.blocked.indexOf(e);this.blocked.splice(t,1),this.allowed.push(e)},moveItemToBlocked:function(e){var t=this.allowed.indexOf(e);this.allowed.splice(t,1),this.blocked.push(e)}})},f=o(58),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("h6",{staticClass:"mb-3"},[e._v("Action name: "+e._s(e.flow.mode)+"\n")]),e._v(" "),t("b-row",{},[t("b-col",[t("b-form-group",{attrs:{label:""}},[t("b-form-radio-group",{attrs:{options:["Enable","Disable"],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}})],1)],1)],1),e._v(" "),"Enable"!==e.enabled?t("b-row",[t("b-col",[e._v("\n        This is currently not protected - all system users can access it without limitations.\n      ")])],1):e._e(),e._v(" "),"Enable"===e.enabled?t("b-row",{},[t("b-col",{attrs:{cols:"6"}},[t("h6",{staticClass:"fw-bold"},[e._v("Blocked groups")]),e._v(" "),t("div",[e._v("Click on a group to move it to the allowed access")]),e._v(" "),t("div",{staticClass:"rollable-container border rounded-1 w-100 p-2 cursor-pointer",attrs:{id:"available-container"}},[t("ul",{staticClass:"p-0"},e._l(e.blocked,(function(o,n){return t("li",{key:n,staticClass:"d-flex justify-content-between align-items-center p-2 shadow-hover",attrs:{id:n},on:{click:function(t){return e.moveItemToAllowed(o)}}},[t("span",[e._v(e._s(o))]),e._v(" "),t("b-icon",{staticStyle:{"font-weight":"bold","margin-right":"10px"},attrs:{icon:"arrow-right"}})],1)})),0)])]),e._v(" "),t("b-col",{attrs:{cols:"6"}},[t("h6",{staticClass:"fw-bold"},[e._v("Allowed groups")]),e._v(" "),t("div",[e._v("Click on a group to move it to blocked")]),e._v(" "),t("div",{staticClass:"rollable-container border rounded-1 w-100 p-2 cursor-pointer",attrs:{id:"included-container"}},[t("ul",{staticClass:"p-0"},e._l(e.allowed,(function(o,n){return t("li",{key:n,staticClass:"d-flex align-items-center p-2 shadow-hover",attrs:{id:n},on:{click:function(t){return e.moveItemToBlocked(o)}}},[t("b-icon",{staticStyle:{"font-weight":"bold","margin-right":"10px"},attrs:{icon:"x"}}),e._v(" "),t("span",[e._v(e._s(o))])],1)})),0)])])],1):e._e()],1)}),[],!1,null,"1f96fcfc",null);t.default=component.exports}}]);