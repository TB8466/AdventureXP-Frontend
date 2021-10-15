const out = (str) => console.log(str);

const getActivitiesURL = "http://localhost:8080/activity/get";


function getAllActivities(){
  return fetch(getActivitiesURL).then(response => response.json());
}

function callGetAllActivities(btn){
  const prom = getAllActivities();
  prom.then(printActivities);
}

function printActivities(activitydata){

  activitydata.forEach(activity => {
    const createName = document.createElement('a');
    createName.href = "www.google.com"
    const createAge = document.createElement('h1');
    const createHeight = document.createElement('h1');
    const createEquipment = document.createElement('h1');
    const createTime = document.createElement('h1');
    createName.innerHTML = activity.activityName;
    createAge.innerHTML = activity.ageReq;
    createHeight.innerHTML = activity.heightReq;
    createEquipment.innerHTML = activity.equipment;
    createTime.innerHTML = activity.time;
    childAppender.appendChild(createName)
    childAppender.appendChild(createAge)
    childAppender.appendChild(createHeight)
    childAppender.appendChild(createEquipment)
    childAppender.appendChild(createTime)
  })

}
let childAppender = document.querySelector('.appending')

callGetAllActivities();



function updateActivity(){

  const URL = "http://localhost:8080/activity/update/" + 1;

  let activityJson = {
    "activityId": "",
    "activityName": "Hestecurling",
    "ageReq": "22",
    "heightReq": "22",
    "equipment": "nonemoooss",
    "time": "25"
  }

  let postRequestActivity= {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(activityJson)
  }



  const response = fetch(URL, postRequestActivity)
  out(response)


}

document.querySelector('.pb').addEventListener('click', updateActivity);
