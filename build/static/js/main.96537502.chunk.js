(this.webpackJsonpnbafinal=this.webpackJsonpnbafinal||[]).push([[0],{23:function(e,t,n){e.exports={WelcomeContainer:"welcome_WelcomeContainer__1W8wo",WelcomeInfo:"welcome_WelcomeInfo__3fMBT",actionBtn:"welcome_actionBtn__3QNAh"}},48:function(e,t,n){},59:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a,c,s,i,l=n(0),r=n.n(l),o=n(14),p=n.n(o),h=(n(48),n(23)),d=n.n(h),m=n(9),g=n(1),j=function(){return Object(g.jsxs)("div",{className:d.a.WelcomeContainer,children:[Object(g.jsx)("div",{className:d.a.WelcomeInfo,children:Object(g.jsx)("p",{children:"Welcome  to"})}),Object(g.jsx)("div",{className:d.a.actionBtn,children:Object(g.jsx)(m.b,{to:"/Map",children:"Get Started"})})]})},b=n(2),x=n(10),u=n.n(x),O=n(17),f=n(12),v=n(13),y=n(22),w=n(21),k=(n(59),n(18)),I=n.n(k),S=n(19),C=n(20),N=C.a.nav(a||(a=Object(S.a)(["\n    position:fixed;\n    top:0;\n    left:0;\n    right: 0;\n    height: 70px;\n    background-color: #f9f9f9;\n    opacity: 0.7;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 36px;\n    letter-spacing: 16px;\n    z-index:3;\n"]))),P=C.a.a(c||(c=Object(S.a)(["\n    padding:0;\n    width:80px;\n    height: 80px;\n    margin-top: 4px;\n    max-height: 70px;\n    font-size: 0;\n    display: flex;\n    z-index:2;\n    img{\n        display: block;\n        width: 80%;\n    }\n    span{\n        align-items: center;\n        color: black;\n        font-size:30px;\n        letter-spacing: 1.42px;\n        line-height: 1.08;\n        padding:2px 0px;\n        white-space: nowrap;\n        position:relative;\n        margin-top: 18px;\n        font-family: 'Brush Script MT',cursive;\n    }\n    @media(max-width:768px){\n        span{\n            font-size: 15px;\n            vertical-align: center;\n        }\n    }\n"]))),z=(C.a.div(s||(s=Object(S.a)(["         //it's on right cuz justify content is space between\n    align-items:center;\n    display:flex;\n    flex-flow:row nowrap;           //flex direction & flex wrap\n    height: 100%;\n    justify-content: flex-end;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    margin-right: auto;\n    margin-left: 25px;\n\n    a{\n        display: flex;\n        align-items: center;\n        padding: 0 12px;\n        \n        img{\n            height: 20px;\n            min-width: 20px;\n            width:20px;\n            z-index:auto;\n        }\n        span{\n            color: rpg(249,249,249);\n            font-size:13px;\n            letter-spacing: 1.42px;\n            line-height: 1.08;\n            padding:2px 0px;\n            white-space: nowrap;\n            position:relative;\n            font-family: 'Adine Kirnberg',sans-serif;\n\n\n            &:before{\n                background-color: rgb(249, 249, 249);\n                border-radius: 0px 0px 4px 4px ;\n                bottom:-6px;\n                content: \"\";\n                height: 2px;\n                left: 0px;\n                opacity: 0;\n                position: absolute; //because it needs to put under the home icon\n                right: 0px;         //right under the home cuz the\n                transform-origin: left center;\n                transform: scaleX(0);//animation\n                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s; //the animation\n                visibility: hidden;\n                width: auto;\n            }\n        }\n\n        &:hover{\n            span:before{\n                transform:scaleX(1);\n                visibility: visible;\n                opacity: 1 !important;\n            }\n        }\n    }\n    /* @media(max-width:768px){\n        display: none;\n    } */\n"]))),C.a.a(i||(i=Object(S.a)(["\n    background-color:blac;\n    padding:8px 14px;\n    text-transform:uppercase;\n    letter-spacing: 1.5px;\n    border : 1px solid black;\n    border-radius:4px;\n    transition: all 0.2s ease 0s;\n\n    &:hover{\n        background-color: #A0A0A0;\n        color:#000;\n        border-color:transparent\n    }\n    @media(max-width:768px){\n        font-size: 12px;\n        padding:5px 5px;\n    } \n"])))),A=function(e){return Object(g.jsxs)(N,{children:[Object(g.jsx)(m.b,{exact:!0,to:"/",children:Object(g.jsx)(P,{children:Object(g.jsx)("span",{children:"NBA LEGEND"})})}),Object(g.jsx)(z,{children:Object(g.jsx)(m.b,{exact:!0,to:"/home",children:"Team"})}),Object(g.jsx)(z,{children:Object(g.jsx)(m.b,{exact:!0,to:"/Search",children:"Player"})})]})},M=[{path:"/Image/Atlanta-Hawks.png",cname:"\u8001\u9df9"},{path:"/Image/Boston-Celtics.png",cname:"\u8cfd\u723e\u63d0\u514b"},{path:"/Image/Brooklyn-Nets.png",cname:"\u7c43\u7db2"},{path:"/Image/Charlotte-Hornets.png",cname:"\u9ec3\u8702"},{path:"/Image/Chicago-Bulls.png",cname:"\u516c\u725b"},{path:"/Image/Cleceland-Cavaliers.png",cname:"\u9a0e\u58eb"},{path:"/Image/Dallas-Mavericks.png",cname:"\u5c0f\u725b"},{path:"/Image/Denver-Nuggets.png",cname:"\u91d1\u584a"},{path:"/Image/Detroit-Pistons.png",cname:"\u6d3b\u585e"},{path:"/Image/Golden-State-Warriors.png",cname:"\u52c7\u58eb"},{path:"/Image/Houston-Rockets.png",cname:"\u706b\u7bad"},{path:"/Image/Indiana-Pacers.png",cname:"\u6e9c\u99ac"},{path:"/Image/Los-Angeles-Clippers.png",cname:"\u5feb\u8247"},{path:"/Image/Los-Angeles-Lakers.png",cname:"\u6e56\u4eba"},{path:"/Image/Memphis-Grizzlies.png",cname:"\u7070\u718a"},{path:"/Image/Miami-Heat.png",cname:"\u71b1\u706b"},{path:"/Image/Milwaukee-Bucks.png",cname:"\u516c\u9e7f"},{path:"/Image/Minnesota-Timberwolves.png",cname:"\u7070\u72fc"},{path:"/Image/New-Orleans-Pelicans.png",cname:"\u9d5c\u9d98"},{path:"/Image/New-York-Knicks.png",cname:"\u5c3c\u514b"},{path:"/Image/Oklahoma-City-Thunder.png",cname:"\u96f7\u9706"},{path:"/Image/Orlando-Magic.png",cname:"\u9b54\u8853"},{path:"/Image/Philadelphia-76ers.png",cname:"\u4e03\u516d\u4eba"},{path:"/Image/Portland-Trail-Blazers.png",cname:"\u62d3\u8352\u8005"},{path:"/Image/Phoenix-Suns.png",cname:"\u592a\u967d"},{path:"/Image/Sacramento-Kings.png",cname:"\u570b\u738b"},{path:"/Image/San-Antonio-Spurs.png",cname:"\u99ac\u523a"},{path:"/Image/Toronto-Raptors.png",cname:"\u66b4\u9f8d"},{path:"/Image/Utah-Jazz.png",cname:"\u7235\u58eb"},{path:"/Image/Washington-Wizards.png",cname:"\u5deb\u5e2b"}],B=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={cname:"",nba:{}},e.handleAdd=function(){var t=Object(O.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({cname:n.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.cname);var n=new FormData;n.append("cname",e.state.cname);I.a.post("".concat("https://cors-anywhere.herokuapp.com/").concat("https://highspeedrailsofun.herokuapp.com/nbaplayer.php"),n).then((function(t){console.log(t.data),e.setState({nba:t.data}),console.log(e.state.nba.court)})).catch((function(e){return console.log(e)}))},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)("div",{className:"Team",children:Object(g.jsxs)("select",{className:"select1",onChange:this.handleAdd,children:[Object(g.jsx)("option",{children:"Choose Your Team"}),M.map((function(e){return Object(g.jsx)("option",{value:e.cname,children:e.cname})}))]})}),Object(g.jsx)("button",{onClick:this.handleSubmit,id:"submit",children:"save"}),Object(g.jsx)(m.b,{to:{pathname:"/Detail/"+this.state.cname,aboutProps:{result:this.state.nba,team:this.state.cname}},children:Object(g.jsx)("p",{className:"HomeNext",children:"Next Page"})})]})}}]),n}(r.a.Component);n(78);var T=function(){var e=Object(b.f)(),t=e.aboutProps.result.court,n=e.aboutProps.team,a=[];a=e.aboutProps.result.legend,console.log(t),console.log(n),console.log(a);for(var c=[],s=0;s<a.length;s++)c[s]=s;return console.log(c),Object(g.jsx)("div",{className:"detailContainer",style:{backgroundImage:'url("'.concat(t,'")'),backgroundRepeat:"no-repeat"},children:Object(g.jsx)("div",{className:"Content",children:Object(g.jsx)("div",{className:"list",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"player"}),Object(g.jsx)("th",{children:"position"}),Object(g.jsx)("th",{children:"jersey"}),Object(g.jsx)("th",{children:"point"}),Object(g.jsx)("th",{children:"assist"}),Object(g.jsx)("th",{children:"rebound"})]})}),Object(g.jsx)("tbody",{children:a.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.player}),Object(g.jsx)("td",{children:e.position}),Object(g.jsx)("td",{children:e.jersey}),Object(g.jsx)("td",{children:e.point}),Object(g.jsx)("td",{children:e.assist}),Object(g.jsx)("td",{children:e.rebound})]})}))})]})})})})},D=(n(79),function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).getPlayerId=function(){I.a.get("https://www.balldontlie.io/api/v1/players?search=".concat(a.state.playerName)).then(function(){var e=Object(O.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t.data.data[0]?alert("This player is injured or hasn't play."):t.data.data.length>1&&alert("Please be specify more detail."),e.next=3,a.getPlayerStats(t.data.data[0].id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},a.getPlayerStats=function(e){I.a.get("https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=".concat(e)).then(function(){var e=Object(O.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.data.data),a.setState({playerStats:t.data.data[0]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},a.handleSubmit=function(e){e.preventDefault(),a.getPlayerId(),console.log(a.state.playerName)},a.handleChange=function(e){var t=e.target.value.split(" ").join(" ");console.log(t),t.length>0?a.setState({playerName:t}):alert("Please type players name!")},a.state={playerName:null,playerStats:{}},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getPlayerStats()}},{key:"render",value:function(){return Object(g.jsxs)("div",{class:"searchContainer",children:[Object(g.jsx)("img",{src:"/Image/nbalogo.png",alt:"logo"}),Object(g.jsx)("div",{class:"Search",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:"searchbox",action:"http://thecodeblock.com",children:[Object(g.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"SEARCH FOR PLAYER"}),Object(g.jsx)("button",{type:"submit",value:"Search",children:"\xa0"})]})}),Object(g.jsx)("div",{className:"result",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Minutes Play"}),Object(g.jsx)("th",{children:"Point"}),Object(g.jsx)("th",{children:"Assist"}),Object(g.jsx)("th",{children:"Rebound"}),Object(g.jsx)("th",{children:"Field Goal Percentage"})]})}),Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:this.state.playerStats.min}),Object(g.jsx)("td",{children:this.state.playerStats.pts}),Object(g.jsx)("td",{children:this.state.playerStats.ast}),Object(g.jsx)("td",{children:this.state.playerStats.reb}),Object(g.jsx)("td",{children:100*this.state.playerStats.fg_pct+"%"})]})})]})})]})}}]),n}(l.Component)),W=n(43),_=n(24),H=(n(80),[{team:"Atlanta Hawks",lat:33.758065063963166,lng:-84.3961098543853},{team:"Boston Celtics",lat:42.366121939917534,lng:-71.061997802499},{team:"Brooklyn Nets",lat:40.68269529542535,lng:-73.97538341546125},{team:"Charlotte Hornets",lat:35.225362223180696,lng:-80.83927308489243},{team:"Chicago Bulls",lat:41.880874503205845,lng:-87.6741651731047},{team:"Cleveland Cavaliers",lat:41.496753467666345,lng:-81.68811911728936},{team:"Dallas Mavericks",lat:32.790508031478964,lng:-96.81014741377228},{team:"Denver Nuggets",lat:39.74887920043605,lng:-105.00761353082244},{team:"Detroit Pistons",lat:42.34129290367096,lng:-83.05510636940153},{team:"Golden State Warriors",lat:37.76819075848294,lng:-122.38758625600678},{team:"Houston Rockets",lat:29.75095599033368,lng:-95.36203612916397},{team:"Indiana Pacers",lat:39.76407711571312,lng:-86.15569507130543},{team:"Los Angeles Clippers",lat:34.04320417253058,lng:-118.2670502542329},{team:"Los Angeles Lakers",lat:34.04322195269183,lng:-118.26715754258477},{team:"Memphis Grizzlies",lat:35.13829093284135,lng:-90.0505756732459},{team:"Miami Heat",lat:25.781652566443043,lng:-80.18699045990344},{team:"Milwaukee Bucks",lat:43.045252676822976,lng:-87.91712870986845},{team:"Minnesota Timberwolves\t",lat:44.979569527121164,lng:-93.27597668467962},{team:"New Orleans Pelicans",lat:29.94918382120853,lng:-90.0820675310071},{team:"New York Knicks",lat:40.75081614742006,lng:-73.99336437226223},{team:"Oklahoma City Thunder",lat:35.46357323439356,lng:-97.5149314118767},{team:"Orlando Magic",lat:28.539419311009393,lng:-81.38362819665484},{team:"Philadelphia 76ers",lat:39.90144839832693,lng:-75.17182929829136},{team:"Portland Trail Blazers",lat:45.53170787767019,lng:-122.6668530306882},{team:"Phoenix Suns",lat:33.4459428817857,lng:-112.071114471431},{team:"Sacramento Kings",lat:38.580410521677926,lng:-121.49961299007899},{team:"San Antonio Spurs",lat:29.42726304207886,lng:-98.43745447334499},{team:"Toronto Raptors",lat:27.94279114654244,lng:-82.45176445683991},{team:"Utah Jazz",lat:40.768495594535956,lng:-111.90091574060195},{team:"Washington Wizards",lat:38.8982611761956,lng:-77.02081163084065}]),L={width:"800px",height:"400px"};var R=function(){var e=Object(l.useState)(" "),t=Object(W.a)(e,2),n=t[0],a=t[1];return Object(g.jsx)("div",{className:"mapcontainer",children:Object(g.jsxs)("div",{className:"mappy",children:[Object(g.jsx)(_.b,{googleMapsApiKey:"AIzaSyDCyp4PlSITFDqxhZpxEwjoQkGKxVPSNZk",children:Object(g.jsx)(_.a,{className:"nbamap",mapContainerClassName:"nbamap",mapContainerStyle:L,zoom:3,center:{lat:41.00622204245164,lng:-100.43838142083686},children:H.map((function(e){return Object(g.jsx)(_.c,{position:{lat:e.lat,lng:e.lng},onClick:function(){var t;a((t=e)===n?" ":t),console.log(e)}})}))})}),Object(g.jsx)("div",{className:"infowindow",style:{display:"block",width:"550px",color:"white"},children:Object(g.jsxs)("h2",{children:[" ",n.team]})})]})})};var F=function(){return Object(g.jsx)(m.a,{children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{exact:!0,path:"/",children:Object(g.jsx)(j,{})}),Object(g.jsxs)(b.a,{exact:!0,path:"/Home",children:[Object(g.jsx)(A,{}),Object(g.jsx)(B,{})]}),Object(g.jsxs)(b.a,{exact:!0,path:"/Detail/:team",children:[Object(g.jsx)(A,{}),Object(g.jsx)(T,{})]}),Object(g.jsxs)(b.a,{exact:!0,path:"/Search",children:[Object(g.jsx)(A,{}),Object(g.jsx)(D,{})]}),Object(g.jsxs)(b.a,{exact:!0,path:"/Map",children:[Object(g.jsx)(A,{}),Object(g.jsx)(R,{})]})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};p.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),G()}},[[81,1,2]]]);
//# sourceMappingURL=main.96537502.chunk.js.map