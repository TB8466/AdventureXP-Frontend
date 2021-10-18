



function updateActivityInputMaker(){

  let childAppendtrix = document.querySelector('.appendingUpdate')

  for(let key of activityMap.keys()) {

    let activityKey = activityMap.get(key)

    const createNameInput = document.createElement('input');
    const createAgeInput = document.createElement('input');
    const createHeightInput = document.createElement('input');
    const createEquipmentInput = document.createElement('input');
    const createTimeInput = document.createElement('input');
    const createBr = document.createElement('br')
    createNameInput.value = activityKey.activityName;
    createAgeInput.value = activityKey.ageReq;
    createHeightInput.value = activityKey.heightReq;
    createEquipmentInput.value = activityKey.equipment;
    createTimeInput.value = activityKey.time;
    childAppendtrix.appendChild(createNameInput)
    childAppendtrix.appendChild(createAgeInput)
    childAppendtrix.appendChild(createHeightInput)
    childAppendtrix.appendChild(createEquipmentInput)
    childAppendtrix.appendChild(createTimeInput)
    childAppendtrix.appendChild(createBr)

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

let hesteknap = document.querySelector('.knapDemOp')
hesteknap.addEventListener('click', updateActivityInputMaker)

