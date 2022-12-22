document.querySelector(".body");const t=document.querySelector('button[data-start = "start"]'),e=document.querySelector('button[data-stop = "stop"]');let o=null;t.addEventListener("click",(function(){o=setTimeout((()=>{console.log("Изменить цвет")}),1e3)})),e.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.bb7488c7.js.map
