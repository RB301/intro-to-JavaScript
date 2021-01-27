describe('FizzBuzz', function() {

    var fizzBuzz;
    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
  
});
  
    describe('multiples of 3 & 5', function() {
        it('fizzbuzzes for 15', function() {
          expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
        });

      it('fizzes for 3', function() {
        expect(fizzBuzz.play(3)).toEqual('Fizz');
      });
  
      it('buzzes for 5', function() {
        expect(fizzBuzz.play(5)).toEqual('Buzz');
      });
    });
});