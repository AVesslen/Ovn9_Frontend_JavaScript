
const form=document.querySelector('#numberInputForm'),      
      bishNumber=document.querySelector('#bishNumber'),
      boshNumber=document.querySelector('#boshNumber'),
      lastNumber=document.querySelector('#lastNumber');


form.addEventListener('submit', (e)=>{  
  e.preventDefault();
 
const bish=bishNumber.value;
const bosh=boshNumber.value;
const last=lastNumber.value;

printBishBoshSequence(bish,bosh,last); 
})


function printBishBoshSequence(bishNumber, boshNumber, lastNumber) {   
  output.innerHTML='';   
    for (let i=1; i<=lastNumber; i++) {        
        if(i%bishNumber===0 && i%boshNumber===0) output.innerHTML+='Bish-Bosh, '
        else if(i%bishNumber===0) output.innerHTML+='Bish, '
        else if(i%boshNumber===0) output.innerHTML+='Bosh, '
        else output.innerHTML+=`${i}, `;  
  }
}




