const nav = document.querySelector("nav");

function createNav(){
  const navBar = document.createElement("nav");
  const employeeNav = document.createElement("a");
  const activityNav = document.createElement("a");
  const bookingNav = document.createElement("a");
  const empUl = document.createElement("ul");

  employeeNav.innerText = "Employees";
  employeeNav.href = "../employee/new-employee.html";
  navBar.appendChild(empUl);
  navBar.appendChild(employeeNav);

  activityNav.innerText = "Activities";
  activityNav.href = "../activity/new-activity.html";
  navBar.appendChild(activityNav);

  activityNav.innerText = "Bookings";
  activityNav.href = "../booking/new-booking.html";
  navBar.appendChild(bookingNav);

  nav.appendChild(navBar);



}

createNav();
