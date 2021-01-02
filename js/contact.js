const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", validateFrom);

function validateFrom(event) {
    event.preventDefault();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (lastNameValue.length >= 3) {
        return true;
    } else {
        alert("Please insert your full last name");
    }

    if (subjectValue >= 7) {
        return true;
    } else {
        alert("Please insert an informative subject");
    }

    if (messageValue.length >= 15) {
        return true;
    } else {
        alert("Please insert a descriptive message");
    }

    validateEmail(emailValue);
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(email)) {
        return true;
    } else {
        alert("Please insert a valid email address")
        return false;
    }
}



//event.preventDefault();

