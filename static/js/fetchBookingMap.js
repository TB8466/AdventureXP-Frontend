const out = (str) => console.log(str);



const getBookingURL = "http://localhost:8080/booking/get";

function getAllBookings(){
  return fetch(getBookingURL).then(response => response.json());
}


function callGetAllBookings(){
const prom = getAllBookings();
prom.then(createBookingMap);
}

let bookingMap = new Map();

function createBookingMap(data){
  data.forEach(Booking => {
    bookingMap.set(Booking.bookingId, Booking)
  })
}

callGetAllBookings()
