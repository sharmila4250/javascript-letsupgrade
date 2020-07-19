var a=prompt("Enter amount of sales")
console. log("sales is"+" "+ a);
var sales;
if(a>=0 && a<=5000){
  sales=0.02*a;
  console. log("Commission is"+sales);
}
else if(a>=5001 && a<=10000){
  sales=0.05*a;
  console. log("Commission is"+sales);
}
else if(a>=10001 && a<=20000){
  sales=0.07*a;
  console. log("Commission is"+sales);
}
else if(a>20000){
  sales=0.1*a;
  console. log("Commission is"+sales);
}
else{
  console. log("Invalid");
}