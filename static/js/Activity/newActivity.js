const out = function (str) {console.log(str)};

const saveActivityURL = "http://localhost:8080/activity/save";

let postRequestActivity= {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: ""
}

let activityJson = {
  "activityId": "",
  "activityName": "",
  "ageReq": "",
  "heightReq": "",
  "equipment": "",
  "time": ""
}

function createActivity(){

  let inpValue1 = document.querySelector('.actinp1')
  let inpValue2 = document.querySelector('.actinp2')
  let inpValue3 = document.querySelector('.actinp3')
  let inpValue4 = document.querySelector('.actinp4')
  let inpValue5 = document.querySelector('.actinp5')

  activityJson.activityName = inpValue1.value;
  activityJson.ageReq = inpValue2.value;
  activityJson.heightReq = inpValue3.value;
  activityJson.equipment = inpValue4.value;
  activityJson.time = inpValue5.value;

  postRequestActivity.body = JSON.stringify(activityJson)
  fetch(saveActivityURL, postRequestActivity).catch((error) => console.log(error));
}

document.querySelector('.pb').addEventListener('click', createActivity);









