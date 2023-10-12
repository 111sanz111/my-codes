
function showStars(row, totalRows){
  if(row > totalRows){
    return;
  }

const stars = "*".repeat(row)
console.log(stars)

showStars(row +  1, totalRows);
}

showStars(2,10)