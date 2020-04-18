(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1fO27",card:"Cards_card__SJfAB",infected:"Cards_infected__32eyP",recovered:"Cards_recovered__13OOC",deaths:"Cards_deaths__kSZhi"}},207:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),m=a(84),p=a(83),f=a(225),v=a(229),h=a(226),b=a(227),E=a(32),y=a.n(E),g=a(33),x=a.n(g),C=a(13),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):r.a.createElement("div",{className:"tc dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("h1",null,"LOADING"))},O=a(31),j=a(45),S=a(34),k=a.n(S),D="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(80),B=a.n(A),J=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(O.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(j.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Showing Status for ".concat(u," Powered by LearningTools")}}}):null,v=m[0]?r.a.createElement(j.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:B.a.container},u?f:v)},V=a(230),G=a(228),U=a(81),R=a.n(U),L=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(V.a,{className:R.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},q=a(46),M=a.n(q),Q=(a(207),a(82)),T=a.n(Q),Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement("div",{className:M.a.container},r.a.createElement("img",{className:M.a.image,src:T.a,alt:"COVID-19"}),r.a.createElement(w,{data:t}),r.a.createElement(L,{handleCountryChange:this.handleCountryChange}),r.a.createElement(J,{data:t,country:a})))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__23rSf",image:"App_image__UqPRx"}},80:function(e,t,a){e.exports={container:"Charts_container__3P2mG"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3QJJG"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(208)}},[[87,1,2]]]);
//# sourceMappingURL=main.18f05dbf.chunk.js.map