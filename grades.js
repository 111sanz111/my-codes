
// 1-59 - F
// 60-69 - D
// 70-79 - C
// 80-89 - B
// 90-100 - A

function calculateGrades(marks) {
  const sum = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  const count = marks.length
  const average = sum / count

  if (average >= 1 && average <= 59) {
    return "F"
  } else if (average >= 60 && average <= 69) {
    return "D"
  } else if (average >= 70 && average <= 79) {
    return "C"
  } else if (average >= 80 && average <= 89) {
    return "B"
  } else if (average >= 90 && average <= 100) {
    return "A"
  }
}

const marks = [90, 90, 80]
const grade = calculateGrades(marks)
console.log(grade)