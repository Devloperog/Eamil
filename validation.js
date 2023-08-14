function sendVerificationCode() {
    var email = document.getElementById("email").value;
    // Simulate sending verification code (not shown here)
    document.getElementById("verification_code_div").style.display = "block";
}

function verifyEmail() {
    var verificationCode = document.getElementById("verification_code").value;
    // Simulate verification (not shown here)
    return true; // Return true if verification is successful
}

