let ask=(question,yes, no)=>{
  if(confirm(question)){
    yes()
    }
  else{
    no();
    }
}
ask(
  "Do u agree? ", 
  function(){
    alert("You agreed");
  }, 
  function(){
    alert("You cancelled the execution");
  }
)