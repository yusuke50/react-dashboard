// Web Worker for multiplication calculations
self.onmessage = function (e) {
  console.log('Worker: Message received from main script');

  const data = e.data;

  // Validate input data
  if (!Array.isArray(data) || data.length !== 2) {
    postMessage('Invalid input: Please provide two numbers');
    return;
  }

  const [num1, num2] = data;

  // Convert to numbers and validate
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    postMessage('Invalid input: Please provide valid numbers');
    return;
  }

  const result = number1 * number2;

  console.log('Worker: Posting message back to main script');
  postMessage(result);
};
