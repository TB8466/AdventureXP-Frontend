const out = function (str) {console.log(str)};


const saveBookingURL = "http://localhost:8080/booking/save";


let postRequestBooking = {
  method: "POST",
  headers:{
    "content-type": "application/json"
  },
  body: ""
  }


let bookingJson = {
  "bookingId": "",
  "guestName": "",
  "guestAmount" : "",
  "bookedActivity" : "",
  "date" : ""
  }



function createBooking(btn){
  const guestName = document.querySelector(".guestName");
  const guestAmount = document.querySelector(".guestAmount");
  const bookedActivity = document.querySelector(".bookedActivity");
  const dateTime = document.querySelector(".dateTime");
  bookingJson.guestName = guestName.value;
  bookingJson.guestAmount = guestAmount.value;
  bookingJson.bookedActivity = bookedActivity.value;
  bookingJson.date = dateTime.value;


  postRequestBooking.body = JSON.stringify(bookingJson);
  fetch(saveBookingURL, postRequestBooking).catch((error) => console.log(error));

}

document.querySelector(".CreateBookBtn").addEventListener("click", createBooking);






