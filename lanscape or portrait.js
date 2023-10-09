
let measure = isLandScape(700, 800)
console.log(measure)

function isLandScape(width, height){
  return (width < height) ? "portrait" : "landscape" 
}