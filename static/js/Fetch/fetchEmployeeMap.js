const out = (str) => console.log(str);

const getEmployeesURL = "http://localhost:8080/employee/get";


async function getAllEmployees(){
  return fetch(getEmployeesURL).then(response => response.json());
}

async function callGetAllEmployees(btn){
  const prom = getAllEmployees();
  await prom.then(createEmployeeMap);
}


let employeeMap = new Map();

function createEmployeeMap(data){
  data.forEach(Employee =>{
    employeeMap.set(Employee.employeeId, Employee)
  })

}

async function getAll (){
  await callGetAllEmployees();
}
