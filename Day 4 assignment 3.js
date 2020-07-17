console.log("question 3");
marks=prompt("enter marks");
console.log(marks);
let result=( marks <=60&&marks>50)?console.log("grade A"):(marks<=50&&marks>40)?console.log ("grade B"):(marks<=40&& Marks >30)? console.log("grade C"):(marks<=30&&marks>20)?console.log("grade is D"):(matks<=20&&marks>10)?console.log("grade E"):console.log("grade F");
  
marks=marks/10;
switch(marks)
{
 
  case 6: console.log("grade A");
  break;
  
 
  case 5: console.log("grade B");
  break;
  
  
 
  case 4: console.log("grade C");
  break;
  
 
  case 3: console.log("grade D");
  break;
  
 
  case 2: console.log("grade E");
  break;
 
  case 1: console.log("grade F");
  break;
  default: console.log ("grade g")}
  
  
  