

const out = function (str) {console.log(str)};

out("hello");


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
  "bookingName": ""
  }

//btn=button
function createBooking(btn){

  let inpValue1 = document.querySelector(".bookingNameClass");

  //Udfylder variabel
  bookingJson.bookingName = inpValue1.value;

  //JSON.stringify gør at vi lavet det om ti JSON
  postRequestBooking.body = JSON.stringify(bookingJson);
  fetch(saveBookingURL, postRequestBooking).catch((error) => console.log(error));

}

document.querySelector(".CreateBookBtn").addEventListener("click", createBooking);






