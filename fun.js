// function addTwoNumber(num1,num2){
//     return num1+num2;
// }
// const result=addTwoNumber(5,null)
// console.log(result);
function userName(userName){
  if(userName===undefined){
    console.log("Please enter your name: ");
    return;
  }
  return `${userName} just loggedin`
}
//console.log( userName("sandip"));
function printNum(...num1){
  return num1;
}
//console.log(printNum(2,3,5,6));
let val;
val=5??10??20
console.log(val);
