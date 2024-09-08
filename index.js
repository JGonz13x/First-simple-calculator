const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "Syntax Error") {
    clearDisplay();
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax Error";
  }
}
