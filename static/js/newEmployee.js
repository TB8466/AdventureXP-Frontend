const out = function (str) {console.log(str)};

out("hello");

const saveEmployeeURL = "http://localhost:8080/employee/save";

let postRequestEmployee = {
  method: "POST",
  headers: {
    "content-type": "application/json"
  } ,
  body: ""
}
//employee Object
let employeeJson = {
  "employeeId": "",
  "firstName": "",
  "lastName": ""
}

function createEmployee(btn){

  let inpValue1 = document.querySelector(".firstNameClass");
  let inpValue2 = document.querySelector(".lastNameClass");

  //Udfylder variablerne fra object
  employeeJson.firstName = inpValue1.value;
  employeeJson.lastName = inpValue2.value;

  //Laver json object???
  postRequestEmployee.body = JSON.stringify(employeeJson);
  fetch(saveEmployeeURL, postRequestEmployee).catch((error) => console.log(error));

}

document.querySelector(".CreateEmpBtn").addEventListener("click", createEmployee);
