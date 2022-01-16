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
    document.getElementById("adding_hotels").innerHTML += `<div style="margin-top:8%;font-size:1vw;opacity:.6;color:#3c1700">Hotel Name</div>
    <div style="color:#3c1700">${item.hotelname}</div><br>
    <div style="font-size:1vw;opacity:.6;color:#3c1700">Owner Name</div>
    <div style="color:#3c1700">${item.ownername}</div><br>
   <div style="font-size:1vw;opacity:.6;color:#3c1700"> Phone Number</div>
   <div style="color:#3c1700">${item.ph_number}</div>
    <div><img src="${item.Image}" alt="" style="height:32vh;margin-left:42%;margin-top:-32%;border-radius:5px">
    </div><br><br><hr style="opacity:.6">`

}