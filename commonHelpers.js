/* empty css                      */import{f as m,i as p}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=document.querySelector("#datetime-picker"),c=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]");let u=!1;c.disabled=!0;d.disabled=!1;m(d,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0].getTime()-new Date().getTime();if(o>0&&!u)c.disabled=!1,c.addEventListener("click",()=>{S(o),u=!0,c.disabled=!0,d.disabled=!0});else if(u)return p.error({title:"Error",message:"Timer is already running!",position:"topCenter"})}});function S(t){const o=setInterval(()=>{t>0?(v(q(t)),t-=1e3):clearInterval(o)},1e3)}function i(t){return t.toString().padStart(2,"0")}function v({days:t,hours:o,minutes:a,seconds:n}){y.textContent=i(t),h.textContent=i(o),g.textContent=i(a),b.textContent=i(n)}function q(t){const r=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:l,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map