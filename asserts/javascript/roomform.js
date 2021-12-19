let fullarray = [];

function pageload() {
    const statgeon = JSON.parse(localStorage.getItem("userList"));
    if (statgeon != null) {
        fullarray = statgeon;
    }
}

function booking() {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phno = document.getElementById("phone_number").value;
    let Room = document.getElementById("rooms").value;
    let adults = document.getElementById("adult").value;
    let child = document.getElementById("children").value;
    let check_in = document.getElementById("date1").value;
    let check_out = document.getElementById("date2").value;

    let emailexists = emailvalid(email);
    let len = fullarray.length;
    let total = 10;

    if (len >= 9) {
        alert("The room is full,Please check other rooms")
    }
    else if (Room >= 4) {
        alert("your email has required room please use another email to book more rooms")
    }
    else if (emailexists) {
        alert("please login other emails")
    }
    else {
        const form_details = {
            "name": name,
            "email": email,
            "ph_number": phno,
            "No_of_rooms": Room,
            "Adults": adults,
            "Children": child,
            "Check_in_date": check_in,
            "Check_out_date": check_out
        }

        fullarray.push(form_details);
        localStorage.setItem("userList", JSON.stringify(fullarray))
    }
}
function emailvalid(currentemail) {
    // const fullarray = JSON.parse(localStorage.getItem("userList"));
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
pageload();