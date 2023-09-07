var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    var _a;
    _a = Calculator;
    Calculator.buttons = document.querySelectorAll(".tecla");
    Calculator.display = document.getElementById("display");
    Calculator.displayValue = "0";
    Calculator.updateDisplay = function () {
        _a.display.textContent = _a.displayValue;
    };
    Calculator.inputDisplay = function (digit) {
        if (_a.displayValue.length >= 8) {
            return; // Limite máximo de 8 dígitos
        }
        if (_a.displayValue === "0")
            _a.displayValue = "";
        _a.displayValue += digit;
        _a.updateDisplay();
    };
    Calculator.start = function () {
        _a.buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var buttonText = button.getAttribute("id");
                _a.inputDisplay(buttonText);
            });
        });
    };
    return Calculator;
}());
Calculator.start();
