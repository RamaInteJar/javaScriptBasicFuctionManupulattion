const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//get input from the input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generate and writew calcultion log
function creatAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc}${operator}${CalcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult

  }
  logEntries.push(logEntry); // adding a new number
  console.log(logEntry.operation);
  console.log(logEntries);
}

const addNumbers = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  creatAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult)
};

// currentResult = addNumbers(2, 4);

// let calculationDescription = `( ${defaultResult}+ 10)*30/2-1`;

// outputResult(currentResult, calculationDescription);
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  creatAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  creatAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);

}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  creatAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", addNumbers);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
