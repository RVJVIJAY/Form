function validateForm() {
    clearErrorMessages();

    var isValid = true;

    isValid = validateField("username", "Please enter a username") && isValid;
    isValid = validateField("email", "Please enter a valid email address") && isValid;
    isValid = validateField("password", "Password should be at least 6 characters") && isValid;
    isValid = validateConfirmPassword() && isValid;

    return isValid;
}

function validateField(fieldName, errorMessage) {
    var field = document.forms["forms"][fieldName].value;
    var isValid = true;

    if (field.trim() === "") {
        isValid = false;
        displayErrorMessage(fieldName, errorMessage);
    }

    return isValid;
}

function validateConfirmPassword() {
    var password = document.forms["forms"]["password"].value;
    var cpassword = document.forms["forms"]["cpassword"].value;
    var isValid = true;

    if (cpassword.trim() === "" || cpassword !== password) {
        isValid = false;
        displayErrorMessage("cpassword", "Passwords do not match");
    }

    return isValid;
}

function displayErrorMessage(fieldName, message) {
    var errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.innerHTML = message;

    var inputField = document.getElementsByName(fieldName)[0];
    inputField.parentNode.appendChild(errorDiv);
}

function clearErrorMessages() {
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].parentNode.removeChild(errorMessages[i]);
    }
}
