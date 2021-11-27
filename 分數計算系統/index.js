// DOM
const sujectchangDOM = document.getElementById('sujectchang')
const fractionDOM = document.getElementById('Fraction')
const addbtnDOM = document.getElementById('addbtn')
const box1DOM= document.getElementById('box1')
const box2DOM= document.getElementById('box2')
const box3DOM= document.getElementById('box3')
const box4DOM= document.getElementById('box4')
const box5DOM= document.getElementById('box5')
const btn1= document.getElementById('btn1')
const btn2= document.getElementById('btn2')
const btn3= document.getElementById('btn3')
const btn4= document.getElementById('btn4')
const btn5= document.getElementById('btn5')
const b1= document.getElementById('b1')
const b2= document.getElementById('b2')
const b3= document.getElementById('b3')
const b4= document.getElementById('b4')
const b5= document.getElementById('b5')
var qq = false
//分數輸入欄變數
var suject = 'null'  
// 分數陣列
var chineseArray = [] 
var mathArray = [] 
var englishArray = [] 
var scienceArray = [] 
var societyArray = []  
function sujectChang(){
   suject = sujectchangDOM.value
}
function add(){
   var ww = false
   var fraction=fractionDOM.value
   if (suject == "null"){
   alert('請選擇科目')
   }else if (fraction === ""){
      alert('請輸入分數')
   }else{
      ww=true
   }
   Number(fraction)
   if (fraction>=0 && fraction<101 && ww === true){
       if(suject==='chinese'){
       chineseArray.push(fraction)
       box1DOM.innerHTML="<div class='indox'>"+fraction+"</div>"+box1DOM.innerHTML
       console.log(chineseArray)
       }else if(suject==='math'){
           mathArray.push(fraction)
           box2DOM.innerHTML="<div class='indox'>"+fraction+"</div>"+box2DOM.innerHTML
           console.log(mathArray)
       }else if(suject==='english'){
           englishArray.push(fraction)
           box3DOM.innerHTML="<div class='indox'>"+fraction+"</div>"+box3DOM.innerHTML
           console.log(englishArray)
       }else if(suject==='science'){
           scienceArray.push(fraction)
           box4DOM.innerHTML="<div class='indox'>"+fraction+"</div>"+box4DOM.innerHTML
           console.log(scienceArray)
       }else if(suject==='society'){
           societyArray.push(fraction)
           box5DOM.innerHTML="<div class='indox'>"+fraction+"</div>"+box5DOM.innerHTML
           console.log(societyArray)
       }else if(suject==='NULL'){
           alert('請選擇科目')
       }
   }else if(ww===true){
       alert('分數錯誤，請重新輸入')
   }
}

function btna(){
   if (chineseArray.length==0){
      alert('您尚未添加任何國文分數')
   }else{
      var chinesetotal=0
      for (var i=0;i<chineseArray.length;i++){
         chinesetotal=Number(chineseArray[i])+chinesetotal
      }
      b1.innerHTML="平均是"+chinesetotal/chineseArray.length+"分"
      }
   
}//國語

function btnb(){
   if (mathArray.length==0){
      alert('您尚未添加任何數學分數')
   }else{
      var mathtotal=0
   for (var i=0;i<mathArray.length;i++){
      mathtotal=Number(mathArray[i])+mathtotal
   }
   b2.innerHTML="平均是"+mathtotal/mathArray.length+"分"
   }
}//數學

function btnc(){
   if(englishArray.length==0){
      alert('您尚未添加任何英文分數')
   }else{
      var englishtotal=0
   for (var i=0;i<englishArray.length;i++){
      englishtotal=Number(englishArray[i])+englishtotal
   }
   b3.innerHTML="平均是"+englishtotal/englishArray.length+"分"
   }
}//英文

function btnd(){
   if(scienceArray.length==0){
      alert('您尚未添加任何自然分數')
   }else{
     var sciencetotal=0
   for (var i=0;i<scienceArray.length;i++){
      sciencetotal=Number(scienceArray[i])+sciencetotal
   }
   b4.innerHTML="平均是"+sciencetotal/scienceArray.length+"分" 
   }
   
}//自然

function btne(){
   if(societyArray.length==0){
      alert('您尚未添加任何社會分數')
   }else{
    var societytotal=0
   for (var i=0;i<societyArray.length;i++){
      societytotal=Number(societyArray[i])+societytotal
   }
   b5.innerHTML="平均是"+societytotal/societyArray.length+"分"  
   }
   
}//社會