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

    bookings.appendChild(bookingId);
    bookings.appendChild(guestName);
    bookings.appendChild(guestAmount);
    bookings.appendChild(bookedActivity);
    bookings.appendChild(date);


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



wait4Fetch();
searchBooking.addEventListener("click",printSpecificBooking);
