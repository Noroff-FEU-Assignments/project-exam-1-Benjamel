const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector("#sendButton");
const messageBox = document.querySelector("#messageBox");

function checkIfButtonIsDisabled(event) {
    event.preventDefault();


    if (checkLength(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
        button.disabled = false;
    } else {
        fullNameError.style.display = "block";
        button.disabled = true;
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
        button.disabled = false;
    } else {
        subjectError.style.display = "block";
        button.disabled = true;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        button.disabled = false;
    } else {
        emailError.style.display = "block";
        button.disabled = true;
    }
    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
        button.disabled = false;
    } else {
        messageError.style.display = "block";
        button.disabled = true;
    }
}

fullName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
message.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    messageBox.innerHTML = `<h3 class="message">Your contact form has been sent!</h3>`;
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailPattern = regEx.test(email);
    return emailPattern;
}