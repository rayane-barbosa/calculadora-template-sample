class Calculator {
  // mostrar os valores no display
  private display: HTMLSpanElement;
  private displayValue: string;
  private previousValue: string | null;
  private operator: string | null;
  private waitingForSecondValue: boolean;
  private decimal: boolean;

  constructor() {
    this.display = document.getElementById("display") as HTMLSpanElement;
    this.displayValue = "0";
    this.previousValue = null;
    this.operator = null;
    this.waitingForSecondValue = false;
    this.decimal = false;
    this.updateDisplay();

    const buttons = document.querySelectorAll(".tecla");
    buttons.forEach((button) => {
      button.addEventListener("click", () => this.handleButtonClick(button));
    });
  }

  // atualizar o display
  private updateDisplay() {
    this.display.textContent = this.displayValue;
  }

  private inputDigit(digit: string) {
    if (this.displayValue.length >=8) return;
    if (this.waitingForSecondValue) {
      this.displayValue = digit;
      this.waitingForSecondValue = false;
    } else {
      this.displayValue =
        this.displayValue === "0" ? digit : this.displayValue + digit;
    }

    this.updateDisplay();
  }

  private handleButtonClick(button: Element) {
    const buttonText = button.getAttribute("id");

    switch (buttonText) {
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
    }
  }
}


new Calculator();