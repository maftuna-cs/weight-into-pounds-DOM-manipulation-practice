let button = document.getElementById("calWeightBut");



button.addEventListener("click",function (){

  let userName =  document.getElementById("Name").value;

  let weightKg = parseFloat(document.getElementById("weight").value);

  let result= weightKg* 2.2;


  alert(`${userName} weight in lbs is ${result.toFixed(2)}`);
  
  
})