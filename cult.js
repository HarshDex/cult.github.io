var cursor = document.querySelector("#cursor")
var main = document.querySelector("body")
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px",
    cursor.style.top = dets.y + "px"
})

var nav = document.querySelector("#page1 h4")
nav.addEventListener("mouseenter",function(){
    cursor.getElementById("#page1 h4").innerHTML = "hello";
})

function init(){
    gsap.registerPlugin(ScrollTrigger)
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    }
    // follwoing line is not required to work pinning on touch screen
    /* pinType: document.querySelector("#main
    ").style.transform
        ? "transform"
        : "fixed"*/
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

var tl = gsap.timeline({
    scrollTrigger : {
        trigger : "#page1 h2",
        scroller : "#main",
        start : "top 60%",
        end : "top 0",
        scrub :2
    }
})
tl.to("#page1 h4",{
    x : -150,
},"anim");
tl.to("#page1 h3",{
    x : 150,
},"anim");


gsap.to("#page2",{
    backgroundColor : "white",
    duration : "4",
    scrollTrigger : {
        trigger : "#page1",
        scroller : "#main",
        markers : false,
        start : "top -70%",
        end : "top -100%",
        scrub : 3
    }
})

gsap.to("#page3",{
    backgroundColor : "black",
    scrollTrigger : {
        trigger : "#page1",
        scroller : "#main",
        start : "top -150%",
        end : "top -200%",
        scrub : 3
    }
})

gsap.to("#page5 h2",{
    y : 80,
    duration : 3,
    scrollTrigger:{
        trigger : "#page5 h2",
        scroller : "#main",
        start : "top -380%",
        end : "top -410%",
        scrub : 3
    }
});

gsap.to("#page5",{
    backgroundColor : "white",
    scrollTrigger : {
        trigger : "#page1",
        scroller : "#main",
        start : "top -360%",
        end : "top -370%",
        scrub : 4
    }
})

