function bookHotel(hotel) {

    const hotelName = JSON.stringify(hotel);
    localStorage.setItem("hotelName", hotelName);
    window.location.href = "./../../Pages/himform1.html"


}