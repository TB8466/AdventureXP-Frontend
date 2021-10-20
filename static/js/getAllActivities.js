
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

  const name = document.createElement("h1");
  const age = document.createElement("h1");
  const height = document.createElement("h1");
  const equipment = document.createElement("h1");
  const time = document.createElement("h1");


  const createName = document.createElement('p');
  const createAge = document.createElement('p');
  const createHeight = document.createElement('p');
  const createEquipment = document.createElement('p');
  const createTime = document.createElement('p');
  const createEditButton = document.createElement('input')
  const createATag = document.createElement('a')



  name.innerText = "Activity name:";
  age.innerText = "Age requirement:";
  height.innerText = "Height requirement:";
  equipment.innerText = "Equipments: ";
  time.innerText = "Time";


  createName.innerHTML = activityKey.activityName;
  createAge.innerHTML = activityKey.ageReq;
  createHeight.innerHTML = activityKey.heightReq;
  createEquipment.innerHTML = activityKey.equipment;
  createTime.innerHTML = activityKey.time;
  createEditButton.type = "button";
  createEditButton.setAttribute("value", "Edit");
  createEditButton.onclick = function(){  makeLocalKey(key);}
  createATag.href = "../activity/updateActivity.html"

  childAppender.appendChild(name)
  childAppender.appendChild(createName)
  childAppender.appendChild(age)
  childAppender.appendChild(createAge)
  childAppender.appendChild(height)
  childAppender.appendChild(createHeight)
  childAppender.appendChild(equipment)
  childAppender.appendChild(createEquipment)
  childAppender.appendChild(time)
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

