
    let p = document.getElementById('p')
    let input = document.getElementById('input')
    let h1 = document.getElementById('h1')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')

    let plus = "+"
    let subtract = "-"
    let modul = "%"
    let times = "x"
    let div = "/"
  
function arit(val){ 
    let p1Content = p1.textContent.trim();
    let p2Content = p2.textContent.trim();
    let pContent = p.textContent.trim();

if(p1Content === '') {
   p1.innerHTML = val 
   input.value = ''
   }  
 else  if (p1Content == plus){
    let ans =   Number(p.innerHTML) + Number(p2.innerHTML) 
    console.log(val);
    input.value = ans 
    p.innerHTML = ans 
    p1.innerHTML = val
    input.value = ''
    p2.innerHTML = ' ' 
   } 
   else  if (p1.innerHTML == subtract){
    let ans = Number(p.innerHTML) - Number(p2.innerHTML) 
    input.value = ans 
    p.innerHTML = ans 
    p1.innerHTML = val
    input.value = ''
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == modul){
    let ans = Number(p.innerHTML) % Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans 
    p1.innerHTML = val
    input.value = ''
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == div){
    let ans = Number(p.innerHTML) / Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans 
    p1.innerHTML =  val
    input.value = ''
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == times){
    let ans = Number(p.innerHTML) * Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = val
    input.value = ''
    p2.innerHTML = ''  
    }
 
}




 function removeChar() {
    let p1Content = p1.textContent.trim();
    let p2Content = p2.textContent.trim();
    let pContent = p.textContent.trim();
    if (p1Content !== '' && p2Content !== '') {
        p2.innerHTML = p2Content.slice(0, -1);
        input.value =  p2Content.slice(0, -1);
    }
    
    else if (p1Content === '' && p2Content === '' && pContent !== '') {
        p.innerHTML = pContent.slice(0, -1);
        input.value = pContent.slice(0, -1);
    }
}




     



 function square (){
    input.value = Number(p.innerHTML) ** 2
    p.innerHTML = input.value
 }

 function squareRoot(){
    input.value = Math.sqrt((Number(p.innerHTML)))
    p.innerHTML = input.value
 }

 function overX(){
    input.value = 1 / Number(p.innerHTML)
    p.innerHTML = input.value
 }



 function addVal( para) {
if (p1.innerHTML == ' '){
   let  three = input.value += para 
    p.innerHTML = three }
  else if(p1.innerHTML == plus || subtract || modul || times || div){
        let four = input.value += para  
    p2.innerHTML = four

    }
    
 }





 function equal(){
    if (p1.innerHTML == plus){
    let ans = Number(p.innerHTML) + Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = ' '
    p2.innerHTML = ' ' 
    }
  else  if (p1.innerHTML == subtract){
    let ans = Number(p.innerHTML) - Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = ' '
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == modul){
    let ans = Number(p.innerHTML) % Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = ' '
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == div){
    let ans = Number(p.innerHTML) / Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = ' '
    p2.innerHTML = ' ' 
    }
    else  if (p1.innerHTML == times){
    let ans = Number(p.innerHTML) * Number(p2.innerHTML) 
    input.value = ans
    p.innerHTML = ans
    p1.innerHTML = ' '
    p2.innerHTML = ' ' 
    }
 }

function reset(){
    let p1Content = p1.textContent.trim();
    let p2Content = p2.textContent.trim();
    let pContent = p.textContent.trim();
    
    input.value = input.value.slice(0,0);
        p.innerHTML =  pContent.slice(0, 0); 
        p1.innerHTML =  ' ';
        p2.innerHTML =  p2Content.slice(0, 0);
      
}
