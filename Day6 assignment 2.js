console.log("OOPS IN JS");

   class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins = 0;
      this.courses = [];
    }
    
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }
addCoin(user) {    
 var count1=++this.coins;
 console. log(user,"coins:"+count1);
 }

 deleteCoin(user){
  var count= --this.coins;
  console.log(user,"coins:"+count);
    
 }
    }

class Admin extends Moderator{
constructor(name,age,email,work){
        super(name,age,email);
        this.work= work;
    }
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   
  deleteCourse(user){
     user.courses.pop();
     console. log(user);
     
   }
}


let user1 = new User('Dilip',25,'dilip@gmail.com');
let user2 = new User('Krishnan',24,'k@gmai.com');
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com','teaching');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


mod.addCoin(user2);
mod.addCoin(user2);
mod.addCoin(user2);
mod.deleteCoin(user2);

admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1, 'Html');
admin.deleteCourse(user1);