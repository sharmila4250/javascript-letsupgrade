// Create three elements and fetch one using a tag name, another one using the class name, and
// the last one using id. Display the data on the console and also change the content of the element
// fetched via class name.
var ele=document.getElementsByTagName('h1');
console.log(ele[0].innerText);//fetch using tagname
var ele1=document.getElementsByClassName('first');
console.log(ele1[0].innerText);//fetch using classname
var ele2=document.getElementById('second');
console.log(ele2.innerText);//fetch using ID

ele1[0].innerText="Welcome to Letsupgrade Community";//changed the content of element fetched via class name
