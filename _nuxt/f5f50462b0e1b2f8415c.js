(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{605:function(e,t,r){"use strict";r.r(t);r(35);var n=r(4),o=r(348),c=r(391),d=r(337),m=r(396),h=r(412),f=r(400),l=r(399),$=r(401),C=r(418),k=r(419),y=r(416),v=r(414),w=r(413),_=r(397),D={components:{ConfirmedCasesDetailsCard:m.a,TestedCasesDetailsCard:h.a,ConfirmedCasesNumberCard:f.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:$.a,InspectionPersonsNumberCard:C.a,TelephoneAdvisoryReportsNumberCard:k.a,ConsultationDeskReportsNumberCard:y.a,MetroCard:v.a,AgencyCard:w.a,HealthCenterCard:_.a},fetch:function(e){var t=e.store,r=e.app.$axios;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("GET_BODIK_AXIOS",r);case 2:case"end":return e.stop()}}),e)})))()},data:function(){var title,e;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),e=o.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),e=o.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),e=o.patients.date;break;case"number-of-confirmed-cases-by-municipalities":title=this.$t("陽性患者数（区市町村別）"),e=o.patientData.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),e=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),e=o.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),e=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),e=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),e=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),e=c.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),e=d.date;break;case"health-center":title=this.$t("コロナウイルス感染症についての相談窓口"),e=d.date}var data={title:title,updatedAt:e};return data},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},updatedAt:function(){return this.$store.state.lastUpdate}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("GET_BODIK_JSONP");case 2:case"end":return t.stop()}}),t)})))()},head:function(){var e="https://nagasaki.stopcovid19.jp",t=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(e,"/ogp/").concat(this.$route.params.card,".png?t=").concat(t):"".concat(e,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(t),n="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:e+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},O=r(5),component=Object(O.a)(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",["details-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?t("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-number-card"):"number-of-confirmed-cases-by-municipalities"==this.$route.params.card?t("confirmed-cases-by-municipalities-card"):"attributes-of-confirmed-cases"==this.$route.params.card?t("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?t("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?t("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?t("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?t("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?t("metro-card"):"agency"==this.$route.params.card?t("agency-card"):"health-center"==this.$route.params.card?t("health-center-card"):this._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);