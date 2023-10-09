
// 0,2,4,ETC + "EVEN"
// 1,3,5,ETC + "ODD"

// showNumbers(10)

// function showNumbers(limit){
//   for(let i = 0; i <= limit; i++){
//     if(i % 2 == 0)
//     console.log(i + "even")
//   else {
//     (i % 2 !==0)
//     console.log(i + "odd")
//   }
//   }
// }

function showNumbers(limit){
  for (let i = 0; i <= limit; i++)
  console.log(i + (i % 2 ? " odd" : " even"))
}
