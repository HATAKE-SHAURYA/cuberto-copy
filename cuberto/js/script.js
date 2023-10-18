var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
    // console.log(dets.x)
    // console.log(dets.y)
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})
document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x-425)+"px"
    document.querySelector("#elem1 img").style.top = (dets.y - 270)+"px"
})
document.querySelector("#overlay1").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cursor.style.opacity = 1
})
document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x-780)+"px"
    document.querySelector("#elem2 img").style.top = (dets.y - 270)+"px"
})
document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
    cursor.style.opacity = 1
})
// by me
var comment = document.querySelector("#comment")
// comment.addEventListener("mousemove", function(){
//     cursor.style.opacity = 0
//     comment.style.scale = 1.8
// })
// comment.addEventListener("mouseleave", function(){
//     cursor.style.opacity = 1
//     comment.style.scale = 1
// })
comment.addEventListener("mousemove", function(){
    comment.classList.toggle(".comment-grow")
    comment.style.scale = 1.8
    cursor.style.opacity = 0
})
comment.addEventListener("mouseleave", function(){
    comment.classList.toggle(".comment-grow")
    comment.style.scale = 1
    cursor.style.opacity = 1
})
var Lnav = document.querySelector("#navL")
var RnavH1 = document.querySelectorAll("#navR h1")
var burger = document.querySelector("#hamburger")

Lnav.addEventListener("mousemove", function(){
    cursor.style.scale = 0
    cursor.style.opacity = 0
    cursor.style.transition = "all linear 0.2s"
})
Lnav.addEventListener("mouseleave", function(){
    cursor.style.scale = 1
    cursor.style.opacity = 1
})
RnavH1.addEventListener("mousemove", function(){
    cursor.style.scale = 0
    cursor.style.opacity = 0
    cursor.style.transition = "all linear 0.2s"
})
RnavH1.addEventListener("mouseleave", function(){
    cursor.style.scale = 1
    cursor.style.opacity = 1
})
burger.addEventListener("mousemove", function(){
    cursor.style.scale = 0
    cursor.style.opacity = 0
    cursor.style.transition = "all linear 0.2s"
})
burger.addEventListener("mouseleave", function(){
    cursor.style.scale = 1
    cursor.style.opacity = 1
})
