describe('FizzBuzz', () => {

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', () => {
    it('fizzes for 3', () => {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('fizzes for 6', () => {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', () => {
    it('buzzes for 5', () => {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('buzzes for 10', () => {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', () => {
    it('fizzbuzzes for 15', () => {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it('fizzbuzzes for 30', () => {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('all other numbers', () => {
    it('1 for 1', () => {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('11 for 11', () => {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});
