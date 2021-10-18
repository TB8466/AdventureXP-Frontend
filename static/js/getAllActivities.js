function printActivities(){
  let childAppender = document.querySelector('.appending')
for(let key of activityMap.keys()) {
  let activityKey = activityMap.get(key)
  const createName = document.createElement('h1');
  const createAge = document.createElement('h2');
  const createHeight = document.createElement('h2');
  const createEquipment = document.createElement('h2');
  const createTime = document.createElement('h2');
  const createEditButton = document.createElement('button')
  createName.innerHTML = activityKey.activityName;
  createAge.innerHTML = activityKey.ageReq;
  createHeight.innerHTML = activityKey.heightReq;
  createEquipment.innerHTML = activityKey.equipment;
  createTime.innerHTML = activityKey.time;
  createEditButton.innerHTML = "edit";
  childAppender.appendChild(createName)
  childAppender.appendChild(createAge)
  childAppender.appendChild(createHeight)
  childAppender.appendChild(createEquipment)
  childAppender.appendChild(createTime)
  childAppender.appendChild(createEditButton);
}

}







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

document.querySelector('.pb').addEventListener('click', printActivities);

