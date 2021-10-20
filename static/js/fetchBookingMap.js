const getBookingURL = "http://localhost:8080/booking/get";

async function getAllBookings(){
  return fetch(getBookingURL).then(response => response.json());
}


async function callGetAllBookings(){
const prom = getAllBookings();
await prom.then(createBookingMap);
}

let bookingMap = new Map();

function createBookingMap(data){
  data.forEach(Booking => {
    bookingMap.set(Booking.bookingId, Booking)
  })
}

