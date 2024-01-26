// JavaScript me call() method ek function ke context me kisi aur object ko use karne ka ek tareeka hai. 

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // functionName.call(context, arg1, arg2, ...);
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);