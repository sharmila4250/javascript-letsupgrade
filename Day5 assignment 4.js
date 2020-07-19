var a=prompt("Enter first number");
var b=prompt("Enter operator");
var c=prompt("Enter second number");
var res; 
if(b=="+"){
res=Number(a)+Number(c);
console.log(res);
}
else if(b=="-"){
res=Number(a)-Number(c);
console.log(res);
}
else if(b=="*"){
res=Number(a)*Number(c);
console.log(res);
}
else if(b=="/"){
res=Number(a)/Number(c);
console.log(res);
}
else if(b=="%"){
res=Number(a)%Number(c);
console.log(res);
}
else if (b=="√"){
res=Number(Math.sqrt(a));
console.log(res);
}
else{
console. log("Invalid")
}