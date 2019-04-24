function takeANumber(line, person){
  line.push(person)
  let position = line.length 
  return 'Welcome, ' + person + '. You are number ' + position + ' in line.'
}

function nowServing(katzDeliLine){
  while (katzDeliLine.length){
    let first = katzDeliLine.shift()
    return 'Currently serving ' + first + '.'
  }
  
  return "There is nobody waiting to be served!"
}

function currentLine(line){
  let counter = 1 
  let string = 'The line is currently:  '
  while (line.length){
    
  }
}