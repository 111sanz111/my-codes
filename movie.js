
const movie = {
  title: 'once in Poland',
  releaseYear: '2019',
  rating: '4',
  director: 'Shipilov'
}

showProperties(movie)

function showProperties(obj){
  for(let key in obj){
    typeof obj[key] === 'string' ? console.log(key, obj[key]) :false
  }
}

// if(typeof obj[key] === 'string')
// console.log(key, obj[key])