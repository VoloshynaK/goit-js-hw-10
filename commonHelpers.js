import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let r=!1;o.disabled=!0;a.disabled=!1;m(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0].getTime()-new Date().getTime();if(e>0&&!r)o.disabled=!1,o.addEventListener("click",()=>{b(e),r=!0,o.disabled=!0,a.disabled=!0});else if(r)return f.error({title:"Error",message:"Timer is already running!",position:"topCenter"})}});function b(t){const e=setInterval(()=>{t>0?(g(C(t)),t-=1e3):clearInterval(e)},1e3)}function n(t){return t.toString().padStart(2,"0")}function g({days:t,hours:e,minutes:s,seconds:c}){y.textContent=n(t),h.textContent=n(e),p.textContent=n(s),S.textContent=n(c)}function C(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
