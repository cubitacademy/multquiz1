
i=0;
a=[];
b=[];

a=Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z ")
b=Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26)


function randomNumbers(max) {
function range(upTo) {
 var result = [];
  for(var i = 0; i < upTo; i++)
   result.push(i); return result;
    }
    function shuffle(o){
     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
     return o; }
      var myArr = shuffle(range(max));
       return function() {
        return myArr.shift(); }; }




var randoms = randomNumbers(26),
rand = randoms(),
 result = [];
  while(rand != null) {
   result.push(rand); rand = randoms();
    }

    b=(result);
console.log(result)

//function remove(num) {
//  return num>= 10;
//}

//console.log(result.filter(remove))












wrongq =[];
//total ques;

tno=9;
no=10;
sco=0;
x= Math.floor(Math.random() * 10) +1;
x1=Math.floor(Math.random() * 7) +3;
x2=Math.floor(Math.random() * 7) +3;




var timeleft = 0; var downloadTimer = setInterval(function(){ timeleft++; document.getElementById("countdowntimer").textContent = timeleft; },1000);






   var audio = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-correct-17.mp3');
   var audiof = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-incorrect-25.mp3');









function finished(){

 clearInterval(downloadTimer);


      wrongq.forEach(function(q){

var para = document.createElement("h4");
var node = document.createTextNode(q);
para.appendChild(node);
var element = document.getElementById("wronq");
element.appendChild(para);

   });




       document.getElementById('quizsection').style.display ="none"
sc=document.getElementById("sco").innerHTML
ti=document.getElementById("countdowntimer").innerHTML
document.getElementById('result').style.display ="block"

document.getElementById('finalscore').innerHTML="score:" +sc;
document.getElementById('avgtime').innerHTML="average time /question :" +ti/no +"s";

at=ti/no

if(sc==no){
document.getElementById("cd").innerHTML=""
}

if( sc==9 || sc==10 ){
    document.getElementById("comment").innerHTML="comment : good "
    document.getElementById('threestar').style.display= 'block'

}
if(sc==8){
   document.getElementById("comment").innerHTML="comment: average"
   document.getElementById('twostar').style.display= 'block'

   document.getElementById('threestar').style.display= 'none'
  document.getElementById('fourstar').style.display= 'none'
  document.getElementById('fivestar').style.display= 'none'

}
if(sc<=7){
    document.getElementById("comment").innerHTML="comment: kid"

    document.getElementById('onestar').style.display= 'block'

    document.getElementById('threestar').style.display= 'none'
  document.getElementById('fourstar').style.display= 'none'
  document.getElementById('twostar').style.display= 'none'



}

if(at<=2 && sc==10){
document.getElementById("comment").innerHTML="comment : proffesional"
document.getElementById('fivestar').style.display= 'block'


document.getElementById('threestar').style.display= 'none'
  document.getElementById('twostar').style.display= 'none'
  document.getElementById('onestar').style.display= 'none'



}
if(at<=3 && at>2 && sc==10){
    document.getElementById("comment").innerHTML="comment : very good"
    document.getElementById('fourstar').style.display= 'block'

    document.getElementById('threestar').style.display= 'none'
  document.getElementById('onestar').style.display= 'none'
  document.getElementById('fivestar').style.display= 'none'


}







}









window.onload=function(){

document.getElementById('quo').innerHTML=a[b[i]];

//document.getElementById("quesno").innerHTML=i+1;

}

function check(){

x1=Math.floor(Math.random() * 7) +3;
x2=Math.floor(Math.random() * 7) +3;
ans=document.getElementById("ans").value;
  if(ans==b[i]+1){
  audio.playbackRate =2;
    audio.play();
  sco=sco+1
    document.getElementById("sco").innerHTML=sco;
  }else {
     audiof.playbackRate =2;
    audiof.play();
    ansb=b[i]
    an=parseInt(ansb)+1
      wrongq.push(a[b[i]]+"="+an);
  }


  if(tno==i){
      finished();
  }else{
      nextq();
  }


}



function ansfunction(){

sa=document.getElementById("ans").value.length;
answer=b[i].toString();
sb=answer.length;
if(sa==sb){

  check ();
}
}

function nextq(){

i=i+1
document.getElementById('quo').innerHTML=a[b[i]];
document.getElementById("ans").value="";

 document.getElementById("quesno").innerHTML=i+1;

}
