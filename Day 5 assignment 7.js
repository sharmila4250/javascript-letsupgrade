var n=prompt("Enter a number");
var i=0;
var num=0;
var primeNumbers=" ";
     for (i = 1; i<= n; i++)         
       {           
          var counter=0;     
          for(num =i; num>=1; num--){
             if(i%num==0){
             counter = counter + 1;
            }
          }
    if (counter ==2){
     
      primeNumbers = primeNumbers + i + " ";
    }  
       }  
       console. log("Prime numbers from 1 to" +" "+n+" "+ "are :");
       console. log(primeNumbers);