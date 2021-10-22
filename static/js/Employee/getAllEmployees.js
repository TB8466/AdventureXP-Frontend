const out = (str) => console.log(str);

const getEmployeesURL = "http://localhost:8080/employee/get";

function getAllEmployees(){
  return fetch(getEmployeesURL).then(response => response.json());
}

function callGetAllEmployees(btn) {
  // Laver et promise, der kalder getAllEmployees method
  const prom = getAllEmployees();
  prom.then(printEmployees);
}

function printEmployees(employeeData){
  //laver vi h4 tags med vores classer fra HTML
  employeeData.forEach(employee => {
    const createFName = document.createElement('h1');
    const createLName = document.createElement('h4');
    const createEMPtype = document.createElement('h4');
    // sætter dem = vores variabler fra Employee Backend
    createFName.innerHTML = employee.firstName;
    createLName.innerHTML = employee.lastName;
    createEMPtype.innerHTML = employee.employeeType;
    //childappender tager så vores attributter, og putter ind i
    //i vores h4 tag
    employeeApender.appendChild(createFName);
    employeeApender.appendChild(createLName);
    employeeApender.appendChild(createEMPtype);

  })

}

let employeeApender = document.querySelector('.appendingEmp');
callGetAllEmployees();



