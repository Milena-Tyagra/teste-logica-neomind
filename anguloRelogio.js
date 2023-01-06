const actualDate = new Date();
const hours = actualDate.getHours();
const minutes = actualDate.getMinutes();
let angle = angleBetweenPointers(hours, minutes)

function hoursToPmFormat (hours) {
  return hours > 12 ? hours - 12 : hours
}

function angleBetweenPointers (hours, minutes) {
  hours = hoursToPmFormat(hours)
  const degreesMinute = 360 / 60
  const numberHourInMinutes = hours * 5
 
  let degrees = 0
 
  if (numberHourInMinutes !== minutes) {
    let diference = numberHourInMinutes - minutes
    let formatedDiference = Math.sign(diference) === -1 ? (diference)*(-1) : diference
    degrees = formatedDiference * degreesMinute
  }
 
  return degrees + "°"
}
