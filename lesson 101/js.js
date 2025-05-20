//  ===== 1 ========
 
 function username (name) {
  return console.log(`Hello ${name}`)
 }
 username('Мстислав Дуболюб')

//  ==== 2 ======

 const numbers = [1,7,44,9,53,666,2,4,69,10,-12,]

 function numberFunction (array) {
     for(let i = 0;i< array.length;i++){
         if(array[i] > 10) {
             console.log(`${array[i]}`)
        
         }
     }
 }
 numberFunction(numbers);

//  =======  3 ======

const calculator = (numberOne,numberTwo,sign) => {
 if (sign == 'minus') {
    result =  numberOne - numberTwo
    console.log(result)
 }
 else if(sign == 'plus'){
    result = numberOne + numberTwo
    console.log(result)
 }
 else if(sign == 'multiplication'){
    result = numberOne * numberTwo
    console.log(result)
 }
 else if(sign == 'division'){
    result = numberOne / numberTwo
    console.log(result)
 }
}
calculator(1,2,'minus')
calculator(1,2,'plus')
calculator(1,2,'multiplication')
calculator(1,2,'division')