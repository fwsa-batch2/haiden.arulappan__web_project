const details = JSON.parse(localStorage.getItem("details"));

function onPageLoad() {
    if (details == null) {
        document.getElementById('customer_details').innerText = "Your Booking list is empty";
    } else {
        details.forEach(listinghotels);
    }
}
onPageLoad();
function listinghotels(item) {
    document.getElementById("adding_hotels").innerHTML += `<div>Hotel Name:${item.hotelname}</div>
    <div>Owner Name:${item.ownername}</div>
   <div> Phone Number:${item.ph_number}</div>
    <div>Hotel Picture:<img src="${item.Image}" alt="" style="height:100px">
    </div>`

}