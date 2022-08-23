function greetMessage(name) {
    
  return `Good morning, ${name}`;
}

console.log(greetMessage("John")); // print "Good Morning, John"



function greetUsers(array, func) {


  return array.map((t) => func(t));
}

console.log(greetUsers(["John", "Peter", "Mark"], greetMessage))
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"

