document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("farenheit");
    const resultInput = document.getElementById("result");
    const convertButton = document.getElementById("convert");
    const resetButton = document.getElementById("reset");
    const reverseButton = document.getElementById("reverse");

    let isCelsiusToFahrenheit = true;

    function convertTemperature() {
        if (isCelsiusToFahrenheit) {
            const celsius = parseFloat(celsiusInput.value);
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9 / 5) + 32;
                fahrenheitInput.value = fahrenheit.toFixed(2);
                resultInput.value = `${celsius}°C × 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                resultInput.value = "Invalid input for Celsius";
            }
        } else {
            const fahrenheit = parseFloat(fahrenheitInput.value);
            if (!isNaN(fahrenheit)) {
                const celsius = (fahrenheit - 32) / 1.8;
                celsiusInput.value = celsius.toFixed(2);
                resultInput.value = `(${fahrenheit}°F - 32) / 1.8 = ${celsius.toFixed(2)}°C`;
            } else {
                resultInput.value = "Invalid input for Fahrenheit";
            }
        }
    }

    function resetFields() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        resultInput.value = '';
    }

    function reverseConversion() {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        resetFields();
        if (isCelsiusToFahrenheit) {
            celsiusInput.placeholder = "Enter Celsius";
            fahrenheitInput.placeholder = "Fahrenheit";
        } else {
            celsiusInput.placeholder = "Celsius";
            fahrenheitInput.placeholder = "Enter Fahrenheit";
        }
    }

    convertButton.addEventListener("click", convertTemperature);
    resetButton.addEventListener("click", resetFields);
    reverseButton.addEventListener("click", reverseConversion);

    // Initialize placeholders
    celsiusInput.placeholder = "Enter Celsius";
    fahrenheitInput.placeholder = "Fahrenheit";
});
