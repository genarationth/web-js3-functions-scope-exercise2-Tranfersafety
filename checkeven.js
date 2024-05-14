//please in put only integer

const checkEven = function (number) {
  number = number % 2 === 0 ? console.log("even") : console.log("odd");
};

const checkEvenArrow = (number) =>
  (number = number % 2 === 0 ? console.log("even") : console.log("odd"));

checkEven(3);
checkEvenArrow(4);
