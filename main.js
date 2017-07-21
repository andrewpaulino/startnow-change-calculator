// Write your JavaScript here
function calculateChange(){
var total = parseFloat(document.getElementById("amount-due").value)
var userInput = parseFloat(document.getElementById("amount-received").value)
var remainder = userInput - total
var Dollars = 0
var Quarters = 0
var Dimes = 0
var Nickels = 0
var pennies = 0
console.log('remainder', remainder)
  
/*Finds the Dollar amount, first if statment decides if whole # or not. */
if(remainder % 1 === 0){               
        Dollars = remainder
}else{
       /*Goes through process of getting remainder and subtracting from amound then declaring amount of quarters */ 
        var amountDollar = remainder % 1                                
        Dollars = remainder - amountDollar
        remainder = amountDollar 
        }
        console.log(Dollars, remainder)
/*Goes through same if statment to determine if whole number */      
if(remainder % 1 === 0){
        
}else{
        /*Same process, except now with .25 (Quarter) and getting module of .25 and subtracting to get Quarters */
        var newChange = remainder % .25 
        var QuarterCalculation = remainder - newChange              
        var Quarters = QuarterCalculation   /  .25
        remainder = newChange  
        console.log(Quarters, remainder)          
    }
 /*Same process */   
if(remainder % 1 === 0){
     
}else{
        /*Same process with remainder changing every time to fit each type of coin and fit within */
        var changeRevision = remainder %  .10            
        var dimeCalculation = remainder - changeRevision
        var Dimes = dimeCalculation / .10 
            remainder = changeRevision 
        
        console.log(Dimes, remainder)
        
    }
    
if(remainder % 1 === 0){
       
 }else{
        /*Goes through with getting modulo and dividing to gain Nickels count */
        var changeRevision2 = remainder % 0.05            
        var nickelCalculation = remainder - changeRevision2
        var Nickels = nickelCalculation / 0.05
            remainder = changeRevision2 
          
          console.log(Nickels, remainder)
    }
    
if(remainder % 1 === 0){
       
}else{

        var changeRevision3 = remainder 
        
        var pennies = (changeRevision3 / 0.01).toFixed(0)
            remainder = changeRevision3
            
            console.log(pennies, remainder)
     }

document.getElementById("dollars-output").innerHTML =  Dollars
document.getElementById("quarters-output").innerHTML =  Quarters
document.getElementById("dimes-output").innerHTML =  Dimes
document.getElementById("nickels-output").innerHTML =  Nickels
document.getElementById("pennies-output").innerHTML =  pennies 
}

document.getElementById('calculate-change').onclick = function() {calculateChange()};

