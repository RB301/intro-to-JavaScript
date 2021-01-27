class FizzBuzz {

     play(i) {
      
    if(i % 15 == 0) {
    return ("FizzBuzz") 

    }
    else if(i % 3 == 0) {
    return ("Fizz")
    }
  
  else if(i % 5 == 0) {
  return ("Buzz")
  }
  else {
    return (i);
  }
  
}
}

var fizzBuzz = new FizzBuzz();

for(var i = 1; i <= 20; i++) {
  // i++ = upto(100) counter method
  console.log(fizzBuzz.play(i));
}
