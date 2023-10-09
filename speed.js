//  Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> sus

let speed = 90
console.log(checkSpeed(speed))
function checkSpeed(speed){
  let s = Math.floor((speed - 70) / 5)
  if (s < 1) return "ok"
  return s < 12 ? "point: " + s : "License suspended"
}