(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".form"),t=document.querySelector("input[name='searchQuery']"),n=document.querySelector(".loader"),s=document.querySelector(".gallery");if(!i||!t||!n||!s){console.error("One or more necessary elements are missing!");return}i.addEventListener("submit",async e=>{e.preventDefault();const r=t.value.trim();if(!r){iziToast.error({title:"Error",message:"Please enter a search term!",position:"topRight"});return}s.innerHTML="",n.style.display="block";try{const o=await fetchImages(r);if(console.log(o),o.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}renderGallery(o)}catch(o){iziToast.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error("Fetch error:",o)}finally{n.style.display="none"}}),t.addEventListener("input",()=>{t.style.border=t.value.trim()?"2px solid blue":"1px solid #808080"})});
//# sourceMappingURL=index.js.map
