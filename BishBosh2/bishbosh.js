const form=document.querySelector('#numberInputForm'),
      button=document.querySelector('#formBtn');
//bishNumber=document.querySelector("#bishNumber").value,
//boshNumber=document.querySelector('#boshNumber').value,
//lastNumber=document.querySelector('#lastNumber').value,


form.addEventListener('submit', (e)=>{  
  e.preventDefault();
 
const bish=e.target[0].value;
const bosh=e.target[1].value;
const last=e.target[2].value;
//bish.classList.add('error');
//console.log(bish)
let sequenceArray=getBishBoshSequence(bish,bosh,last); 

output.innerHTML='';
for (let item of sequenceArray) {
    output.innerHTML+=item +'<br/>';
} 
})


function getBishBoshSequence(bishNumber, boshNumber, lastNumber) {   // Returns an array with numbers/Bish/Bosh..
  // const bish = Number.parseInt(bishNumber);
  //const bish = +bishNumber;
  //console.log(typeof bish)
  //console.log(bish)
  //if(bish === NaN){}
  
  let result=new Array();    
    for (let i=1; i<=lastNumber; i++) {        
        if(i%bishNumber===0 && i%boshNumber===0) result.push('Bish-Bosh'); 
        else if(i%bishNumber===0) result.push('Bish')
        else if(i%boshNumber===0) result.push('Bosh');
        else result.push(i);
  }
  return result;
}




/*values.forEach(function(item){
  console.log(item);
});

button.addEventListener('click', function() {
const resultat=document.querySelector('resultat');
resultat.classList.remove('d-none');
});*/

/*form.addEventListener('submit', (e) => {
      e.preventDefault();   
      
      output.innerHTML += `<p>${e.target[0].value}</p>`;
      e.target.reset();  
  })*/

  /*button.addEventListener('click', function(e){
             alert('eventet triggades');
         })*/