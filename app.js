function getInfo() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let Address = document.getElementById('address').value;
    let Region = document.getElementById('region').value;
    
    
    document.getElementById('displayfirstName').innerHTML = "First name: " + firstName;
    document.getElementById('displaylastName').innerHTML = "Last name: " + lastName;
    document.getElementById('displayAddress').innerHTML = "Address: " + Address;
    document.getElementById('displayRegion').innerHTML = "Region: " + Region;
}

// 

function getRadio(method) {
    document.getElementById('displayPayment').innerHTML = "Payment method: " + method;
}