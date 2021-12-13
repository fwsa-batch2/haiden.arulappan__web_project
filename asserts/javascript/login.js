
function login() {
    event.preventDefault();

    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("secret").value;

    let customer_details = JSON.parse(localStorage.getItem("fullarray"));


    let exists = false;


    for (i = 0; i < customer_details; i++) {

        let email = customer_details[i].Gmail;
        let userpassword = customer_details[i].Create;


        if (gmail == email && password == userpassword) {
            exists = true;
            break;
        }
    }


    if (exists == true) {
        document.getElementById("alert").innerText = "Invalid password (or) email"
    }
    else {
        window.location.href = "../index.html"
    }




}
