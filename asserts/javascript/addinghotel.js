let hoteldetails = [];

function pageload() {
    const gettingDetails = JSON.parse(localStorage.getItem("details"));

    console.log(gettingDetails);
    if (gettingDetails != null) {
        hoteldetails = gettingDetails;
    }
}


function submitHandler(event) {
    event.preventDefault();
    let hotelName = document.getElementById("hotelname").value;
    let ownername = document.getElementById("ownername").value;
    let Phone_number = document.getElementById("ph_number").value;
    let Image_link = document.getElementById("hotelimage").value;

    const newhotelDetails = {
        "hotelname": hotelName,
        "ownername": ownername,
        "ph_number": Phone_number,
        "Image": Image_link
    };

    console.log(hoteldetails);
    hoteldetails.push(newhotelDetails);
    localStorage.setItem("details", JSON.stringify(hoteldetails));
    window.open("./../../../hotelinminuteapp-ui/Pages/listhotel.html")

}
pageload();