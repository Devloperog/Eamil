<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $mobile = $_POST["mobile"];
    $email = $_POST["email"];
    
    // Process user details (not shown here)
    
    echo "Sign up successful!";
}
?>
