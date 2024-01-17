let ImgBox=document.querySelector(".img-box");
let ImgWrap=document.querySelector(".img-wrap");
let orignalImg=document.getElementById("orignal")
let line=document.getElementById("line")


orignalImg.style.width=ImgBox.offsetWidth + "px";


let leftSpace=ImgBox.offsetLeft;




ImgBox.onmousemove=function(e){
 let boxWidth=(e.pageX - leftSpace) + "px";
 ImgWrap.style.width=boxWidth;
 line.style.left=boxWidth

}