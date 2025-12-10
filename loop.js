// const arr=new Array(2,6,5,8,11)
// for(const num of arr){
//   console.log(num);
// }
// const greeting="Hello World"
// for(const greet of greeting){
//   console.log(greet);
  
// }
const map=new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"INDIA")
// console.log(map);
for(const [key,value] of map){
  console.log(`${key} :- ${value}`);
}

const myobj={
  game:'Free Fire',
  game1:'BGMI',
}

// const code=["js","rubby","java","python"]
// const values=code.forEach((item)=>{
//   console.log(item);
  
// })

const myNum=[1,2,3,4,5,6]
const newNum=myNum.filter(num=> num<4)
console.log(newNum);
