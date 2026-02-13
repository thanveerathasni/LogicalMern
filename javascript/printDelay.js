// Print numbers 1 to 5 with 1-second delay (no setInterval)



let i  =0 

 let interval = setInterval(()=>{
  console.log(i)
  i++
},1000)

if(i>=10){
  
  clearInterval(interval)
}










// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }













