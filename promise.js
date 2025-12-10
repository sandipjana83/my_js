const promiseOne= new Promise(function(resolve,reject){
  setTimeout(function(){
    // console.log('Async task is completed');
    resolve({username:'sandip83',email:'sandip2024@gmail.com'})
    
  },1000);
})

promiseOne.then(function(user){
  // console.log('promise consumed');
 // console.log(user);
  
})

const promiseFour= new Promise(function(resolve,reject){
  setTimeout(function(){
    let err=false;
    if(!err){
      resolve({Username :'Sandip',Password:'123'})
    }else{
      reject('Error:Something went wrong');
    }
  },1000)
})

promiseFour.then((user)=>{
  console.log(user);
  return user.Password; 
}).then((username)=>{
  console.log(username); 
}).catch((error)=>{
  console.log(error);
})

const promiseFive= new Promise(function(resolve,reject){
  setTimeout(function(){
    let err=true;
    if(!err){
      resolve({Username :'Somu',Password:'jana2022#'})
    }else{
      reject('Error:Something gone a wrong');
    }
  },1000)
});

async function consumePromise() {
  try{
  const response =await promiseFive;
  console.log(response);
  }
  catch(err){
    console.log(err);
    
  }
}
consumePromise()

// async function getDetails() {
//   try{
//     const response=await fetch('https://api.github.com/users/sandipjana83');
//     const data= await response.json();
//     console.log(data);
    
// }
// catch(err){
//   console.log(err);
// }
// }
// getDetails()

fetch('https://api.github.com/users/sandipjana83')
.then((response)=>{
  return response.json();
})
.then((data)=> console.log(data.name)
)
.catch(function(err){
  console.log(err);
})