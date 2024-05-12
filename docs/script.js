function homepageanimation(){
var tl = gsap.timeline()
tl.from("nav .logo ,.nav2 button ,.rghtnav",{
   y:-30,
   delay:0.2,
   opacity:0,
   duration:0.7,
   stagger:0.15
})
tl.from(".section1 .innertext,.section1 button",{
    x:-100,
    duration:0.5,
    stagger:0.2,
    opacity:0
})
tl.from(".section2 img",{
    opacity:0,
    duration:0.5,
},"-=1")

tl.from(".section-botm-logos img",{
    x:-20,
    opacity:0,
    stagger:0.2,
    /*scrollTrigger:{
        trigger:".section-botm-logos img",
        scroller:"body",
        markers:true,
        start:"20%"
    }*/
})
}
 homepageanimation();

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".services-section",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})
tl.from(".about",{
    y:30,
    opacity:0,
    duration:0.5
})
tl.from(".elem.line1.left",{
    x:-200,
    opacity:0,
    duration:1
},"a")
tl.from(".elem.line1.right",{
    x:200,
    opacity:0,
    duration:1
},"a")

tl.from(".elem.line2.left",{
    x:-200,
    opacity:0,
    duration:1
},"b")
tl.from(".elem.line2.right",{
    x:200,
    opacity:0,
    duration:1
},"b")