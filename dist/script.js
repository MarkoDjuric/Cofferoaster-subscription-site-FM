"use strict";var iconClose="assets/shared/mobile/icon-close.svg",iconOpen="assets/shared/mobile/icon-hamburger.svg",hamburger=document.getElementById("closed"),minmenu=document.getElementById("minmenu"),logo=document.getElementById("logo"),video=document.getElementsByTagName("video")[0];if(void 0===video){console.log(!0);var heroDiv=document.getElementsByClassName("header__about")[0];heroDiv.style.position="unset",document.getElementById("closed").addEventListener("click",(function(){1==hamburger.src.endsWith("icon-hamburger.svg")?(hamburger.src=iconClose,hamburger.classList.add("shadow-text"),logo.classList.add("shadow-text"),minmenu.style.display="block"):(console.log(!1),hamburger.src=iconOpen,hamburger.classList.remove("shadow-text"),logo.classList.remove("shadow-text"),minmenu.style.display="none")}))}else{var _heroDiv=document.getElementsByClassName("header__hero")[0];video.onended=function(e){video.style.display="none",_heroDiv.style.position="unset",document.getElementById("closed").addEventListener("click",(function(){1==hamburger.src.endsWith("icon-hamburger.svg")?(hamburger.src=iconClose,hamburger.classList.add("shadow-text"),logo.classList.add("shadow-text"),minmenu.style.display="block"):(hamburger.src=iconOpen,hamburger.classList.remove("shadow-text"),logo.classList.remove("shadow-text"),minmenu.style.display="none")}))}}
//# sourceMappingURL=script.js.map