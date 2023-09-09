class Calculator {
  private display: HTMLSpanElement;
  private displayValue: string;
  private previousValue: string | null;
  private operator: string | null;
  private waitingForSecondOperand: boolean;
  private decimalEntered: boolean;

  constructor() {
    this.display = document.getElementById("display") as HTMLSpanElement;
    this.displayValue = "0";
    this.previousValue = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
    this.decimalEntered = false;
    this.updateDisplay();

    const buttons = document.querySelectorAll(".tecla");
    buttons.forEach((button) => {
      button.addEventListener("click", () => this.handleButtonClick(button));
    });
  }

  private updateDisplay() {
    this.display.textContent = this.displayValue;
  }

  private inputDigit(digit: string) {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue =
        this.displayValue === "0" ? digit : this.displayValue + digit;
    }

    this.updateDisplay();
  }


  private clearDisplay() {
    this.displayValue = "0";
    this.previousValue = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
    this.decimalEntered = false;
    this.updateDisplay();
  }


  private inputDecimal() {
    if (!this.decimalEntered) {
      this.displayValue += ".";
      this.decimalEntered = true;
    }
  }



  private handleButtonClick(button: Element) {
    const buttonText = button.getAttribute("id");

    switch (buttonText) {
      case "on":
        this.clearDisplay();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.inputDigit(buttonText);
        break;
      case "ponto":
        this.inputDecimal();
        break;
    }
  }
}

new Calculator();
