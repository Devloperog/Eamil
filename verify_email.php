<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $verification_code = $_POST["verification_code"];
    
    // Compare the entered verification code with the sent code (not shown here)
    
    if (/* Verification is successful */) {
        echo "Email successfully verified!";
    } else {
        echo "Verification failed. Please try again.";
    }
}
?>
