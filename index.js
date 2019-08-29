function go(){
    document.getElementById('mainpart').style.display ='block'
document.getElementById('select').style.display ='none'

//Which number to multiply


abcd=document.getElementById("inp")
    dca=parseInt(abcd.value)
    number =dca
mainpart()
    }

function table(){
    document.getElementById('table').style.display ='block'
document.getElementById('select').style.display ='none'
}

//no of question- no
var h =screen.height


no=10
nol=0
function mainpart() {


//timer

var timeleft = 0; var downloadTimer = setInterval(function(){ timeleft++; document.getElementById("countdowntimer").textContent = timeleft; },1000);



//Which number to multiply


abcd=document.getElementById("inp")
    dca=parseInt(abcd.value)
    number =dca


a1=number
b1=Math.floor(Math.random() *4) + 1
c1=(Math.floor(Math.random() *10) + 1)
s1=a1*b1

a2=number 
//b2-b4 √
b2=Math.floor(Math.random() *2) + 9
c2=Math.floor(Math.random() *10) + 1
s2=a2*b2

a3=number
b3=Math.floor(Math.random() *2) + 7
c3=Math.floor(Math.random() *10) + 1
s3=a3*b3

a4=number
//b4 -b2 √
b4=Math.floor(Math.random() *3) + 4
c4=Math.floor(Math.random() *10) + 1
s4=a4*b4


a5=number
//b5 - b9 √
b5=Math.floor(Math.random() *2) + 19
c5=Math.floor(Math.random() *10) + 1
s5=a5*b5

a6=number
b6=Math.floor(Math.random() *2) + 13
c5=Math.floor(Math.random() *10) + 1
s6=a6*b6

a7=number
// b7-b10 √
b7=Math.floor(Math.random() *4) + 21
c5=Math.floor(Math.random() *10) + 1
s7=a7*b7

a8=number
b8=Math.floor(Math.random() *2) + 17
s8=a8*b8

a9=number
//b9 -5 √
b9=Math.floor(Math.random() *3) + 11
c5=Math.floor(Math.random() *10) + 1
s9=a9*b9

a10=number
//b7- b10 √
b10=Math.floor(Math.random() *2) + 15
c5=Math.floor(Math.random() *10) + 1
s10=a10*b10

a=Array(a1+"×"+b1)
b=Array()
c=Array("")
di=Array("")
de=Array("none of these")
b[0]=s1
di[0]=s1-1
de[0]=s1+2
c[0]=s1+10

n=1
a[n]=a2+"×"+b2
b[n]=s2
di[n]=s2-10
de[n]=s2+2
c[n]=s2+10

n=2
a[n]=a3+"×"+b3
b[n]=s3
di[n]=s3-1
de[n]=s3+2
c[n]=s3+4


n=3
a[n]=a4+"×"+b4
b[n]=s4
di[n]=s4-1
de[n]=s4+4
c[n]=s4+3

n=4
a[n]=a5+"×"+b5
b[n]=s5
di[n]=s5-10
de[n]=s5+20
c[n]=s5+10

n=5
a[n]=a6+"×"+b6
b[n]=s6
di[n]=s6-10
de[n]=s6+4
c[n]=s6+10

n=6
a[n]=a7+"×"+b7
b[n]=s7
di[n]=s7-10
de[n]=s7+6
c[n]=s7+10

n=7
a[n]=a8+"×"+b8
b[n]=s8
di[n]=s8-10
de[n]=s8+7
c[n]=s8+10

n=8
a[n]=a9+"×"+b9
b[n]=s9
di[n]=s9-10
de[n]=s9+4
c[n]=s9+10

n=9
a[n]=a10+"×"+b10
b[n]=s10
di[n]=s10-10
de[n]=s10+2
c[n]=s10+10


e=0
z=1
n=0
qno=1






tn=document.getElementById("tno")
tn.innerHTML="/"+no;
qn=document.getElementById("quesno")
qn.innerHTML=qno;

document.getElementById('container').style.display ='block'



// resising height
/**myVar=setInterval(resi,1000);
function resi(){
if(h==732){
    

document.getElementById('cont').style.paddingTop= '12%' 
    clearInterval(myVar);
}} **/

//$(function (){
qu= document.getElementById("quo")
qu.innerHTML=a[0];

qa= document.getElementById("opt1")
qa.innerHTML=b[0];
qb= document.getElementById("opt2")
qb.innerHTML=c[0];
qc= document.getElementById("opt3")
qc.innerHTML=di[0];
qd= document.getElementsByClassName("opt4");
for(var i = 0; i < qd.length; i++){ qd[i].innerText=de[0];  }

   // $(".quo").text(a[0]);
    //$(".opt1").text(b[0]);
   // $(".opt2").text(c[0]);
   // $(".opt3").text(di[0]);
   // $(".opt4").text(de[0]);
    

   var audio = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-correct-17.mp3');
   var audiof = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-incorrect-25.mp3');
     
    
    
      //check option 
   
 
 //$(".check").on("click",function (){
 document.getElementById("check").addEventListener("click", myFunction);
function myFunction(){
y=document.getElementById("jumbotron");
y.classList.remove("jumbo")
 
 document.getElementById('next').style.display = 'block'
document.getElementById('check').style.display = 'none'
 
 
var audio = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-correct-17.mp3');
   var audiof = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-incorrect-25.mp3');
 
 
 //$(".opt1").removeClass("btn-info");
 var element = document.getElementById("opt1");
  element.classList.remove("btn-info");

// $(".opt1").addClass("btn-success")
 var element = document.getElementById("opt1");
  element.classList.add("btn-success");
 
// $(".opt2").removeClass("btn-info");
 var element = document.getElementById("opt2");
  element.classList.remove("btn-info");

// $(".opt3").removeClass("btn-info");
 var element = document.getElementById("opt3");
  element.classList.remove("btn-info");

// $(".opt4").removeClass("btn-info");
 var element = document.getElementById("opt4");
  element.classList.remove("btn-info");
 
 
// var n1=$("#no").text()
 var n1=document.getElementById("no").innerHTML 
    n=parseInt(n1)
    if(n==0){
    // var y1=$("#sco").text()
     var y1=document.getElementById("sco").innerHTML
     y2=parseInt(y1)
 x=document.getElementById("tex")
    x1=x.value
    x2=x1.length 
    
 //x3 is the last text in hidden text box
    x3=x1[x2-1]
    if(x3==3){
    document.getElementById('box').style.borderColor = 'brown'
    var y=document.getElementById("wrong");
   y.classList.add("false");
   audiof.playbackRate =2;
    audiof.play();
   
         //$(".opt2").removeClass("btn-info");
  var element = document.getElementById("opt2");
  element.classList.remove("btn-info");  
var element = document.getElementById("opt2");
  element.classList.add("btn-danger");

       //  $(".opt2").addClass("btn-danger");
         //$(".opt3").removeClass("btn-info");
//$(".opt4").removeClass("btn-info");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
var element = document.getElementById("opt4");
  element.classList.remove("btn-info");

    }
    if(x3==5){
    document.getElementById('box').style.borderColor = 'brown' 
    var y=document.getElementById("wrong");
   y.classList.add("false");
     audiof.playbackRate =2;
    audiof.play();
    
      // $(".opt4").removeClass("btn-info");
         //$(".opt4").addClass("btn-danger");
   var element = document.getElementById("opt4");
  element.classList.remove("btn-info");    
  var element = document.getElementById("opt4");
  element.classList.add("btn-danger");
       //  $(".opt2").removeClass("btn-info");
//$(".opt3").removeClass("btn-info");
var element = document.getElementById("opt2");
  element.classList.remove("btn-info");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
    }
    if(x3==4){
    
    document.getElementById('box').style.borderColor = 'brown' 
    var y=document.getElementById("wrong");
   y.classList.add("false");
    audiof.playbackRate =2;
    audiof.play();
    
         //$(".opt3").removeClass("btn-info");
        // $(".opt3").addClass("btn-danger");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
var element = document.getElementById("opt3");
  element.classList.add("btn-danger");
       //  $(".opt2").removeClass("btn-info");
        var element = document.getElementById("opt2");
  element.classList.remove("btn-info"); 
//$(".opt4").removeClass("btn-info");
         }
    var element = document.getElementById("opt4");
  element.classList.remove("btn-info");
    
   //if answer true 
    if(x3==1){
       var pos = 0; 
    document.getElementById('box').style.borderColor = 'green'   
       var y=document.getElementById("tick");
   y.classList.add("true");
        audio.playbackRate =2;
         audio.play();
        y2=y2+1
       // $("#sco").text((y2))
       document.getElementById("sco").innerHTML=y2
    }
    

 }
 n=2
    //$("#no").text(n)
 document.getElementById("no").innerHTML=n
    
// })
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // next option button

   //$(".next").on("click",function(){
   
   



   document.getElementById("next").addEventListener("click", next);
function next(){



y=document.getElementById("jumbotron");
   y.classList.add("jumbo")
  





  document.getElementById('box').style.borderColor = 'black'
   y=document.getElementById("tick");
   y.classList.remove("true");
   var y=document.getElementById("wrong");
   y.classList.remove("false");
   document.getElementById('next').style.display = 'none'
document.getElementById('check').style.display = 'block'
   x1=document.getElementById("tex")
   x1.value=2
   nol=nol+1
  if(nol<no){
       //adujuting postn of options
       
   var r=Math.floor(Math.random() *4) + 1
   if(r==2){
       //$(".opt1").css("top","45px")
       document.getElementById('opt1').style.top = '45px'
      // $(".opt2").css("top","-50px")
   document.getElementById('opt2').style.top = '-50px' 
      // $(".opt3").css("top","15px")
document.getElementById('opt3').style.top = '15px'
      // $(".opt4").css("top","25px")
      document.getElementById('opt4').style.top = '25px'
   }
   if(r==1){
       //$(".opt1").css("top","-10px")
       document.getElementById('opt1').style.top = '-10px'
     //  $(".opt2").css("top","0px")
       document.getElementById('opt2').style.top = '0px'
       //$(".opt3").css("top","10px")
  document.getElementById('opt3').style.top = '10px'  
     //  $(".opt4").css("top","22px")
     document.getElementById('opt4').style.top = '22px'
   }
    if(r==3){
      // $(".opt1").css("top","93px")
       document.getElementById('opt1').style.top = '93px'
      // $(".opt2").css("top","-50px")
       document.getElementById('opt2').style.top = '-50px'
       //$(".opt3").css("top","-40px")
document.getElementById('opt3').style.top = '-40px'
      // $(".opt4").css("top","22px")
document.getElementById('opt4').style.top = '22px'
   }
   if(r==4){
      // $(".opt1").css("top","145px")
       document.getElementById('opt1').style.top = '145px'
       
      // $(".opt2").css("top","-50px")
 document.getElementById('opt2').style.top = '-50px'   
       //$(".opt3").css("top","-40px")
document.getElementById('opt3').style.top = '-40px'       
       //$(".opt4").css("top","-28px")
document.getElementById('opt4').style.top = '-28px'
   }
   
    //  $(".opt1").removeClass("btn-success")
      var element = document.getElementById("opt1");
  element.classList.remove("btn-success");
     // $(".opt2").removeClass("btn-danger")
      var element = document.getElementById("opt2");
  element.classList.remove("btn-danger");
      //$(".opt3").removeClass("btn-danger")
          var element = document.getElementById("opt3");
  element.classList.remove("btn-danger");
     // $(".opt4").removeClass("btn-danger")
         var element = document.getElementById("opt4");
  element.classList.remove("btn-danger");
      //  $(".opt1, .opt2, .opt3, .opt4").addClass("btn-info")
          var element = document.getElementById("opt1");
  element.classList.add("btn-info");
var element = document.getElementById("opt2");
  element.classList.add("btn-info");
var element = document.getElementById("opt3");
  element.classList.add("btn-info");
var element = document.getElementById("opt4");
  element.classList.add("btn-info");
      
      
//change que and option when next clicked

       // $("#no").text(n-n)
document.getElementById("no").innerHTML=(n-n)
        e=e+1
        var d=(a[0+e])
        var f=(b[0+e])
        var g=(c[0+e])
        var h=(di[0+e])
        var i=(de[0+e])
        
       // $(".quo").text(d);
document.getElementById("quo").innerHTML=(d)
        //$(".opt1").text(f);
document.getElementById("opt1").innerHTML=(f)
       // $(".opt2").text(g);
document.getElementById("opt2").innerHTML=(g)
       // $(".opt3").text(h);
document.getElementById("opt3").innerHTML=(h)
       // $(".opt4").text(i);
document.getElementById("opt4").innerHTML=(i)
        
    }
    if(nol==no){
        alert("finished")
       clearInterval(downloadTimer);
    }
    
   // })
   
 
   //ques no change
if(qno<no){
qno=qno+1
qn=document.getElementById("quesno")
qn.innerHTML=qno;}

}
 

//})


}

//when click option functions

function pop3(e){
   x1=document.getElementById("tex")
   x1.value=x1.value+5
   myFunction()}

function pop(e){
   x1=document.getElementById("tex")
   x1.value=x1.value+1
   myFunction()
    
}
function pop1(e){
   x1=document.getElementById("tex")
   x1.value=x1.value+3
   myFunction()}
   
function pop2(e){
   x1=document.getElementById("tex")
   x1.value=x1.value+4
   myFunction()}
















function myFunction(){
y=document.getElementById("jumbotron");
y.classList.remove("jumbo")
 
 document.getElementById('next').style.display = 'block'
document.getElementById('check').style.display = 'none'
 
 
var audio = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-correct-17.mp3');
   var audiof = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-incorrect-25.mp3');
 
 
 //$(".opt1").removeClass("btn-info");
 var element = document.getElementById("opt1");
  element.classList.remove("btn-info");

// $(".opt1").addClass("btn-success")
 var element = document.getElementById("opt1");
  element.classList.add("btn-success");
 
// $(".opt2").removeClass("btn-info");
 var element = document.getElementById("opt2");
  element.classList.remove("btn-info");

// $(".opt3").removeClass("btn-info");
 var element = document.getElementById("opt3");
  element.classList.remove("btn-info");

// $(".opt4").removeClass("btn-info");
 var element = document.getElementById("opt4");
  element.classList.remove("btn-info");
 
 
// var n1=$("#no").text()
 var n1=document.getElementById("no").innerHTML 
    n=parseInt(n1)
    if(n==0){
    // var y1=$("#sco").text()
     var y1=document.getElementById("sco").innerHTML
     y2=parseInt(y1)
 x=document.getElementById("tex")
    x1=x.value
    x2=x1.length 
    
 //x3 is the last text in hidden text box
    x3=x1[x2-1]
    if(x3==3){
    document.getElementById('box').style.borderColor = 'brown'
    var y=document.getElementById("wrong");
   y.classList.add("false");
   audiof.playbackRate =2;
    audiof.play();
   
         //$(".opt2").removeClass("btn-info");
  var element = document.getElementById("opt2");
  element.classList.remove("btn-info");  
var element = document.getElementById("opt2");
  element.classList.add("btn-danger");

       //  $(".opt2").addClass("btn-danger");
         //$(".opt3").removeClass("btn-info");
//$(".opt4").removeClass("btn-info");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
var element = document.getElementById("opt4");
  element.classList.remove("btn-info");

    }
    if(x3==5){
    document.getElementById('box').style.borderColor = 'brown' 
    var y=document.getElementById("wrong");
   y.classList.add("false");
     audiof.playbackRate =2;
    audiof.play();
    
      // $(".opt4").removeClass("btn-info");
         //$(".opt4").addClass("btn-danger");
   var element = document.getElementById("opt4");
  element.classList.remove("btn-info");    
  var element = document.getElementById("opt4");
  element.classList.add("btn-danger");
       //  $(".opt2").removeClass("btn-info");
//$(".opt3").removeClass("btn-info");
var element = document.getElementById("opt2");
  element.classList.remove("btn-info");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
    }
    if(x3==4){
    
    document.getElementById('box').style.borderColor = 'brown' 
    var y=document.getElementById("wrong");
   y.classList.add("false");
    audiof.playbackRate =2;
    audiof.play();
    
         //$(".opt3").removeClass("btn-info");
        // $(".opt3").addClass("btn-danger");
var element = document.getElementById("opt3");
  element.classList.remove("btn-info");
var element = document.getElementById("opt3");
  element.classList.add("btn-danger");
       //  $(".opt2").removeClass("btn-info");
        var element = document.getElementById("opt2");
  element.classList.remove("btn-info"); 
//$(".opt4").removeClass("btn-info");
         }
    var element = document.getElementById("opt4");
  element.classList.remove("btn-info");
    
   //if answer true 
    if(x3==1){
       var pos = 0; 
    document.getElementById('box').style.borderColor = 'green'   
       var y=document.getElementById("tick");
   y.classList.add("true");
        audio.playbackRate =2;
         audio.play();
        y2=y2+1
       // $("#sco").text((y2))
       document.getElementById("sco").innerHTML=y2
    }
    

 }
 n=2
    //$("#no").text(n)
 document.getElementById("no").innerHTML=n
    
// })
}


//Which number to multiply
function plus(){
    a=document.getElementById("inp")
    b=parseInt(a.value)
    a.value=b+1
}

function minus(){
    a=document.getElementById("inp")
    b=parseInt(a.value)
    a.value=b-1
}




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
    m=a1*i
    
    
 var para = document.createElement("h4");
para.innerHTML =a1+"*"+i+"&nbsp"+"="+"&nbsp"+ m;
  document.getElementById("num").appendChild(para);
    
    
    i=i+1
    
    
    
        }    
  }
  document.getElementById("clear").addEventListener("click", myFunction1);
function myFunction1(){
    y= document.getElementById("num")
    y.innerHTML=""
    a.value=""
    
    
}
}

