class FizzBuzz {

  isDivisibleBy(divisor, number) {
    return number % divisor === 0;
  }

  play(number){
    if (this.isDivisibleBy(15, number)) {
      return 'FizzBuzz'
    } else if (this.isDivisibleBy(5, number)) {
      return 'Buzz'
    } else if (this.isDivisibleBy(3, number)) {
      return 'Fizz'
    } else {
      return number;
    }
  }
}
