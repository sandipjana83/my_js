const myobj={
  name:"sandip",
  "full name":"sandip jana",
  ["girl"]:"koyel",
  age:18,
  isLogged:false,
  Loggedday:["monday","sat"],
}

// console.log(myobj.name);
// console.log(myobj["full name"]);
// console.log(myobj["girl"]);
// console.log(myobj.isLogged);

// myobj.greeting=function(){
//   console.log(`hello ${this["full name"]}`)
// }
//console.log(myobj.greeting());
const my_details={
  name:"sandip",
  username:{
    father:"nandan jana",
    details:{
      age:45,
      email:"njana7001@gmail.com"
    }
  }
}
console.log(my_details.username.details.email);
