(()=>{var l=document,u=(o,e=l)=>e.querySelector(o),s=(o,e=l)=>e.querySelectorAll(o);var d=()=>String.fromCharCode(65+Math.floor(Math.random()*26)).toLowerCase()+Date.now();(()=>{let o=s("[data-bc-count]");o.length!==0&&o.forEach(e=>{let c=s("[data-bc-count-item]",e),t=e.getAttribute("data-bc-count");if(c.length===0)return;t||(t=d()),e.setAttribute("data-bc-count",t),e.style.counterReset=t.trim().replaceAll(" ","_"),c.forEach(r=>{r.textContent&&(r.textContent=""),r.style.counterIncrement=t+" 0"});let a=`
    [data-bc-count="${t}"] [data-bc-count-item]::before {
      counter-increment: ${t}; 
      content: counter(${t}); 
    }
`,i=u("style[data-bc-count-styles]");if(i){i.innerHTML+=a;return}let n=document.createElement("style");n.innerHTML=a,n.setAttribute("data-bc-count-styles",""),document.head.appendChild(n)})})();})();
