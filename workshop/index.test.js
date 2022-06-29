test(`Check calculator adds two numbers`, () => {
  equal(calculate(2, "+", 4), 6);
  equal(calculate(2, "+", 7), 9);
});

test(`Check calculator subtracts two numbers`, () => {
  equal(calculate(10, "-", 6), 4);
  equal(calculate(20, "-", 6), 14);
});

test(`Check calculator multiplies two numbers`, () => {
  equal(calculate(10, "*", 6), 60);
  equal(calculate(20, "*", 6), 120);
});

test(`Check calculator divides two numbers`, () => {
  equal(calculate(30, "/", 6), 5);
  equal(calculate(24, "/", 6), 4);
});

test(`Check what happens when non-numerical input provided`, () => {
  equal(calculate("hello", "+", " world"), "hello world");
});

test(`Calculate can handle numbers passed as strings`, () => {
  equal(calculate("4", "*", "20"), 80);
});

test(`Calculater form works correctly`, () => {
  // step 1
  const inputA = document.querySelector("input[name='a']");
  const sign = document.querySelector("#sign");
  const inputB = document.querySelector("input[name='b']");
  //step 2
  inputA.value = "2";
  sign.value = "*";
  inputB.value = "30";
  //step 3
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.click();
  //step 4
  const result = document.querySelector("#result");
  equal(result.textContent, "60"); //step 5
  result.textContent = "";
});
