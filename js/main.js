//---------------------------BOX ANNIMATION-------------------
function init(){
    var tl = new TimelineLite();
      tl.to('.banner-box', 5, {x:-340})  
    }
init();

//-----------------------SINGLE TEXT ANNIMATION----------------- 
function text(){
   var tl = new TimelineLite();
     tl.to('#txtone', 2, {opacity:1})
       .to('#txtone', 0.2, {left:-150} ,"+=0.1")
       .to('#strong', 1, {opacity:1})
       .to('#strong', 0.2, {bottom:-300, delay:1})
}
text();

//------------------------------TEXT ANNIMATION-------------------
function text1b(){
  var tl = new TimelineLite();
   tl.to('#txttwo', 2, {opacity:1})
     .to('#txttwo', 0.2, {left:-150} ,"+=0.1")
     .to('#txtthree', 1, {opacity:1})
     .to('#txtthree', 0.5, {scale:0, rotation:-360, delay:1})
     .from('.flash', 1, {scale:0, autoAlpha:2, ease:Back.easeOut, rotation:360})
     .to('#txt03', 1, {opacity:1})
     .to('#yes',0.5, {opacity:1})
     .to('#txt03, #yes', 0.5, {rotationX:-90, transformOrigin:"50% 100%"})
     .from('#txt04', 0.5,{rotationX:90, transformOrigin:"50% 100%",opacity:1})
     .to('#txt04',0,{opacity:1})
     .to('#logos',0.2, {width:100})
     .to('#cta', 0.2,{top:-10})  
}
text1b();

//----------------------------BOX ANNIMATION-----------------------------------------------
function box(){
  var tl = new TimelineLite();
    tl.to('.box', 1, {width:140})
      .to('.box', 2, {left:-150})
      .to('.boxtwo', 0.2,{width:120})
      .to('.boxtwo', 0.2,{opacity:0,delay:1})
}
box();
