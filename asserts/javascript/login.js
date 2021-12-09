
function login() {
    event.preventDefault();

    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("secret").value;

    let customer_details = JSON.parse(localStorage.getItem("customerdetails"));


    let exists = false;

    for (i = 0; i < customer_details.length; i++) {

        let email = customer_details[i].Gmail;
        let userpassword = customer_details[i].Confirm;
        console.log(email)

        if (gmail == email && password == userpassword) {
            exists = true;
            break;
        }
    }


    if (exists) {
        window.location.href = "../index.html"
    }
    else {
        document.getElementById("alert").innerText = "Invalid password (or) email"
    }




}
