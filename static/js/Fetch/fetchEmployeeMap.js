const out = (str) => console.log(str);

const getEmployeesURL = "http://localhost:8080/employee/get";

// 1 function
async function getAllEmployees(){
  return fetch(getEmployeesURL).then(response => response.json());
}

// 2 function
async function callGetAllEmployees(btn){
  const prom = getAllEmployees();
  await prom.then(createEmployeeMap);
}


let employeeMap = new Map();
// 3
function createEmployeeMap(data){
  data.forEach(Employee =>{
    employeeMap.set(Employee.employeeId, Employee)
  })

}
// 4 function
async function getAll (){
  await callGetAllEmployees();
}
