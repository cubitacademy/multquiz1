window.onload=function(){
a=document.getElementById("mu")
a1=(a.value)
b=document.getElementById("up")
ia=document.getElementById("start")
ib=ia.value
i=parseInt(ib)
document.getElementById("go").addEventListener("click", myFunction);
function myFunction(){
y= document.getElementById("num")
    y.innerHTML=""

ia=document.getElementById("start")
ib=ia.value
i=parseInt(ib)
a=document.getElementById("mu")
a1=parseInt(a.value)

while(i<=b.value){
    m=i*i*i


 var para = document.createElement("h4");
para.innerHTML =i+"&nbsp"+'Cube'+"="+"&nbsp"+ m;
  document.getElementById("num").appendChild(para);


    i=i+1
}
}
myFunction()
}
