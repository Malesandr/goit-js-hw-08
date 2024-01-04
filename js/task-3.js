'use strict'

const nInput = document.querySelector("#name-input");
const nOutput = document.querySelector("#name-output");
nInput.addEventListener("input", (event) => {
	nOutput.textContent = event.currentTarget.value.trim();
    if (nOutput.textContent.length === 0) {
        nOutput.textContent = "Anonymous";
    }
});