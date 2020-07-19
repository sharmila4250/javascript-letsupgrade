const student={
  name:'helsinki',
  age:24,
  projects:{
    dicegame:"two player dicegame using javascript"}
}
let{name,age,projects:{dicegame}}=student;
console.log(name,age,dicegame);