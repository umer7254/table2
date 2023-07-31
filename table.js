


function table(){
   
let A=document.getElementById('start').value
let B=document.getElementById('end').value  
let y=document.getElementById('nuntable').value
document.getElementById('output').innerHTML=' '
      for (let x=A; x<B;x++)
     
document.getElementById('output').innerHTML+=
// "$x" +x+" = "+x*2+"<br/>";
`${y}x${x}=${x*y} <br>`

 }