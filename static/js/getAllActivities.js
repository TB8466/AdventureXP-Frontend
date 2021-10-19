
// 5 function
async function wait4Fetch(){
  await getAll();
  printActivities();
}

// 6 function
function printActivities(){
  let childAppender = document.querySelector('.appending')

for(let key of activityMap.keys()) {
  let activityKey = activityMap.get(key)

  const createName = document.createElement('h1');
  const createAge = document.createElement('h2');
  const createHeight = document.createElement('h2');
  const createEquipment = document.createElement('h2');
  const createTime = document.createElement('h2');
  const createEditButton = document.createElement('input')
  const createATag = document.createElement('a')

  createName.innerHTML = activityKey.activityName;
  createAge.innerHTML = activityKey.ageReq;
  createHeight.innerHTML = activityKey.heightReq;
  createEquipment.innerHTML = activityKey.equipment;
  createTime.innerHTML = activityKey.time;
  createEditButton.type = "button";
  createEditButton.setAttribute("value", "Edit");
  createEditButton.onclick = function(){  makeLocalKey(key);}
  createATag.href = "../activity/updateActivity.html"

  childAppender.appendChild(createName)
  childAppender.appendChild(createAge)
  childAppender.appendChild(createHeight)
  childAppender.appendChild(createEquipment)
  childAppender.appendChild(createTime)
  createATag.appendChild(createEditButton)
  childAppender.appendChild(createATag);


}
}
function makeLocalKey(key){

  localStorage.setItem("myKey", key);

}


wait4Fetch();



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

