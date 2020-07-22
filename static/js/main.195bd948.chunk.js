(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{100:function(e,t,a){e.exports={container:"App_container__23rSf",image:"App_image__UqPRx"}},103:function(e,t,a){e.exports=a(230)},229:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=a(7),i=a.n(l),u=a(12),s=a(41),d=a(42),m=a(46),p=a(44),f=a(5),h=a(255),v=a(250),b=a(251),g=a(252),E=a(47),y=a.n(E),x=a(32),C=a.n(x),_=a(9),O=a.n(_),w=a(254),j=a(31),k=(Object(f.a)({root:{background:"linear-gradient(to right, #4ac29a, #bdfff3)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",fontFamily:"monospace",margin:"auto"},label:{textTransform:"capitalize"}})(w.a),Object(f.a)({root:{background:"linear-gradient(to bottom, #eef2f3, #8e9eab);",color:"white",height:250,width:400,padding:"50 px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},label:{textTransform:"capitalize"}})(h.a),function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:O.a.container},r.a.createElement("div",{className:O.a.loading},r.a.createElement("h1",null,"Stay Home",r.a.createElement("div",{className:O.a.safe},r.a.createElement(j.a,{springConfig:{stiffness:180,damping:20},interval:2e3},r.a.createElement("h1",null," Safe"),r.a.createElement("h1",null," Healthy"))))),r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,xs:12,md:3,component:h.a,className:C()(O.a.card,O.a.infected)},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(v.a,{item:!0,xs:12,md:3,component:h.a,className:C()(O.a.card,O.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(v.a,{item:!0,xs:12,md:3,component:h.a,className:C()(O.a.card,O.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):r.a.createElement("div",{className:C()(O.a.loading)},r.a.createElement(j.a,null,r.a.createElement("h1",null,"...LOADING..."),r.a.createElement("h1",null,"...Please Wait...")))}),S=a(45),D=a(64),N=a(48),I=a.n(N),P="https://covid19.mathdro.id/api",A=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P,t&&(a="".concat(P,"/countries/").concat(t)),e.prev=2,e.next=5,I.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(P,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("".concat(P,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=a(97),R=a.n(G),T=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,l=e.country,s=Object(n.useState)({}),d=Object(S.a)(s,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(D.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Showing Status for ".concat(l," Powered by LearningTools")}}}):null,h=m[0]?r.a.createElement(D.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:R.a.container},l?f:h)},U=a(256),V=a(253),H=a(98),z=a.n(H),L=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(S.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(U.a,{className:z.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(99),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[{href:"#",name:"Home"},{href:"https://covid.learningtools.com.pk",name:"Pakistan's Data"},{href:"https://learningtools.com.pk",name:"About Me"}]},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(M.a,{items:this.state.items,color:"#8e9eab",itemTextColor:"#101010",titleColor:"#fff",title:"",hoverColor:"#000",logo:"https://learningtools.com.pk/covid/static/media/image.d7265326.png"})}}]),a}(n.Component),F=(O.a.loading,j.a,a(100)),Q=a.n(F),W=(a(229),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement("div",{className:Q.a.container},r.a.createElement(q,null),r.a.createElement("warning1",null),r.a.createElement(k,{data:t}),r.a.createElement(L,{handleCountryChange:this.handleCountryChange}),r.a.createElement(T,{data:t,country:a})))}}]),a}(r.a.Component));o.a.render(r.a.createElement(W,null),document.getElementById("root"))},9:function(e,t,a){e.exports={container:"Cards_container__1fO27",card:"Cards_card__SJfAB",infected:"Cards_infected__32eyP",recovered:"Cards_recovered__13OOC",deaths:"Cards_deaths__kSZhi",button:"Cards_button__30GCo",loading:"Cards_loading__3YbPI",safe:"Cards_safe__s18aJ"}},97:function(e,t,a){e.exports={container:"Charts_container__3P2mG"}},98:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3QJJG"}}},[[103,1,2]]]);
//# sourceMappingURL=main.195bd948.chunk.js.map