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
    this.previousValue = "";
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

  private performOperation(nextOperator: string) {
    const inputValue = parseFloat(this.displayValue);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      return;
    }

    if (this.previousValue !== null) {
      switch (this.operator) {
        case "soma":
          this.previousValue = (
            parseFloat(this.previousValue) + inputValue
          ).toString();
          this.displayValue = this.previousValue;
          this.updateDisplay();
          break;
        case "menos":
          this.previousValue = (
            parseFloat(this.previousValue) - inputValue
          ).toString();
          this.displayValue = this.previousValue;
          this.updateDisplay();
          break;
        case "multiplica":
          this.previousValue = (
            parseFloat(this.previousValue) * inputValue
          ).toString();
          this.displayValue = this.previousValue;
          this.updateDisplay();
          break;
        case "divide":
          if (inputValue !== 0) {
            this.previousValue = (
              parseFloat(this.previousValue) / inputValue
            ).toString();
            this.displayValue = this.previousValue;
            this.updateDisplay();
          } else {
            this.displayValue = "Error";
            this.updateDisplay();
            return;
          }
          break;
        default:
          break;
      }
    } else {
      this.previousValue = this.displayValue;
    }

    this.displayValue = this.previousValue;
    this.waitingForSecondOperand = true;
    this.operator = nextOperator;
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
      case "mais":
        this.performOperation("soma");
        console.log("soma");
        break;
      case "menos":
        this.performOperation("menos");
        console.log("menos");
        break;
      case "dividido":
        this.performOperation("divide");
        console.log("divide");
        break;
      case "multiplica":
        this.performOperation("multiplica");
        console.log("multiplica");
        break;
      case "igual":
        this.performOperation("igual");

        console.log("igual");
        break;
    }
  }
}

new Calculator();
