
var tags=document.querySelectorAll(".nav li a");
console.log(pageYOffset);
for(var i=0;i<tags.length;i++){
tags[i].addEventListener("click",function(event){
 event.preventDefault();
var targetsectionID=this.getAttribute("href");
console.log(targetsectionID);
targetsectionID=targetsectionID.slice(1);
targetsectionID=targetsectionID.toLowerCase();
console.log(targetsectionID);
var targetsection=document.getElementById(targetsectionID);
var command=setInterval(function(){
var targetsectioncoordinates=targetsection.getBoundingClientRect();
if(targetsectioncoordinates.top<=0)
  {
   clearInterval(command);
  }
else{
window.scrollBy(0,50);
}

},50);

});
}


 var abc=document.getElementsByClassName("css");
 for(var i=0;i<abc.length;i++){
 abc[i].style.width="0px";
 }

var animationDone=false;
 var target=document.getElementById("skills");
 window.addEventListener("scroll",function(){
 var targetCoordinates=target.getBoundingClientRect();
 if( animationDone==false&&targetCoordinates.top<200)
 {
 // console.log("arsh");
  animationDone=true;
fillbars();
 }
 });
function fillbars(){
var baritem=document.getElementsByClassName("css");
for(let i=0;i<baritem.length;i++){
let currentwidth=0;
let targetwidth=baritem[i].getAttribute("data-bar-width");
var interval=setInterval(function(){
if(currentwidth>=targetwidth)
{
   clearInterval(interval);
  return;
}
else{
currentwidth++;
baritem[i].style.width=currentwidth+"%";
}
},3);

}
}
