(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{324:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("f4c3005e",content,!0,{sourceMap:!1})},325:function(t,e,r){var content=r(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e9512022",content,!0,{sourceMap:!1})},333:function(t){t.exports=JSON.parse('{"contacts":{"date":"","data":[]},"querents":{"date":"","data":[]},"patients":{"date":"","data":[]},"patients_summary":{"date":"","data":[]},"discharges_summary":{"date":"","data":[]},"inspections":{"date":"","data":[]},"inspections_summary":{"date":"","data":{},"labels":[]},"lastUpdate":"2020/04/07 12:40","main_summary":{"attr":"検査実施人数","value":0,"children":[{"attr":"陽性患者数","value":0,"children":[{"attr":"入院中","value":0,"children":[{"attr":"軽症・中等症","value":0},{"attr":"重症","value":0}]},{"attr":"退院","value":0},{"attr":"死亡","value":0}]}]}}')},383:function(t,e,r){var n,o,c;o=[e,t],void 0===(c="function"==typeof(n=function(t,e){"use strict";var r=5e3,n="callback";function o(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function c(t){try{delete window[t]}catch(e){window[t]=void 0}}function d(t){var script=document.getElementById(t);script&&document.getElementsByTagName("head")[0].removeChild(script)}e.exports=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=t,h=e.timeout||r,f=e.jsonpCallback||n,m=void 0;return new Promise((function(r,n){var v=e.jsonpCallbackFunction||o(),y=f+"_"+v;window[v]=function(t){r({ok:!0,json:function(){return Promise.resolve(t)}}),m&&clearTimeout(m),d(y),c(v)},l+=-1===l.indexOf("?")?"?":"&";var $=document.createElement("script");$.setAttribute("src",""+l+f+"="+v),e.charset&&$.setAttribute("charset",e.charset),$.id=y,document.getElementsByTagName("head")[0].appendChild($),m=setTimeout((function(){n(new Error("JSONP request to "+t+" timed out")),c(v),d(y),window[v]=function(){c(v)}}),h),$.onerror=function(){n(new Error("JSONP request to "+t+" failed")),c(v),d(y),m&&clearTimeout(m)}}))}})?n.apply(e,o):n)||(t.exports=c)},384:function(t,e,r){"use strict";var n=r(324),o=r.n(n);e.default=o.a},385:function(t,e,r){(e=r(14)(!1)).push([t.i,".note_2FWg4{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_2FWg4"},t.exports=e},386:function(t,e,r){"use strict";var n=r(325),o=r.n(n);e.default=o.a},387:function(t,e,r){(e=r(14)(!1)).push([t.i,".GraphDesc_2ov-E{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.DataViewDesc_BOyA_{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_2ov-E",DataViewDesc:"DataViewDesc_BOyA_"},t.exports=e},410:function(t,e,r){"use strict";r(76);var n=r(8),o=r.n(n),c=(r(31),r(3)),d=r(132),l=r(1),h=r(311),f=r(334),m=r(329),v=r(326),y={created:function(){this.canvas=!0},components:{DataView:h.a,DataSelector:f.a,DataViewBasicInfoPanel:m.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=Object(v.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:r,backgroundColor:e[n].fillColor,borderColor:e[n].strokeColor,borderWidth:1}}))}:{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:t.cumulative(r),backgroundColor:e[n].fillColor,borderColor:e[n].strokeColor,borderWidth:1}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(d.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(d.a)(t.items.map((function(e,r){return Object(c.a)({},r,t.displayData.datasets[r].data[i])})))))}))},options:function(){var t=this,e=this.unit,r=this.eachArraySum(this.chartData),data=this.chartData,n=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(n),c={tooltips:{displayColors:!1,callbacks:{label:function(c){var d,l;return"transition"===t.dataKind?(d=r[c.index].toLocaleString(),l=data[c.datasetIndex][c.index].toLocaleString()):(d=o[c.index].toLocaleString(),l=n[c.datasetIndex][c.index].toLocaleString()),"".concat(t.dataLabels[c.datasetIndex],": ").concat(l," ").concat(e," (").concat(t.$t("合計"),": ").concat(d," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(c,{animation:{duration:0}}),c}},methods:{cumulative:function(t){var e=[],r=0;return t.forEach((function(t){r+=t,e.push(r)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},$=l.a.extend(y),x=r(386),_=r(5),k=r(39),C=r.n(k),D=r(632);var component=Object(_.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[r("ul",{class:t.$style.GraphDesc},[r("li",[t._v("\n        "+t._s(t.$t("（注）医療機関が保険適用で行った検査は含まれていない"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり"))+"\n      ")]),t._v(" "),r("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),r("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),r("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),r("bar",{ref:"barChart",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}}),t._v(" "),r("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),r("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null),w=component.exports;C()(component,{VDataTable:D.a});var T={components:{TimeStackedBarChart:w},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},data:function(){var t=this.$store.state.bodik1,e=t.map((function(t){return o()(t.年月日).format("MM/DD")})),data={inspectionsGraph:[t.map((function(t){return t.件数?Number(t.件数):0})),t.map((function(t){return t.件数-t.件数}))],inspectionsItems:[this.$t("県内発生（※1）"),this.$t("")],inspectionsLabels:e,inspectionsDataLabels:[this.$t("県内"),this.$t("その他.graph")]};return data}}},S=r(629),j=Object(_.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.data.inspectionsGraph,date:t.lastUpdate,items:t.data.inspectionsItems,labels:t.data.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.data.inspectionsDataLabels},scopedSlots:t._u(["ja-basic"!==t.$i18n.locale?{key:"additionalNotes",fn:function(){return[t._v("\n      "+t._s(t.$t("※1: 疑い例・接触者調査"))+"\n    ")]},proxy:!0}:null],null,!0)})],1)}),[],!1,null,null,null);e.a=j.exports;C()(j,{VCol:S.a})},411:function(t,e,r){"use strict";r(50),r(11),r(7);var n=r(375),o={components:{DataTable:r(414).a},computed:{data:function(){var t=this.$store.state.lastUpdate,e=this.$store.state.attributes.map((function(t){return t})),r=Object(n.a)(e),o={lText:e.length.toLocaleString(),sText:this.$t("{date}の累計",{date:t}),unit:this.$t("人")},c=!0,d=!1,l=void 0;try{for(var h,f=r.headers[Symbol.iterator]();!(c=(h=f.next()).done);c=!0){var header=h.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){d=!0,l=t}finally{try{c||null==f.return||f.return()}finally{if(d)throw l}}var m=!0,v=!1,y=void 0;try{for(var $,x=r.datasets[Symbol.iterator]();!(m=($=x.next()).done);m=!0){var _=$.value;if(_["居住地"]=this.getTranslatedWording(_["居住地"]),_["性別"]=this.getTranslatedWording(_["性別"]),_["退院"]=this.getTranslatedWording(_["退院"]),"10歳未満"===_["年代"])_["年代"]=this.$t("10歳未満");else if("不明"===_["年代"])_["年代"]=this.$t("不明");else{var k=_["年代"].substring(0,2);_["年代"]=this.$t("{age}代",{age:k})}}}catch(t){v=!0,y=t}finally{try{m||null==x.return||x.return()}finally{if(v)throw y}}var data={attributes:e,patientsTable:r,sumInfoOfPatients:o};return data}},methods:{getTranslatedWording:function(t){return"-"===t||"‐"===t||null==t?t:this.$t(t)}}},c=r(5),d=r(39),l=r.n(d),h=r(629),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.data.patientsTable,"chart-option":{},date:this.data.attributes,info:this.data.sumInfoOfPatients,url:"https://data.bodik.jp/dataset/420000_covidpatients/resource/de7ce61e-1849-47a1-b758-bca3f809cdf8",source:this.$t("オープンデータを入手")}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:h.a})},412:function(t,e,r){"use strict";r(59);var n=r(322),o={components:{TimeBarChart:r(327).a},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},data:function(){var t=this.$store.state.lastUpdate2,e=this.$store.state.groups,r=this.$store.state.kensaDates.map((function(t){return t}));null==r.find((function(element){return element===t}))&&r.push(t);var o=r.map((function(t){return{"日付":t,"小計":e[t]?e[t].length:0}})),c=Object(n.a)(o),data={lastUpdate:t,patientsGraph:c};return data}}},c=r(5),d=r(39),l=r.n(d),h=r(629),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.data.patientsGraph,date:this.lastUpdate,unit:this.$t("人"),url:"https://data.bodik.jp/dataset/420000_covidpatients/resource/de7ce61e-1849-47a1-b758-bca3f809cdf8"}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:h.a})},413:function(t,e,r){"use strict";var data=r(333),n=r(365),o=r(311),c=r(415),d={components:{DataView:o.a,ConfirmedCasesDetailsTable:c.a},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},confirmedCases:function(){var t=this.$store.state.bodik2,e=this.$store.state.allCount,r=t.length,o=this.$store.state.bodik2.filter((function(t){return"1"===t.退院済フラグ})).length,c=this.$store.state.bodik2.filter((function(t){return"1"===t.死亡フラグ})).length,summary=data.main_summary;summary.value=e,summary.children[0].value=r,summary.children[0].children[0].value=r-o,summary.children[0].children[0].children[0].value=0,summary.children[0].children[0].children[1].value=0,summary.children[0].children[1].value=o,summary.children[0].children[2].value=c;var d=Object(n.a)(summary);return d}},methods:{}},l=r(384),h=r(5),f=r(39),m=r.n(f),v=r(629);var component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.lastUpdate},scopedSlots:t._u([{key:"button",fn:function(){return[r("p",{class:t.$style.note},[t._v("\n        "+t._s(t.$t("（注）チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n      ")])]},proxy:!0}])},[t._v(" "),r("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1)],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports;m()(component,{VCol:v.a})},429:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n={};r.r(n),r.d(n,"fetch1",(function(){return l})),r.d(n,"fetch2",(function(){return h}));r(36),r(40);var o=r(383),c=r.n(o),d="https://data.bodik.jp/api/action/datastore_search?resource_id=",l=function(data){return f("71e83845-2648-4cb3-a69d-9f5f5412feb2")},h=function(data){return f("de7ce61e-1849-47a1-b758-bca3f809cdf8")};function f(t){var e=t.includes(d)?t:d+t;return c()(e).then((function(t){return t.json()})).then((function(t){return t.result})).catch((function(t){return{err:t}}))}var m=n},643:function(t,e,r){"use strict";r.r(e);r(34);var n=r(4),o=r(429),c=r(333),d=r(437),l=r(380),h=r(413),f=r(440),m=r(412),v=r(411),y=r(410),$=r(445),x=r(444),_=r(443),k=r(439),C=r(441),D="https://data.bodik.jp/api/action/datastore_search?resource_id=",w={components:{ConfirmedCasesDetailsCard:h.a,TestedCasesDetailsCard:f.a,ConfirmedCasesNumberCard:m.a,ConfirmedCasesAttributesCard:v.a,TestedNumberCard:y.a,InspectionPersonsNumberCard:$.a,TelephoneAdvisoryReportsNumberCard:x.a,ConsultationDeskReportsNumberCard:_.a,MetroCard:k.a,AgencyCard:C.a},fetch:function(t){var e=t.store,r=t.app.$axios;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get(D+"71e83845-2648-4cb3-a69d-9f5f5412feb2");case 3:return n=t.sent,e.commit("setBodicData1",n.data.result.records),t.next=7,r.get(D+"de7ce61e-1849-47a1-b758-bca3f809cdf8");case 7:o=t.sent,e.commit("setBodicData2",o.data.result.records),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=c.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=c.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=c.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=c.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=c.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=c.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=c.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=c.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=d.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=l.date}var data={title:title,updatedAt:t};return data},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetch1();case 2:return r=e.sent,t.$store.commit("setBodicData1",r.records),e.next=6,o.a.fetch2();case 6:n=e.sent,t.$store.commit("setBodicData2",n.records);case 8:case"end":return e.stop()}}),e)})))()},head:function(){var t="https://nagasaki.stopcovid19.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},T=r(5),component=Object(T.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);