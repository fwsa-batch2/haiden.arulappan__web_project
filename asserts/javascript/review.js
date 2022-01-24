let ReviewerList = [];

function pageload() {

    let gettingReviewerList = JSON.parse(localStorage.getItem("reviewer"));
    if (gettingReviewerList != null) {
        ReviewerList = gettingReviewerList;
    }
}

function Review(event) {
    event.preventDefault();
    let ratings = document.getElementById("Ratings").value;
    let feedback = document.getElementById("feedback").value;
    let name = JSON.parse(localStorage.getItem("userList"));
    for (i = 0; i < name.length; i++) {
        const user = name[i];
        const username = user.Name;

        let sub = document.getElementById("text");
        sub.style.fontSize = "40px";
        sub.style.marginLeft = "80px"
        // const isexist = isuserexist(email);

        const review_list = {
            "Name": username,
            "Ratings": ratings,
            "Feedback": feedback
        }
        ReviewerList.push(review_list);
        localStorage.setItem("reviewer", JSON.stringify(ReviewerList));
        // window.location.href = "./../../Pages/our_reviews.html";
        sub.innerText = "Thank you for reviewing us";

    }

}
// function isuserexist(paramemail) {
//     let isexist = false;

//     const userdetails = JSON.parse(localStorage.getItem("userList"));
//     const len = userdetails.length;
//     console.log(len);

//     for (let i = 0; i < len; i++) {
//         const user = userdetails[i];
//         const useremail = user.Gmail;
//         if (useremail === paramemail) {
//             isexist = true;
//             break;
//         }
//     }
//     return isexist;
// }


pageload();