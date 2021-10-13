const out = function (str) {console.log(str)};



console.log("hello")



/*
function fetchActivity(){

  return fetch(activityAPI).then(lateResponse => lateResponse.json());
}
*/


// let activityBody;


const saveActivityURL = "http://localhost:8080/save";

let postRequestActivity= {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: ""
}

let activityJson = {
"activityName": ""
}

function createActivity(btn){

  let inpValue = document.querySelector('.inpclass')

  activityJson.activityName = inpValue.value;

  postRequestActivity.body = JSON.stringify(activityJson)
  fetch(saveActivityURL, postRequestActivity).catch((error) => console.log(error));
}


document.querySelector('.pb').addEventListener('click', createActivity);









