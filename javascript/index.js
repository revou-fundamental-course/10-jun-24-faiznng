document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("farenheit");
    const resultInput = document.getElementById("result");
    const convertButton = document.getElementById("convert");
    const resetButton = document.getElementById("reset");
    const reverseButton = document.getElementById("reverse");

    let stateHistory = [];
    let currentStateIndex = -1;

    function saveState() {
        const state = {
            celsius: celsiusInput.value,
            fahrenheit: fahrenheitInput.value,
            result: resultInput.value
        };

        if (currentStateIndex === -1 || JSON.stringify(stateHistory[currentStateIndex]) !== JSON.stringify(state)) {
            stateHistory = stateHistory.slice(0, currentStateIndex + 1); // Remove any future states if any
            stateHistory.push(state);
            currentStateIndex++;
        }
    }

    function restoreState() {
        if (currentStateIndex > 0) {
            currentStateIndex--;
            const state = stateHistory[currentStateIndex];
            celsiusInput.value = state.celsius;
            fahrenheitInput.value = state.fahrenheit;
            resultInput.value = state.result;
        }
    }

    function convertTemperature() {
        saveState();

        let celsius = parseFloat(celsiusInput.value);
        let fahrenheit = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsius) && celsiusInput.value !== '') {
            fahrenheit = (celsius * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
            resultInput.value = `${celsius}°C × 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
        } else if (!isNaN(fahrenheit) && fahrenheitInput.value !== '') {
            celsius = (fahrenheit - 32) * 5 / 9;
            celsiusInput.value = celsius.toFixed(2);
            resultInput.value = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
        }

        saveState();
    }

    function resetFields() {
        saveState();
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        resultInput.value = '';
        saveState();
    }

    function reverseConversion() {
        restoreState();
    }

    convertButton.addEventListener("click", convertTemperature);
    resetButton.addEventListener("click", resetFields);
    reverseButton.addEventListener("click", reverseConversion);

    // Initialize with default state
    saveState();
});
