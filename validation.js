function validateForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    
    if (name === "" || number === "" || email === "") {
        alert("All fields are required");
        return false;
    }
    
    return true;
}
