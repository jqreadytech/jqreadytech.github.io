(window.webpackJsonp=window.webpackJsonp||[]).push([[214,137],{444:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=o(107);function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var d={name:"secItemIcon",props:{message:{type:String,default:""},borderClass:{type:String,default:"yellow"},mode:{type:String,default:"actionName"}},data:function(){return{}},computed:l({},Object(r.c)(["flow"])),methods:l({},Object(r.b)({openFlowModal:"flow/openFlowModal"}))},m=o(58),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"d-inline",staticStyle:{"font-size":"1.25rem",cursor:"pointer"},attrs:{target:"#"}},[t.flow.showSecItems?e("b-icon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-warning",attrs:{icon:"lock",title:"Click to manage access to this secure item"},on:{click:function(e){return t.openFlowModal({modalContent:"secItem",mode:t.mode})}}}):t._e()],1)}),[],!1,null,"707cb131",null);e.default=component.exports},461:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=(o(242),o(52),o(427)),c=o(107),l=o(425),d=o(140),m=o(444);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={name:"tasksWidget",components:{SortIcon:r.default,tableFooter:l.default,BFormDatepicker:d.a,SecItemIcon:m.default},props:{inRelatedFlow:{type:Boolean,default:function(){return!1}},doneSearch:{type:Boolean,default:function(){return!1}},groupByCase:{type:Boolean,default:function(){return!1}},numOfTasks:{type:Number,default:function(){return 10}},cameFromMatterPending:{type:Boolean,default:function(){return!1}}},data:function(){return{hearingPeriod:"Weekly",joh:"Mitton, Bernie",includeOptions:["Overdue","Due today","Due in future","Completed","Cancelled","Key tasks"],includeSelected:["Overdue"],tasks:[{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflowA ",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 1",color:"danger"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 2",color:"danger"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"danger"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"success"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"success"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"success"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"success"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"blue"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"blue"},{case:"MCGIRRSW-16023_TIM (matterName 1)",activity:"test-workflow1",assignedTo:"Berniew Mitton",due:"01-06-2023",status:"status 3",color:"blue"}]}},computed:h(h({},Object(c.c)(["flow"])),{},{tasksToShow:function(){return this.tasks.slice(0,this.flow.homeScreenConfig.numOfTasks)}}),methods:h(h({},Object(c.b)({openFlowModal:"flow/openFlowModal",setCameFromPage:"flow/setCameFromPage"})),{},{goToActivityDetail:function(){this.cameFromMatterPending?this.setCameFromPage("pendingActivities"):this.setCameFromPage("home"),this.$router.push("/homeActivity")}})},y=o(58),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",[t.cameFromMatterPending?t._e():e("b-form-group",{staticClass:"width-st d-inline mr-2 mb-2",attrs:{label:"Filter by activity"}},[e("b-form-select",{attrs:{options:["Please select","Activity 1","Activity 2"]}})],1),t._v(" "),t.cameFromMatterPending?t._e():e("sec-item-icon",{staticClass:"d-inline mr-2",attrs:{mode:"HOME_FILTER_ACTIVITY.LEVEL_1"}}),t._v(" "),t.cameFromMatterPending?t._e():e("b-form-group",{staticClass:"width-st d-inline mr-2 mb-2",attrs:{label:"Filter by user"}},[e("b-form-select",{staticClass:"d-inline",attrs:{options:["Please select","All Users","user1","User2"]}})],1),t._v(" "),e("sec-item-icon",{staticClass:"d-inline mr-2",attrs:{mode:"HOME_USER_WK_UNIT.LEVEL_1"}}),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 mb-2",attrs:{label:"Include"}},[e("b-form-checkbox-group",{attrs:{options:t.includeOptions},model:{value:t.includeSelected,callback:function(e){t.includeSelected=e},expression:"includeSelected"}})],1),t._v(" "),t.cameFromMatterPending?e("b-button",{staticClass:"d-inline float-right mt-4 ml-2",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(e){return t.openFlowModal({modalContent:"activityPopup"})}}},[t._v("Create an activity")]):t._e(),t._v(" "),e("b-form-group",{staticClass:"width-st mb-2 d-inline mt-4 float-right",attrs:{label:""}},[e("b-form-input",{attrs:{placeholder:"Search"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"table-responsive"},[t.groupByCase?t._e():e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Click to select or de-select all",expression:"'Click to select or de-select all'",modifiers:{hover:!0,top:!0}}],staticClass:"text-center",staticStyle:{width:"70px"}},[e("b-form-checkbox")],1),t._v(" "),t.cameFromMatterPending?t._e():e("th",{staticClass:"text-center",staticStyle:{width:"70px"}},[t._v("Cart")]),t._v(" "),t.cameFromMatterPending?t._e():e("th",[t._v("Case")]),t._v(" "),e("th",[t._v("Activity "),e("sec-item-icon",{attrs:{mode:"EditAlertAction.save"}})],1),t._v(" "),e("th",[t._v("Assigned to")]),t._v(" "),e("th",[t._v("Due")]),t._v(" "),e("th",[t._v("Status")])])]),t._v(" "),e("tbody",t._l(t.tasksToShow,(function(o,n){return e("tr",{key:n,class:"text-"+o.color,attrs:{id:n}},[e("td",{staticClass:"text-center",staticStyle:{width:"90px"}},[e("b-form-checkbox")],1),t._v(" "),t.cameFromMatterPending?t._e():e("td",[e("b-button",{attrs:{variant:"link",size:"sm"}},[e("b-icon",{attrs:{icon:"cart"}})],1)],1),t._v(" "),t.cameFromMatterPending?t._e():e("td",[e("a",{class:"btn  pt-0 btn-link btn-sm text-"+o.color,attrs:{href:"#"}},[t._v(t._s(o.case)+" ")])]),t._v(" "),e("td",[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],class:"d-block pt-0 text-"+o.color,attrs:{size:"sm",variant:"link",title:"Click to open the activity"},on:{click:t.goToActivityDetail}},[e("span",{},[t._v(t._s(o.activity))])])],1),t._v(" "),e("td",[t._v(t._s(o.assignedTo))]),t._v(" "),e("td",[t._v(t._s(o.due))]),t._v(" "),e("td",[t._v(t._s(o.status))])])})),0)]),t._v(" "),t.groupByCase?e("table",{staticClass:"table b-table table-bordered"},[e("thead",[e("tr",[e("th",[t._v("Task title")]),t._v(" "),e("th",[t._v("Due date")]),t._v(" "),e("th",[t._v("Assigned to")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Reason due")]),t._v(" "),e("th",[t._v("Task Category")]),t._v(" "),e("th",{staticClass:"text-center",staticStyle:{width:"90px"}},[e("b-form-checkbox")],1)])]),t._v(" "),e("tbody",[e("tr",[e("td",{attrs:{colspan:"7"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0",attrs:{size:"sm",variant:"link",title:"Click to open the case details screen"}},[e("span",{staticStyle:{"font-size":"1rem"}},[e("span",{staticClass:"fw-bold"},[t._v("2019PR00054")]),t._v("\n                  (Matter ID: 447099876 Operation name), Corporations, C3, Pre Brief (1539 days), received on 13/03/2019,\n                  Active File, Overdue Tasks (0)\n                  "),e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])],1)]),t._v(" "),e("tr",[e("td",{staticClass:"pl-5"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0",attrs:{size:"sm",variant:"link",title:"Click to open the activity"}},[e("span",{},[t._v("47. Add Decision Task for Brief Assessment"),e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])],1),t._v(" "),e("td",[t._v("03-06-2020")]),t._v(" "),e("td",[t._v("Mitton, Bernie")]),t._v(" "),e("td",[t._v("In Progress")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{width:"90px"}},[e("b-form-checkbox")],1)]),t._v(" "),e("tr",[e("td",{staticClass:"pl-5"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0",attrs:{size:"sm",variant:"link",title:"Click to open the activity"}},[e("span",{},[t._v("47. Add Decision Task for Brief Assessment"),e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])],1),t._v(" "),e("td",[t._v("03-06-2020")]),t._v(" "),e("td",[t._v("Mitton, Bernie")]),t._v(" "),e("td",[t._v("In Progress")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{width:"90px"}},[e("b-form-checkbox")],1)]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"7"}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0",attrs:{size:"sm",variant:"link",title:"Click to open the case details screen"}},[e("span",{staticStyle:{"font-size":"1rem"}},[e("span",{staticClass:"fw-bold"},[t._v("2020PR00012")]),t._v("\n                  (Matter ID: 447099876 Operation name), Corporations, C3, Pre Brief (1539 days), received on 13/03/2019,\n                  Active File, Overdue Tasks (0)\n                  "),e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])],1)]),t._v(" "),e("tr",[e("td",{staticClass:"pl-5"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0",attrs:{size:"sm",variant:"link",title:"Click to open the activity"}},[e("span",{},[t._v("47. Add Decision Task for Brief Assessment\n                  "),e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])],1),t._v(" "),e("td",[t._v("03-06-2020")]),t._v(" "),e("td",[t._v("Mitton, Bernie")]),t._v(" "),e("td",[t._v("In Progress")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",{staticClass:"text-center",staticStyle:{width:"90px"}},[e("b-form-checkbox")],1)])])]):t._e()]),t._v(" "),e("table-footer",{attrs:{showIncludeDeleted:!1}}),t._v(" "),e("b-row",[e("b-col",{staticClass:"mt-4"},[e("div",{staticClass:"float-right"},[e("b-form-group",{staticClass:"width-st d-inline mr-2",attrs:{label:"Change status of selected"}},[e("b-form-select",{attrs:{options:["Please select","Status 1","Status 2"]}})],1),t._v(" "),e("sec-item-icon",{staticClass:"mr-2",attrs:{mode:"ACTIVITY.assignTo"}}),t._v(" "),e("b-form-group",{staticClass:"width-st d-inline mr-2",attrs:{label:"Assign selected to"}},[e("b-form-select",{attrs:{options:["Please select","User 1","User 2"]}})],1),t._v(" "),e("b-form-group",{staticClass:"width-st d-inline mr-2",attrs:{label:"Set due date of selected"}},[e("b-form-datepicker")],1),t._v(" "),e("sec-item-icon",{staticClass:"mr-2",attrs:{mode:"???"}}),t._v(" "),e("b-button",{staticClass:"d-inline",staticStyle:{"margin-top":"-6px"},attrs:{size:"sm",variant:"primary"}},[t._v("Apply")])],1)])],1)],1)}),[],!1,null,"71ebf69a",null);e.default=component.exports},462:function(t,e,o){var content=o(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("3f8504fa",content,!0,{sourceMap:!1})},463:function(t,e,o){var content=o(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("83f0072a",content,!0,{sourceMap:!1})},475:function(t,e,o){"use strict";o(462)},476:function(t,e,o){var n=o(92)((function(i){return i[1]}));n.push([t.i,".btn-link-primary .b-icon[data-v-06f23d5a]{margin-top:2px}",""]),n.locals={},t.exports=n},477:function(t,e,o){"use strict";o(463)},478:function(t,e,o){var n=o(92)((function(i){return i[1]}));n.push([t.i,".btn-link-primary .b-icon[data-v-25f2b3b8]{margin-top:2px}",""]),n.locals={},t.exports=n},482:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=(o(242),o(52),o(427)),c=o(107),l=o(425),d=o(140),m=o(444);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={name:"hsWidget",components:{SortIcon:r.default,tableFooter:l.default,BFormDatepicker:d.a,SecItemIcon:m.default},props:{inRelatedFlow:{type:Boolean,default:function(){return!1}},doneSearch:{type:Boolean,default:function(){return!1}},numOfHsCases:{type:Number,default:function(){return 10}}},data:function(){return{hearingPeriod:"Weekly",joh:"Mitton, Bernie",currentHsLink:"current",presetRanges:[{text:"Today",value:"Daily"},{text:"This week",value:"Weekly"}],presetWeeks:[{text:"Previous week",value:"Previous week"},{text:"Current week",value:"Current week"},{text:"Next week",value:"Next week"}],presetDays:[{text:"Previous day",value:"Previous day"},{text:"Current day",value:"Current day"},{text:"Next day",value:"Next day"}],cases:[{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)","MCGIRRSW-11113_TIM (matterName 2)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"telephone"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"person"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]},{datetime:"02-06-2023 13:15",duration:"2h 30m",location:"location1",member:"Bernie Mitton",matters:["MCGIRRSW-16023_TIM (matterName 1)"],matterType:"Matter type1",listingType:"Listing type 1",method:"method 1",status:"status 1",roh:"part-done",attendance:[{entity:"Johnston, Rebecca",icon:"camera-video"},{entity:"Smith, John",icon:"camera-video"}]}]}},computed:h(h({},Object(c.c)(["flow"])),{},{presetDates:function(){return"Weekly"===this.hearingPeriod?this.presetWeeks:this.presetDays},dateRange:function(){return"Weekly"===this.hearingPeriod?"Current week":"Current day"},prevButtonLabel:function(){return"Weekly"===this.hearingPeriod?"Previous week":"Previous day"},nextButtonLabel:function(){return"Weekly"===this.hearingPeriod?"Next week":"Next day"},currentButtonLabel:function(){return"Weekly"===this.hearingPeriod?"Current week":"Today"},currentRange:function(){return"Weekly"===this.hearingPeriod?"05-06-2023 to 12-06-2023":"Daily"===this.hearingPeriod?"Monday 05-06-2023":void 0},casesToShow:function(){return this.cases.slice(0,this.flow.homeScreenConfig.numOfHsCases)}}),methods:h({},Object(c.b)({openFlowModal:"flow/openFlowModal"}))},y=(o(475),o(58)),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",[e("b-form-group",{staticClass:"width-st d-inline mr-2 mb-2",attrs:{label:"JOH"}},[e("b-form-select",{staticClass:"d-inline",attrs:{options:["Mitton, Bernie","Turner, Tina"]},model:{value:t.joh,callback:function(e){t.joh=e},expression:"joh"}})],1),t._v(" "),e("sec-item-icon",{staticClass:"mr-2",attrs:{mode:"HOME_HEARING.LEVEL_1"}}),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 mb-2",attrs:{label:" "}},[e("b-form-radio-group",{attrs:{options:t.presetRanges,"button-variant":"outline-primary",size:"sm",buttons:""},on:{change:function(e){t.currentHsLink="current"}},model:{value:t.hearingPeriod,callback:function(e){t.hearingPeriod=e},expression:"hearingPeriod"}})],1),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 mb-2",attrs:{label:" "}},[e("span",[t._v("Currenlty showing: "+t._s(t.currentRange))])]),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 mb-2 float-right mt-3",attrs:{label:" "}},[e("b-button",{attrs:{variant:"prev"===t.currentHsLink?"link-secondary":"link-primary"},on:{click:function(e){t.currentHsLink="prev"}}},[e("b-icon",{attrs:{icon:"chevron-left"}}),t._v(t._s(t.prevButtonLabel))],1),t._v(" "),e("b-button",{attrs:{variant:"next"===t.currentHsLink?"link-secondary":"link-primary"},on:{click:function(e){t.currentHsLink="next"}}},[t._v(t._s(t.nextButtonLabel)),e("b-icon",{attrs:{icon:"chevron-right"}})],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[t._m(0),t._v(" "),e("tbody",t._l(t.casesToShow,(function(o,n){return e("tr",{key:n,attrs:{id:n}},[e("td",[t._v("\n            "+t._s(o.datetime)+"\n          ")]),t._v(" "),e("td",[t._v(t._s(o.duration))]),t._v(" "),e("td",[t._v(t._s(o.location))]),t._v(" "),e("td",[t._v(t._s(o.member))]),t._v(" "),e("td",{staticClass:"text-left"},t._l(o.matters,(function(link,o){return e("a",{key:o,staticClass:"btn pl-0 pt-0 btn-link btn-sm d-block",staticStyle:{width:"fit-content",height:"1.6rem"},attrs:{id:o,href:"#"}},[t._v(t._s(link))])})),0),t._v(" "),e("td",[t._v(t._s(o.matterType))]),t._v(" "),e("td",[t._v(t._s(o.listingType))]),t._v(" "),e("td",t._l(o.attendance,(function(u,o){return e("div",{key:o,attrs:{id:o}},[t._v("\n              "+t._s(u.entity)+" "),e("b-icon",{attrs:{icon:u.icon}})],1)})),0),t._v(" "),e("td",{},[e("b-button",{staticClass:"pt-0 pl-0",attrs:{variant:"link",size:"sm"}},[e("span",{},[t._v(t._s(o.roh))])])],1)])})),0)])]),t._v(" "),e("table-footer",{attrs:{showIncludeDeleted:!1}})],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Date/Time")]),t._v(" "),e("th",[t._v("Duration")]),t._v(" "),e("th",[t._v("Location")]),t._v(" "),e("th",[t._v("Member")]),t._v(" "),e("th",[t._v("Matter")]),t._v(" "),e("th",[t._v("Matter Type")]),t._v(" "),e("th",[t._v("Listing Type")]),t._v(" "),e("th",[t._v("Attendance")]),t._v(" "),e("th",{},[t._v("ROH")])])])}],!1,null,"06f23d5a",null);e.default=component.exports},483:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=o(427),c=o(107),l=o(425),d=o(140);function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var h={name:"hsWidget",components:{SortIcon:r.default,tableFooter:l.default,BFormDatepicker:d.a},props:{inRelatedFlow:{type:Boolean,default:function(){return!1}},doneSearch:{type:Boolean,default:function(){return!1}}},data:function(){return{period:"Month",joh:"My",counts:[{count:"12",value:"Cases Listed"},{count:"3",value:"Cases Awaiting Listing"},{count:"12",value:"Cases Closed"},{count:"12",value:"Cases Created"}]}},computed:v({},Object(c.c)(["flow"])),methods:v({},Object(c.b)({openFlowModal:"flow/openFlowModal"}))},f=(o(477),o(58)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",[e("b-form-group",{staticClass:"width-st d-inline mr-2 mb-2",attrs:{label:"Filter"}},[e("b-form-select",{attrs:{options:["My","State","National"]},model:{value:t.joh,callback:function(e){t.joh=e},expression:"joh"}})],1),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 mb-2",attrs:{label:"Period"}},[e("b-form-radio-group",{attrs:{options:["Month","Year"],"button-variant":"outline-primary",size:"sm",buttons:""},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}})],1),t._v(" "),e("b-form-group",{staticClass:"d-inline mr-2 ml-4 mb-2"},t._l(t.counts,(function(o,n){return e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],key:n,staticClass:"d-inline mr-4",attrs:{id:n,size:"sm",variant:"outline-primary",title:"Click to view these cases"}},[t._v(t._s(o.value)+" "),e("span",{staticClass:"badge badge-pill badge-warning p-2 mr-3"},[t._v(t._s(o.count))]),e("span",{},[e("b-icon",{staticClass:"ml-2",attrs:{size:"sm",icon:"box-arrow-up-right"}})],1)])})),1)],1)],1)],1)}),[],!1,null,"25f2b3b8",null);e.default=component.exports},484:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=o(427),c=o(107),l=o(425);function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var v={name:"outstandingListingsWidget",components:{SortIcon:r.default,tableFooter:l.default},props:{inRelatedFlow:{type:Boolean,default:function(){return!1}},doneSearch:{type:Boolean,default:function(){return!1}}},data:function(){return{hearingPeriod:"Weekly",joh:"Mitton, Bernie",includeOptions:["Overdue","Due today","Due in future","Completed","Cancelled","Key tasks"],includeSelected:["Overdue"]}},computed:m({},Object(c.c)(["flow"])),methods:m({},Object(c.b)({openFlowModal:"flow/openFlowModal"}))},h=o(58),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table b-table table-bordered"},[t._m(0),t._v(" "),e("tbody",[e("tr",[e("td",[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"d-block pt-0 pl-0",attrs:{size:"sm",variant:"link",title:"Click to open the case details screen"}},[e("span",{},[t._v("MCGIRRSW-16023_TIM")])])],1),t._v(" "),e("td",[t._v("case name 1")]),t._v(" "),e("td",[t._v("12-07-2023 11:30")]),t._v(" "),e("td",[t._v("In Progress")]),t._v(" "),e("td",[t._v("16-07-2023")]),t._v(" "),e("td",[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-block pt-0 pl-0",attrs:{size:"sm",variant:"link",title:"Click to open the activity"}},[e("span",{},[t._v("Decision reserved - record outcome")])])],1)])])])]),t._v(" "),e("table-footer",{attrs:{showIncludeDeleted:!1}})],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Matter Number")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Listing date")]),t._v(" "),e("th",[t._v("Matter status")]),t._v(" "),e("th",[t._v("Activity due date")]),t._v(" "),e("th",[t._v("Details")])])])}],!1,null,"787a8433",null);e.default=component.exports},519:function(t,e,o){var content=o(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("be715e68",content,!0,{sourceMap:!1})},554:function(t,e,o){"use strict";o(519)},555:function(t,e,o){var n=o(92)((function(i){return i[1]}));n.push([t.i,"a[data-v-3643c888]{color:var(--primary_700);font-weight:700}",""]),n.locals={},t.exports=n},559:function(t,e,o){"use strict";o.r(e);o(244);var n=o(421),r=o(418),c={components:{FieldGroup:n.default,notice:r.default},name:"newsAdminModalContent",props:{item:{type:Object,default:function(){return{title:"Title",thumb:"thumb",body:"body",link:"link",linkLabel:"Link Label"}}},mode:{type:String,default:function(){return"inAdmin"}}},data:function(){return{}},computed:{}},l=(o(554),o(58)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",[e("b-col",{staticStyle:{"max-width":"120px"},attrs:{cols:"1"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:t.item.thumb}})],1),t._v(" "),e("b-col",{attrs:{cols:"11"}},[e("h6",[t._v(t._s(t.item.title))]),t._v(" "),e("div",[t._v("\n        "+t._s(t.item.body)+"\n        ")]),t._v(" "),e("div",["inAdmin"!==t.mode?e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{variant:"info"},expression:"{ variant: 'info' }",modifiers:{hover:!0}}],staticClass:"d-inline float-right ml-2 mt-2",attrs:{variant:"outline-success",size:"sm",title:"Clicking on the button will dismiss this item, that will be recorded in the databse and the item will not show here any more"}},[e("span",{},[t._v("Acknowledge & Hide")])]):t._e(),t._v(" "),"inAdmin"!==t.mode&&t.item.link?e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{variant:"info"},expression:"{ variant: 'info' }",modifiers:{hover:!0}}],staticClass:"d-inline float-right mt-2",attrs:{variant:"outline-primary",size:"sm",title:"Clicking on the button will open the link url in a new browser tab"}},[e("span",{},[t._v("View")])]):t._e()],1)])],1)],1)}),[],!1,null,"3643c888",null);e.default=component.exports},963:function(t,e,o){"use strict";o.r(e);o(21),o(20),o(15),o(12),o(22),o(17),o(23);var n=o(3),r=o(452),c=o(446),l=o(107),d=o(421),m=o(425),v=o(507),h=o(482),f=o(483),y=o(461),_=o(448),C=o(484),w=o(444);function k(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function O(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?k(Object(o),!0).forEach((function(e){Object(n.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var M={layout:"readycase",components:{NewsItem:o(559).default,workLoadWidget:f.default,rcNotice:v.default,tasksWidget:y.default,outstandingListingsWidget:C.default,hsWidget:h.default,ModalControl:r.default,collapsibleSection:_.default,EntitiesListContent:c.default,FieldGroup:d.default,tableFooter:m.default,SecItemIcon:w.default},data:function(){return{currentViewType:"times",tabIndex:0,modalShow:!0,applySavedSearchLabel:"Apply a saved search",modalArgs:{},currentHsLink:"current",tdClass:"p-0",offset:29}},mounted:function(){},computed:O({},Object(l.c)(["flow"])),methods:O(O({},Object(l.b)({toggleModalShow:"flow/toggleModalShow",openFlowModal:"flow/openFlowModal",setEntityListState:"flow/setEntityListState",toggleShowConfigAlert:"flow/toggleShowConfigAlert",setHomeScreenConfigItem:"flow/setHomeScreenConfigItem",toggleShowSecItems:"flow/toggleShowSecItems"})),{},{day:function(t,e){return[[29,30,31,1,2,3,4],[5,6,7,8,9,10,11],[12,13,14,15,16,17,18],[19,20,21,22,23,24,25],[26,27,28,29,30,1,2]][t][e-1]}})},S=o(58),component=Object(S.a)(M,(function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"page-title-row mb-4 pl-2",staticStyle:{"justify-content":"space-between"}},[e("div",{staticClass:"pt-1"},[e("h1",{staticClass:"d-inline"},[t._v("Hearing Schedule Icons and Information")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("b-row",[e("b-col",[e("div",{staticStyle:{width:"200px",border:"red solid 1px"}},[t._v("\n          info here\n        ")])])],1),t._v(" "),e("modal-control",{attrs:{modalArgs:t.modalArgs}})],1)}),[function(){var t=this._self._c;return t("button",{staticClass:"btn p-0 ml-1",attrs:{title:"Cart this session"}},[t("i",{staticClass:"hs-cart-icon glyphicon glyphicon-shopping-cart"})])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{color:"black"}},[e("div",{staticClass:"hs-booking-shape",staticStyle:{"background-color":"deeppink"}}),t._v("10:00-11:00 (COMM) DG220823-HSICONTEST\n      Testing, Hsicon"),e("div",{staticClass:"booking-icon-group"},[e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"glyphicon glyphicon-facetime-video"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"null"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"glyphicon glyphicon-list-alt"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"glyphicon glyphicon-user"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"mandatory-icon glyphicon glyphicon-certificate"})]),t._v(" "),e("div",{staticClass:"hs-booking-youth-flag"},[e("b",[t._v(" Y")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{color:"black"}},[e("div",{staticClass:"hs-booking-shape",staticStyle:{"background-color":"deeppink"}}),t._v("10:00-11:00 (COMM) DG220823-HSICONTEST\n        Testing, Hsicon\n        "),e("div",{staticClass:"booking-icon-group"},[e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Video Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-facetime-video"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"null"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"On the Papers Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-list-alt"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"In Person Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-user"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Must Include: Smith, John"}},[e("i",{staticClass:"mandatory-icon glyphicon glyphicon-certificate"})]),t._v(" "),e("div",{staticClass:"hs-booking-youth-flag",attrs:{role:"button",title:"Youth flag"}},[e("b",[t._v(" Y")])]),t._v(" "),e("div",{staticClass:"hs-booking-youth-flag",attrs:{role:"button",title:"Reporting Restrictions"}},[e("b",[t._v("RR")])]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Custody status: status1 Statuary Target Date: 22-04-2024"}},[e("i",{staticClass:"glyphicon glyphicon-square-info"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Comments exist (OR show full text of comment which could be long...)"}},[e("i",{staticClass:"glyphicon glyphicon-chat-message"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Interpreter Required"}},[e("i",{staticClass:"glyphicon glyphicon-globe"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"booking-icon-group"},[e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Video Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-facetime-video"})]),t._v(" "),e("div",{staticClass:"booking-icon"},[e("i",{staticClass:"null"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"On the Papers Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-list-alt"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"In Person Hearing"}},[e("i",{staticClass:"glyphicon glyphicon-user"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Must Include: Smith, John"}},[e("i",{staticClass:"mandatory-icon glyphicon glyphicon-certificate"})]),t._v(" "),e("div",{staticClass:"hs-booking-youth-flag",attrs:{role:"button",title:"Youth flag"}},[e("b",[t._v(" Y")])]),t._v(" "),e("div",{staticClass:"hs-booking-youth-flag",attrs:{role:"button",title:"Reporting Restrictions"}},[e("b",[t._v("RR")])]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Custody status: status1 Statuary Target Date: 22-04-2024"}},[e("i",{staticClass:"glyphicon glyphicon-square-info"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Comments exist (OR show full text of comment which could be long...)"}},[e("i",{staticClass:"glyphicon glyphicon-text-background",staticStyle:{}})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Interpreter Required"}},[e("i",{staticClass:"glyphicon glyphicon-globe"})]),t._v(" "),e("div",{staticClass:"booking-icon",attrs:{role:"button",title:"Interpreter Required"}},[e("i",{staticClass:"glyphicon glyphicon-triangle-alert"})])])}],!1,null,"06faf737",null);e.default=component.exports}}]);