const specificBooking = document.querySelector(".specificBooking");
const bookingID = document.querySelector(".bookingID");
const searchBooking = document.querySelector(".searchBooking");
const bookings = document.querySelector(".bookings");

async function wait4Fetch(){
  await callGetAllBookings();
  printBookings();
}

function printBookings(){
  for(let key of bookingMap.keys()) {
    let bookingKey = bookingMap.get(key)

    const id = document.createElement("h1");
    const name = document.createElement("h1");
    const amount = document.createElement("h1");
    const activity = document.createElement("h1");
    const arrival = document.createElement("h1");
    id.innerHTML = "ID: ";
    name.innerHTML = "Guest Name: ";
    amount.innerHTML = "Amount of Guest: ";
    activity.innerHTML = "Booked Activity: ";
    arrival.innerHTML = "Time of Arrival: ";

    const bookingId = document.createElement("p");
    const guestName = document.createElement("p");
    const guestAmount = document.createElement("p");
    const bookedActivity = document.createElement("p");
    const date = document.createElement("p");
    const deleteBtn = document.createElement("input");
    const editBtn = document.createElement("input");

    bookingId.innerHTML = bookingKey.bookingId;
    guestName.innerHTML = bookingKey.guestName;
    guestAmount.innerHTML = bookingKey.guestAmount;
    bookedActivity.innerHTML = bookingKey.bookedActivity;
    date.innerHTML = bookingKey.date;
    deleteBtn.type = "button";
    deleteBtn.setAttribute("value", "Delete Booking");
    deleteBtn.onclick = function() {
      deleteBooking(bookingKey.bookingId);
    }
    editBtn.type = "button";
    editBtn.setAttribute("value", "Edit Booking");
    editBtn.onclick = function() {
      const editGuestName = document.createElement("input");
      editGuestName.setAttribute("value",bookingKey.guestName);
      const editGuestAmount = document.createElement("input");
      editGuestAmount.setAttribute("value",bookingKey.guestAmount);
      const editBookedActivity = document.createElement("input");
      editBookedActivity.setAttribute("value",bookingKey.bookedActivity);
      const editDate = document.createElement("input");
      editDate.type = "datetime-local";
      editDate.setAttribute("value",bookingKey.date);
      const submitBtn = document.createElement("input");
      submitBtn.type = "button";
      submitBtn.setAttribute("value", "Submit Updated Booking");
      name.appendChild(editGuestName);
      amount.appendChild(editGuestAmount);
      activity.appendChild(editBookedActivity);
      arrival.appendChild(editDate);
      arrival.appendChild(submitBtn);
      submitBtn.onclick = function (){
        editBooking(bookingKey.bookingId,editGuestName.value,editGuestAmount.value,editBookedActivity.value,new Date(editDate.value));
      }

    }
    bookings.appendChild(id);
    bookings.appendChild(bookingId);
    bookings.appendChild(name);
    bookings.appendChild(guestName);
    bookings.appendChild(amount);
    bookings.appendChild(guestAmount);
    bookings.appendChild(activity);
    bookings.appendChild(bookedActivity);
    bookings.appendChild(arrival);
    bookings.appendChild(date);
    bookings.appendChild(deleteBtn);
    bookings.appendChild(editBtn);







  }
}

function printSpecificBooking(){
  specificBooking.innerHTML ="";


  let id = parseInt(bookingID.value);
    if(bookingMap.has(id)){

      let bookingKey = bookingMap.get(id)

      const bookingId = document.createElement("p");
      const guestName = document.createElement("p");
      const guestAmount = document.createElement("p");
      const bookedActivity = document.createElement("p");
      const date = document.createElement("p");

      bookingId.innerHTML = bookingKey.bookingId;
      guestName.innerHTML = bookingKey.guestName;
      guestAmount.innerHTML = bookingKey.guestAmount;
      bookedActivity.innerHTML = bookingKey.bookedActivity;
      date.innerHTML = bookingKey.date;

      specificBooking.appendChild(bookingId);
      specificBooking.appendChild(guestName);
      specificBooking.appendChild(guestAmount);
      specificBooking.appendChild(bookedActivity);
      specificBooking.appendChild(date);
    }
  else{
        const notFound = document.createElement("h1");
        notFound.innerHTML = "Booking ID not found! Try again!"
        specificBooking.appendChild(notFound);
    }
}

async function deleteBooking(id){
  const URL = "http://localhost:8080/booking/delete/"+id;

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: ""
  }

  await fetch(URL, fetchOptions);
}
async function editBooking(id,guestName,guestAmount,bookedActivity,date){
  const URL = "http://localhost:8080/booking/update/"+id;


  const updatedBookingJson = {
    "bookingId": "",
    "guestName": guestName,
    "guestAmount" : parseInt(guestAmount),
    "bookedActivity" : bookedActivity,
    "date" : date
  }
  console.log(updatedBookingJson);

  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedBookingJson)
  }

  await fetch(URL, fetchOptions);
}


wait4Fetch();
searchBooking.addEventListener("click",printSpecificBooking);
