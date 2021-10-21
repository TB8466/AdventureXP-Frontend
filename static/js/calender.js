const timeTable = document.querySelector(".timeTable");
const bookingTable = document.querySelector(".bookingTable");
const dateInp = document.querySelector(".dateInp");
const calenderHeader = document.querySelector(".calenderHeader");

//Create timestamps 1:00-24:00
for(let i = 1; i<25; i++){
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerHTML = i+":00";
  tr.appendChild(td);
  timeTable.appendChild(tr);
}

//Create table for each activity, and check if any reservation are made
function createActivityTables(){
  bookingTable.innerHTML="";
  for (let i=1; i<=activityMap.size; i++){
    let activityKey = activityMap.get(i)
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const th = document.createElement("th");

    th.innerHTML = activityKey.activityName;
    let aName = activityKey.activityName;
    aName = aName.replace(/\s+/g, '');
    table.setAttribute("class",aName);
    tr.appendChild(th);
    table.appendChild(tr);
    bookingTable.appendChild(table);
    for(let j = 1; j<25; j++){
      const tr2 = document.createElement("tr");
      const td2 = document.createElement("td");
      //If no reservation is found then td will say "Available"
      td2.innerHTML = "Available";
      tr2.appendChild(td2);
      table.appendChild(tr2);

      //Check all reservation
      for(let key of bookingMap.keys()) {

        let bookingKey = bookingMap.get(key)

        let bkDate = new Date(bookingKey.date);
        const selectedDate = new Date(dateInp.value);

        //Check if reservation matches any activity
        if(bookingKey.bookedActivity === activityKey.activityName){
          const aTable = document.querySelector("."+aName);

          //Check if reservation matches any hour from the timestamp
        if (bkDate.getHours() === j ) {

          //Check if HTML date input matches any reservation date
          if(bkDate.getDate() === selectedDate.getDate()){

          //If reservation is found, color td tag yellow and insert customers name
          td2.style.backgroundColor = "Yellow";
          td2.innerHTML = bookingKey.guestName;

          tr2.appendChild(td2);
          aTable.appendChild(tr2);
        }
        }
        }
      }
    }
  }
}

async function wait4Fetch(){
  await getAll();
  await callGetAllBookings();
  out(bookingMap)
}
function updateH1() {
  calenderHeader.innerHTML ="";
  const h1 = document.createElement("h1");
  h1.innerHTML = dateInp.value;
  calenderHeader.appendChild(h1);
  out(dateInp.value)
}

wait4Fetch();
dateInp.addEventListener("change",createActivityTables  )
dateInp.addEventListener("change",updateH1)
