var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.display = document.getElementById("display");
        this.displayValue = "0";
        this.previousValue = null;
        this.operator = null;
        this.waitingForSecondOperand = false;
        this.decimalEntered = false;
        this.updateDisplay();
        var buttons = document.querySelectorAll(".tecla");
        buttons.forEach(function (button) {
            button.addEventListener("click", function () { return _this.handleButtonClick(button); });
        });
    }
    Calculator.prototype.updateDisplay = function () {
        this.display.textContent = this.displayValue;
    };
    Calculator.prototype.inputDigit = function (digit) {
        if (this.waitingForSecondOperand) {
            this.displayValue = digit;
            this.waitingForSecondOperand = false;
        }
        else {
            this.displayValue =
                this.displayValue === "0" ? digit : this.displayValue + digit;
        }
        this.updateDisplay();
    };
    Calculator.prototype.clearDisplay = function () {
        this.displayValue = "0";
        this.previousValue = null;
        this.operator = null;
        this.waitingForSecondOperand = false;
        this.decimalEntered = false;
        this.updateDisplay();
    };
    Calculator.prototype.inputDecimal = function () {
        if (!this.decimalEntered) {
            this.displayValue += ".";
            this.decimalEntered = true;
        }
    };
    Calculator.prototype.handleButtonClick = function (button) {
        var buttonText = button.getAttribute("id");
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
                break;
        }
    };
    return Calculator;
}());
new Calculator();
