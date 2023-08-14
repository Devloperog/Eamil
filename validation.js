function sendVerificationCode() {
    var email = document.getElementById("email").value;
    // Send verification code to the user's email (not shown here)
    document.getElementById("verification_code_div").style.display = "block";
}

function verifyEmail() {
    var verificationCode = document.getElementById("verification_code").value;
    // Verify the code entered by the user (not shown here)
    return true; // Return true if verification is successful
}
