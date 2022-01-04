const details = JSON.parse(localStorage.getItem('userDetails'));

function onPageLoad() {
    if (details == null) {
        document.getElementById('customer_details').innerText = "Your Booking list is empty";
    } else {
        details.forEach(customerDetails);
    }
}
onPageLoad();

function customerDetails(item) {
    document.getElementById('customer_details').innerHTML += `<div>Hotel Name: ${item.hotel_name}</div>
    <div>Applicant: ${item.name} ${item.email} ${item.ph_number}</div>
    <div>Checkin Date: ${item.Check_in_date}</div>
    <div>Checkout Date: ${item.Check_out_date}</div>
    <div>No. of Adults: ${item.Adults} No. of Children: ${item.Children}</div>
    <div>No. of Rooms: ${item.No_of_rooms}</div>
    `
}