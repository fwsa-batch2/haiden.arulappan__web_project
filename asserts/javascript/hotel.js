function bookHotel(hotel) {

    const hotelName = JSON.stringify(hotel);
    localStorage.setItem("hotelName", hotelName);
    window.open("./../../Pages/himform1.html")


}