let counterElement = document.getElementById("counterValue");

function decrease() {
    let presentcounterValue = counterElement.textContent;
    let updcounterValue = parseInt(presentcounterValue) - 1;
    counterElement.textContent = updcounterValue
    if (updcounterValue > 0) {
        counterElement.style.color = "green"
    } else if (updcounterValue < 0) {
        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"

    }

}

function reset() {
    let presentcounterValue = counterElement.textContent;
    let updcounterValue = 0;
    counterElement.textContent = updcounterValue
    if (updcounterValue > 0) {
        counterElement.style.color = "green"
    } else if (updcounterValue < 0) {
        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"

    }
}

function increase() {
    let pcounterValue = counterElement.textContent;

    let updcounterValue = parseInt(pcounterValue) + 1;
    counterElement.textContent = updcounterValue
    if (updcounterValue > 0) {
        counterElement.style.color = "green"
    } else if (updcounterValue < 0) {
        counterElement.style.color = "red"
    } else {
        counterElement.style.color = "black"

    }
}