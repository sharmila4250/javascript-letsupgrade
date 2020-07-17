var str=prompt("Enter os name and version");
var val1=console.log(str);
var val2=(str.substring(0,7));
var val3=(str.substring(8,9));
if(str.indexOf(" ")>=0){
    console.log("The OS name is"+" " +val2+" "+"and version name is"+" " +val3);
    }