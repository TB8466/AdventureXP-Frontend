


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
    "content": "application/json"
  },
  body: ""
}

let activityJson = {

"activity": ""
}

function createActivity(btn){

  let inpValue = document.querySelector('.inpclass')

  activityJson.activity = inpValue.value;

  postRequestActivity.body = JSON.stringify(activityJson)
  fetch(saveActivityURL, postRequestActivity).catch((lambdaerrornamesux) => console.log(lambdaerrornamesux));
}


document.querySelector('.pb').addEventListener('click', createActivity);









