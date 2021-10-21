let childAppender = document.querySelector('.appending')

// 5 function
async function wait4Fetch(){
  await getAll();
  printActivities();
}
wait4Fetch();

// 6 function
function printActivities(){

for(let key of activityMap.keys()) {
  let activityKey = activityMap.get(key)

  const name = document.createElement("h1");
  const age = document.createElement("h1");
  const height = document.createElement("h1");
  const equipment = document.createElement("h1");
  const time = document.createElement("h1");

  name.innerHTML = "Activity name:";
  age.innerHTML = "Age requirement:";
  height.innerHTML = "Height requirement:";
  equipment.innerHTML = "Equipments: ";
  time.innerHTML = "Time";

  const activityName = document.createElement('p');
  const activityAge = document.createElement('p');
  const activityHeight = document.createElement('p');
  const activityEquipment = document.createElement('p');
  const activityTime = document.createElement('p');
  const deleteBtn = document.createElement('input')
  const createEditButton = document.createElement('input')


  activityName.innerHTML = activityKey.activityName;
  activityAge.innerHTML = activityKey.ageReq;
  activityHeight.innerHTML = activityKey.heightReq;
  activityEquipment.innerHTML = activityKey.equipment;
  activityTime.innerHTML = activityKey.time;

  deleteBtn.type = "button";
  deleteBtn.setAttribute('value', "Delete")
  deleteBtn.onclick = function (){
    deleteActivity(activityKey.activityId)
  }

  createEditButton.type = "button";
  createEditButton.setAttribute("value", "Edit");
  createEditButton.onclick = function(){
    const editName = document.createElement('input')
    editName.setAttribute('value', activityKey.activityName);
    const editAge = document.createElement('input')
    editAge.setAttribute('value',activityKey.ageReq)
    const editHeight = document.createElement('input')
    editHeight.setAttribute('value', activityKey.heightReq)
    const editEquipment = document.createElement('input')
    editEquipment.setAttribute('value',activityKey.equipment)
    const editTime = document.createElement('input')
    editTime.setAttribute('value', activityKey.time)

    const submitBtn = document.createElement('input')
    submitBtn.type = 'button'
    submitBtn.setAttribute('value', "Confirm Update")

    activityName.appendChild(editName)
    activityAge.appendChild(editAge)
    activityHeight.appendChild(editHeight)
    activityEquipment.appendChild(editEquipment)
    activityTime.appendChild(editTime)
    activityTime.appendChild(submitBtn)
    submitBtn.onclick = function (){
      updateActivity(activityKey.activityId, editName.value,editAge.value,editHeight.value,editEquipment.value,editTime.value)
    }
  }
  childAppender.appendChild(name)
  childAppender.appendChild(activityName)
  childAppender.appendChild(age)
  childAppender.appendChild(activityAge)
  childAppender.appendChild(height)
  childAppender.appendChild(activityHeight)
  childAppender.appendChild(equipment)
  childAppender.appendChild(activityEquipment)
  childAppender.appendChild(time)
  childAppender.appendChild(activityTime)
  childAppender.appendChild(deleteBtn)
  childAppender.appendChild(createEditButton)
  }
}

async function deleteActivity(id){
  const URL = "http://localhost:8080/activity/delete/"+id;


  const deleteMapObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: ""
  }

  await fetch(URL, deleteMapObj);
}

async function updateActivity(id, newName, newAge, newHeight, newEquipment, newTime ){

  const URL = "http://localhost:8080/activity/update/"+id;




  const updatedActivityJson = {
    "activityId": "",
    "activityName": newName,
    "ageReq": newAge,
    "heightReq" : newHeight,
    "equipment" : newEquipment,
    "time" : newTime
  }


  const updateMapObj = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedActivityJson)
  }
  await fetch(URL, updateMapObj)
}









