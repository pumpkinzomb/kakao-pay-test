(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(20),m=a.n(s),l=(a(28),a(2)),r=a(6),c=a(9),i=a(10),p=a(13),g=a(12),E=a(11),k=a(14),u=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleScroll=a.handleScroll.bind(Object(E.a)(a)),a.coins=null,a}return Object(k.a)(t,e),Object(i.a)(t,[{key:"handleScroll",value:function(e){var t=window.pageYOffset,a=window.innerHeight,n=Math.floor(t/a*250);if(null!==this.coins){var o=this.coins.childNodes;o[0].style.transform="translateY(-".concat(n,"%)"),o[1].style.transform="translateY(-".concat(.8*n,"%)"),o[2].style.transform="translateY(-".concat(1.5*n,"%)")}}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){var t=e.coins.childNodes,a=!0,n=!1,o=void 0;try{for(var s,m=t[Symbol.iterator]();!(a=(s=m.next()).done);a=!0){var l=s.value;l.style.animationPlayState="running",l.style.display="block"}}catch(r){n=!0,o=r}finally{try{a||null==m.return||m.return()}finally{if(n)throw o}}},500)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t={backgroundImage:"url(".concat("/kakao-pay-test","/imgs/promotion/sns-share-neon-off.png)"),backgroundPosition:"0 0",backgroundSize:"contain"};return o.a.createElement("div",{className:"Promotion"},o.a.createElement("div",{className:"topBar"},o.a.createElement(l.b,{className:"logo",to:"/"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/topbar-logo.png",alt:"pay \uc1a1\uae08"})),o.a.createElement("span",{className:"title"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/topbar-title.png",alt:"10\uc8fc\uac04\uc758 \ud604\uae08\uc2a4\uc6e9"})),o.a.createElement(l.b,{className:"smtm",to:"/"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/topbar-smtm.png",alt:"SHOW ME THE MONEY 6"}))),o.a.createElement("div",{className:"mainTitle"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-neon1.png",alt:"\uc1a1\uae08\ub9cc\ud574\ub3c4 \ud604\uae08\uc774 \uc3df\uc544\uc9c4\ub2e4!"}),o.a.createElement("span",{className:"title-text1"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-neon2.png",alt:"DROP THE"})),o.a.createElement("span",{className:"title-text2"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-neon3.png",alt:"MONEY"})),o.a.createElement("span",{className:"title-flame1"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-flame1.png",alt:"\ubd88\uaf431 \uc774\ubbf8\uc9c0"})),o.a.createElement("span",{className:"title-flame2"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-flame2.png",alt:"\ubd88\uaf431 \uc774\ubbf8\uc9c0"})),o.a.createElement("span",{className:"title-flame3"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-flame3.png",alt:"\ubd88\uaf431 \uc774\ubbf8\uc9c0"})),o.a.createElement("span",{className:"title-flame4"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/main-title-flame4.png",alt:"\ubd88\uaf431 \uc774\ubbf8\uc9c0"}))),o.a.createElement("div",{className:"g-money"},o.a.createElement("div",{className:"money-image"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/g-money.png",alt:"G\uba38\ub2c8"})),o.a.createElement("div",{className:"money-title"},o.a.createElement("span",{className:"text"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/g-money-text.png",alt:"\ucd1d 1\uc5b5\uc6d0"})),o.a.createElement("span",{className:"left-hand"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/g-money-left-hand.png",alt:"\uc2a4\uc6e9\uc67c\uc190\uac80\uc9c0"})),o.a.createElement("span",{className:"right-hand"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/g-money-right-hand.png",alt:"\uc2a4\uc6e9\uc624\ub978\uc190\uac80\uc9c0"})))),o.a.createElement("div",{className:"reward-detail"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/reward-detail.png",alt:"\ucd94\ucca8\uc744 \ud1b5\ud574 \uce74\uce74\uc624\uba38\ub2c8\ub97c \ub4dc\ub9bd\ub2c8\ub2e4."})),o.a.createElement("div",{className:"sns-share",style:t},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/sns-share-nav.png",alt:"sns\ub85c \uacf5\uc720\ud558\uc138\uc694"}),o.a.createElement("div",{className:"share-neon",ref:function(t){return e.snsNeon=t}},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/sns-share-neon.png",alt:"\uce5c\uad6c\ub4e4\ub3c4 \uc6b0\ub9ac\uc640 \ud568\uaed8 \uac11\uc2dc\ub2e4!"})),o.a.createElement("div",{className:"share-link-btns"},o.a.createElement(l.b,{to:"/"},"\uce74\uce74\uc624\ud1a1\uc73c\ub85c \uacf5\uc720"),o.a.createElement(l.b,{to:"/"},"##\ub85c \uacf5\uc720"),o.a.createElement(l.b,{to:"/"},"\ud398\uc774\uc2a4\ubd81\uc73c\ub85c \uacf5\uc720"),o.a.createElement(l.b,{to:"/"},"\ud2b8\uc704\ud130\ub85c \uacf5\uc720"))),o.a.createElement("div",{className:"deco-coins"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/deco-coins.png",alt:"\ubc30\ub108\uafb8\ubbf8\uae30\uc6a9 \ub3d9\uc804\ub4e4"})),o.a.createElement("div",{className:"banner"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/banner01.png",alt:"\ubc30\ub10801"})),o.a.createElement("div",{className:"caution"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/caution.png",alt:"\uc720\uc758\uc0ac\ud56d"})),o.a.createElement("div",{className:"coins",ref:function(t){return e.coins=t}},o.a.createElement("span",{className:"coin-01"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/coin-03.png",alt:"\ub5a8\uc5b4\uc9c0\ub294 \ubaa8\uc158\uc6a9 \ub3d9\uc8043"})),o.a.createElement("span",{className:"coin-02"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/coin-02.png",alt:"\ub5a8\uc5b4\uc9c0\ub294 \ubaa8\uc158\uc6a9 \ub3d9\uc8042"})),o.a.createElement("span",{className:"coin-03"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/coin-01.png",alt:"\ub5a8\uc5b4\uc9c0\ub294 \ubaa8\uc158\uc6a9 \ub3d9\uc8041"}))),o.a.createElement("div",{className:"enter-btn"},o.a.createElement(l.b,{to:"/joinEvent"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/promotion/join-event-btn.png",alt:"\ucc38\uc5ec\ud558\uae30"}))))}}]),t}(n.Component)),y=(a(37),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).topDoor=null,a.bottomDoor=null,a}return Object(k.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.topDoor.style.animationPlayState="running",e.topDoor.style.display="block",e.bottomDoor.style.animationPlayState="running",e.bottomDoor.style.display="block"},500)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"JoinEvent"},o.a.createElement("div",{className:"contents-top",ref:function(t){return e.topDoor=t}},o.a.createElement("img",{src:"/kakao-pay-test/imgs/joinevent/contents-top.png",alt:"\uc774\ubca4\ud2b8 \uacc4\uc88c\ub85c 1\uc6d0 \ubcf4\ub0b4\ubd10!"}),o.a.createElement(l.b,{className:"close-btn",to:"/"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/joinevent/closebutton.png",alt:"\ub2eb\uae30\ubc84\ud2bc -> \ucc3d\ub2eb\uace0 \ud504\ub85c\ubaa8\uc158\ud398\uc774\uc9c0\ub85c \uac00\uae30"}))),o.a.createElement("div",{className:"contents-bottom",ref:function(t){return e.bottomDoor=t}},o.a.createElement("img",{src:"/kakao-pay-test/imgs/joinevent/contents-bottom.png",alt:"\uc1a1\uae08\ud560 1\uc6d0\uc774 \uc5c6\ub2e4\uba74? -> 1\uc6d0 \ucfe0\ud3f0 \ubc84\ud2bc / \uc1a1\uae08 \ud6c4, \uc989\uc2dc \ub2f9\ucca8 \ud655\uc778 \uac00\ub2a5 & 1\uc6d0 \ud658\ubd88 (\uce74\uce74\uc624\ud398\uc774 \ud50c\ub7ec\uc2a4\uce5c\uad6c \uba54\uc2dc\uc9c0\ub85c \uc548\ub0b4) \ub9e4\uc77c 10\ud68c \ucc38\uc5ec \uac00\ub2a5 / \ub9e4\uc8fc \uacbd\ud488 \ubcc0\uacbd / \uce74\ud1a1\ucd5c\uc2e0 \ubc84\uc804\uc5d0\ub9cc \ucc38\uc5ec \uac00\ub2a5 -> \uce74\ud1a1\uc5c5\ub370\uc774\ud2b8 \ubc84\ud2bc"}),o.a.createElement(l.b,{to:"/",className:"coupon-btn"},"1\uc6d0 \ucfe0\ud3f0 \ubc84\ud2bc"),o.a.createElement(l.b,{to:"/",className:"update-btn"},"\uce74\ud1a1 \uc5c5\ub370\uc774\ud2b8 \ubc84\ud2bc")),o.a.createElement("div",{className:"main-btn"},o.a.createElement(l.b,{to:"/"},o.a.createElement("img",{src:"/kakao-pay-test/imgs/joinevent/mainbutton.png",alt:"\uc1a1\uae08\ud558\uae30"}))))}}]),t}(n.Component));a(38);var d=function(){var e={backgroundImage:"url(".concat("/kakao-pay-test","/imgs/bg.png)")};return o.a.createElement("div",{className:"App",style:e},o.a.createElement(l.a,{basename:"/kakao-pay-test"},o.a.createElement(r.c,null,o.a.createElement(r.a,{path:"/",exact:!0,component:u}),o.a.createElement(r.a,{path:"/joinevent",component:y}))))};m.a.render(o.a.createElement(d,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4a787a28.chunk.js.map