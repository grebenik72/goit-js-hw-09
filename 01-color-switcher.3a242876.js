!function(){var t=0,e=document.querySelector("body"),n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");n.addEventListener("click",(function(n){click.target.disable=!0,t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(e){click.target.disable=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.3a242876.js.map
