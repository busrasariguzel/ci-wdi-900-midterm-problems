function isEvenlyDivisible(num1 , num2) {
  
  if(num1 % num2 ===0){
    return true
  }
  else {

    return false
  }


  
}

function halfSquare(number) {
  return ((number * number) / 2)
}

function isLong(str) {
  if (str.length >= 15){
    return true
  }
  else if (str.length < 15){
    return false
  }
}

function exclaim(str) {
  if (str[str.length-1] === '!'){
  return str
  }
  else if (str[str.length-1] !== '!')
  return str + '!'
  else if (str[i] === '!'){
    str.spice(str.length, -1)
  
  return str[str.length-i]
  }
}

function countWords(str) {
  let i =1
  // let count = 0
  for (let count=1; count<str.length;count++){
  if (str[i] === ' '){
    count ++
  }
  if (str[i] === str[0]){
    count ++
  }
  

  
return count
  }
}


function containsDigit(str) {

  for (let i=0; i<str.length;i++){
  if ('1234567890'.includes(str[i])){
    return true}
  
  // if ('1234567890'.includes(str[i]) && 'qwertyuiopasdfghjklzxcvbnm'.includes(str[i])){
  //   return true
  // }
  
  // else {
  //   return false
  // }
  
}
return false
}

  // if ('1234567890'.includes(str[i]) && 'qwertyuiopasdfghjklzxcvbnm'.includes(str[i])){
  //   return true
  // }
  // else if ('qwertyuiopasdfghjklzxcvbnm'.includes(str[i])){
  //   return false
  // }
  // else if (' '.includes(str[i])){
  // return false
  // }
  // else if ('1234567890qwertyuiopasdfghjklzxcvbnm'.includes(str[i])){
  //   return true
  // }

// else if (str === ''){
//   return false}
//   else{
//     return false
//   }





function containsLowerCase(str) {
  for (let i=0; i<str.length;i++){
    if ('qwertyuiopasdfghjklzxcvbnm'.includes(str[i])) {
      return true
    // } else if ('QWERTYUIOPASDFGHJKLZXCVBNM'.includes(str[i])) {
    //   return false
    // } else if ('!@#$%^&*()-_?'.includes(str[i])){
    //   return false
    // } else if (str[i] === ''){
    //   return false
    // }
    // else {
    //   return false
    // }
}
  }
return false
}



function containsUpperCase(str) {
  for (let i=0; i<str.length;i++){

  
    // if ('qwertyuiopasdfghjklzxcvbnm'.includes(str[i])) {
    //   return false
    if ('QWERTYUIOPASDFGHJKLZXCVBNM'.includes(str[i])) {
      return true}
    // } else if ('!@#$%^&*()-_?'.includes(str[i])){
    //   return false
    // } else if (str[i] === ''){
    //   return false
    
    
      
    
}
return false
}

function containsNonAlphanumeric(str) {
for (let i=0; i<str.length;i++){
  if ('!@#$%^&*()-_?`. '.includes(str[i])){
    return true}
    
}
return false
}

function containsSpace(str) {
for (let i=0; i<str.length;i++){
  if (' '.includes(str[i])){
    return true
  }
  
  }
return false
}
  // let count = 0
  // for (let i =0; i<str.length; i++){
  // if ('!@#$%^&*()-_?'.includes(str[i])){
    


  // }
  // else {
  //   return false
  // }
  // }


function digits(number) {
let arr = [number]
const newArr = []
arr.join().split('')

for (let i = 0;i<arr.length;i++){
  if (arr[i] < 0){
    newArr.push(arr[i] * -1)
  }
  else if (arr[i] >= 0){
    newArr.push(arr[i])
  }


}
return newArr
}
//   const newArr =[number]
//   // for (let i = 0;i<arr.length;i++)
//   // if (number > 0){
//   //   newArr.push(number)
//   // }
//   // return newArr
//   if (number>=0 && number <10) {
//     return newArr
//   }
//   else if (number<0){
//     return newArr*-1
//   }
// // return newArr


function truncate(str) {
  if (str.length < 15)
  return str
  else{
  return str.slice(0,8) + '...'
}
}

function isValidPassword(str) {
  for (let i=0; i<str.length;i++){
  if('qwertyuiopasdfghjklzxcvbnm'.includes(str[i]) && 'QWERTYUIOPASDFGHJKLZXCVBNM&&'.includes(str[i]) && '1234567890'.includes(str[i]) && '!@#$%^&*()-_?.`'.includes(str[i]) && str[i] !== ' '){
    
    return true
  }
}
return false
}
  // if ('1234567890'.includes(str[i])){
  //   return false
  // }
  // if (' '.includes(str[i])){
  //   return false
  // }



function onlyPunchy(arr) {
const newArr = []
for (let i=0; i<arr.length; i++){
  if (arr[i].length < 15){
  newArr.push(arr[i])
  }
    if (arr[arr.length- 1] !== '!'){
  return arr[i] + '!'} 
  
}

return newArr
}



module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}