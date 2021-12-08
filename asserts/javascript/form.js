let fullarray = [];

function pageload() {

    const statge = JSON.parse(localStorage.getItem("statge"));
    console.log(statge)
    if (statge) {
        fullarray = statge;
    }

}

function store() {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("gmail").value;
    let phnumber = document.getElementById("number").value;
    let createpassword = document.getElementById("create").value;
    let confirmpassword = document.getElementById("conform").value;

    const customer_details = {

        "Name": name,
        "Gmail": email,
        "Phone_number": phnumber,
        "Create": createpassword,
        "Confirm": confirmpassword,
    }

    const checking = checkpassword();


    if (checking) {
        fullarray.push(customer_details);
        localStorage.setItem("statge", JSON.stringify(fullarray))
        window.location.href = "../index.html";
    }
    else {
        console.log("Not matching");
        alert("Error")
    }
};

function checkpassword() {
    let createpassword = document.getElementById("create").value;
    let confirmpassword = document.getElementById("conform").value;

    if (createpassword == confirmpassword) {
        console.log("password Matched")
        return true;

    }
    else {
        return false;
    }
};



pageload();