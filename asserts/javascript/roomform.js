let fullarray = [];

function booking(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phno = document.getElementById("phone_number").value;
    let Room = document.getElementById("rooms").value;
    let adults = document.getElementById("adult").value;
    let child = document.getElementById("children").value;
    let check_in = document.getElementById("date1").value;
    let check_out = document.getElementById("date2").value;
    const hotel_name = JSON.parse(localStorage.getItem('hotelName'));

    const roomAvail = JSON.parse(localStorage.getItem('Available-Rooms'));


    if (roomAvail <= 0) {
        alert('Room are Full, Please try again later!!')
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
            "Check_out_date": check_out,
            "hotel_name": hotel_name
        }

        fullarray.push(form_details);
        localStorage.setItem("userDetails", JSON.stringify(fullarray))
    }
    haide();
}

function haide() {

    const totalRoom = 50;
    const roomAvail = JSON.parse(localStorage.getItem('Available-Rooms'));
    let noOfRooms = document.getElementById('rooms').value;
    let roomsAvailable = roomAvail - noOfRooms;
    if (roomsAvailable < totalRoom) {
        {
            roomsAvailable = 0;
        }
        localStorage.setItem('Available-Rooms', roomsAvailable);


    }

}



