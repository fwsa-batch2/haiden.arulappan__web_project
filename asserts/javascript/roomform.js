let fullarray = [];

function booking() {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phno = document.getElementById("phone_number").value;
    let adults = document.getElementById("adult").value;
    let child = document.getElementById("children").value;
    let check_in = document.getElementById("date1").value;
    let check_out = document.getElementById("date2").value;

    let formlist = JSON.parse(localStorage.getItem("userList"));
    let len = formlist.length;

    if (len <= 10) {

        const form_details = {
            "name": name,
            "email": email,
            "ph_number": phno,
            "Adults": adults,
            "Children": child,
            "Check_in_date": check_in,
            "Check_out_date": check_out
        }

        fullarray.push(form_details);
        localStorage.setItem("userList", JSON.stringify(fullarray))
    } else {
        alert("the room is full")
    }

}