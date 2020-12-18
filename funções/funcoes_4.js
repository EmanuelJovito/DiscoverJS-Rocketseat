// function scope  
let subject;

createThink = () => {
  subject = "study"
  return subject 
}

console.log(subject)
console.log(createThink())
console.log(subject)