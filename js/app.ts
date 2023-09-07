class Calculator {
  static buttons = document.querySelectorAll(".tecla");
  static display = document.getElementById("display") as HTMLSpanElement;

  static displayValue: string = "0";

  static updateDisplay = () => {
    this.display.textContent = this.displayValue;
  };

  static inputDisplay = (digit: string) => {
    if (this.displayValue.length >= 8) {
      return; 
    }

    if (this.displayValue === "0") this.displayValue = "";
    this.displayValue += digit;

    this.updateDisplay();
  };

  static start = () => {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.getAttribute("id");

        this.inputDisplay(buttonText!);
      });
    });
  };
}

Calculator.start();