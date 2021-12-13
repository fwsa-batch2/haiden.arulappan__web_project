let fullarray = [];

function pageload() {
    const statgeon = JSON.parse(localStorage.getItem("userList"));
    console.log(statgeon)
    if (statgeon != null) {
        fullarray = statgeon;
    }

}

function submitFunction() {
    event.preventDefault();

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("gmail").value.toLowerCase();
    let phnumber = document.getElementById("number").value;
    let createpassword = document.getElementById("create").value.trim();
    let confirmpassword = document.getElementById("conform").value.trim();
    const emailexists = emailvalid(email);

    const namevalid = validation();

    if (createpassword != confirmpassword) {
        alert("Password mismatched");

    }
    else if (emailexists) {
        alert("email already exists (or) Email is invalid");
    }
    else {
        const customer_details = {
            "Name": name,
            "Gmail": email,
            "Phone_number": phnumber,
            "Create": createpassword,
            "Confirm": confirmpassword,
        }
        fullarray.push(customer_details);
        localStorage.setItem("userList", JSON.stringify(fullarray))
        window.location.href = "../index.html";
    }

};

function emailvalid(currentemail) {
    //const fullarray = JSON.parse(localStorage.getItem("userList"));
    let used = false;
    for (i = 0; i < fullarray.length; i++) {
        const email = fullarray[i].Gmail;
        if (currentemail == email) {
            used = true;
            break;
        }
    }
    return used;
}

function checkbox() {
    let check = document.getElementById("checking");
    if (check.checked) {
        document.getElementById("create").type = "Text";
        document.getElementById("conform").type = "Text";
    }
    else {
        document.getElementById("create").type = "password";
        document.getElementById("conform").type = "password";
    }
}

// function validation() {
//     var name = document.getElementById("username").value;///get id with value 
//     var usernamepattern = /^[A-Za-z]$/;////Regular expression
//     if (usernamepattern == name) {
//         document.getElementById("username").style.backgroundColor = 'yellow';
//     }
//     else {
//         alert("please enter a valid name")
//     }
// }



pageload();