let Totaluserlist = [];

function pageload() {
    console.group("onpageload");
    const gettinguserlist = JSON.parse(localStorage.getItem("userList"));
    console.table(gettinguserlist);
    if (gettinguserlist != null) {
        Totaluserlist = gettinguserlist;
    }
    console.groupEnd("onpageload");
}

function submitFunction(event) {
    event.preventDefault();
    console.group("submithandler");

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("gmail").value.toLowerCase();
    let phnumber = document.getElementById("number").value;
    let createpassword = document.getElementById("create").value.trim();
    let confirmpassword = document.getElementById("conform").value.trim();
    const emailexists = emailvalid(email);
    console.log(emailexists);



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
        Totaluserlist.push(customer_details);
        localStorage.setItem("userList", JSON.stringify(Totaluserlist))
        window.open('./../../Pages/main1.html')
        console.table(customer_details);
    }
    console.groupEnd("submithandler");

}

function emailvalid(currentemail) {
    let used = false;
    let len = Totaluserlist.length;
    for (let i = 0; i < len; i++) {
        const email = Totaluserlist[i].Gmail;
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

pageload();