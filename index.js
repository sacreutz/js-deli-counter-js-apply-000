function takeANumber(line, person){
  line.push(person)
  let position = line.length 
  return 'Welcome, ' + person + '. You are number ' + position + 'in line.'
  
}