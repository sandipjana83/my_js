const book=[
  {
    sub:"history",
    edition:1993,
    price:500,  
  },
  {
    sub:"math",
    edition:1953,
    price:700,  
  },
  {
    sub:"physics",
    edition:2001,
    price:1500,  
  },
  {
    sub:"history",
    edition:2000,
    price:900,  
  }
]
// const newBook=book.filter(bk => {
//    return bk.sub >="history" && bk.price===900

// })
// console.log(newBook);
// const myNum=[1,2,3,4,5,6,7,8]
// const newNum=myNum.map(num => num+10)
// console.log(newNum);
// const myNum=[1,2,3]
// const mytotal=myNum.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc+currval
    
// },2)
const mycartval=book.reduce((acc,bk)=>(acc+bk.price),0)
console.log(mycartval);
