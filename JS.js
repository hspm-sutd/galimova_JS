let sum = 0;
parseInt (sum);
let num = prompt('Enter numbers separated by spaces');
let arr = num.split(' ');

for (let i=0; i<arr.length; i++) {
   sum = sum + parseInt(arr[i]);}
   alert('sum = ' + (sum));

function Click1() {
   document.body.style.fontFamily = 'Times New Roman';
   document.body.style.color = "blue";};

function Click2() {
   document.getElementById('div1').style.background = "linear-gradient(LightCoral, Red)";
   document.getElementById('text1').style.background = "white";
   document.getElementById('text1').style.mixBlendMode = "screen";
   document.getElementById('text1').style.color = "black";};
