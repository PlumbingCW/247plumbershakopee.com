(function(){
  var root=document.documentElement;
  var drawer=document.getElementById("mobDrawer"),overlay=document.getElementById("mobOverlay"),btn=document.getElementById("hambBtn"),closeBtn=document.getElementById("mobClose");
  function openD(){drawer.classList.add("open");overlay.classList.add("open");root.style.overflow="hidden";btn.setAttribute("aria-expanded","true");drawer.setAttribute("aria-hidden","false");}
  function closeD(){drawer.classList.remove("open");overlay.classList.remove("open");root.style.overflow="";btn.setAttribute("aria-expanded","false");drawer.setAttribute("aria-hidden","true");}
  if(btn&&drawer){
    btn.addEventListener("click",openD);
    overlay.addEventListener("click",closeD);
    if(closeBtn){closeBtn.addEventListener("click",closeD);}
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeD();}});
    var mq=window.matchMedia("(min-width:769px)");
    var onMq=function(){if(mq.matches){closeD();}};
    if(mq.addEventListener){mq.addEventListener("change",onMq);}else if(mq.addListener){mq.addListener(onMq);}
  }
  var items=document.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items,function(it){
    var q=it.querySelector(".faq-q"),a=it.querySelector(".faq-a");
    if(!q||!a){return;}
    q.addEventListener("click",function(){
      var open=it.classList.toggle("open");
      q.setAttribute("aria-expanded",open?"true":"false");
      a.style.maxHeight=open?a.scrollHeight+"px":"0px";
    });
  });
  var fc=document.querySelector(".float-call"),ft=document.querySelector("footer");
  if(fc&&ft&&"IntersectionObserver" in window){
    new IntersectionObserver(function(en){en.forEach(function(e){fc.classList.toggle("hide",e.isIntersecting);});},{threshold:0}).observe(ft);
  }
})();
