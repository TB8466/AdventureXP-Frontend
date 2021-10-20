

async function wait5fetch(){
  await getAll();
  updateActivityInputMaker()
}

out(localStorage.getItem("myKey"))

function updateActivityInputMaker(){

  let childAppendtrix = document.querySelector('.appendingUpdate')

  let i = 1;
  for(let key of activityMap.keys()) {
    let activityKey = activityMap.get(key)

    const createNameInput = document.createElement('input');
    const createAgeInput = document.createElement('input');
    const createHeightInput = document.createElement('input');
    const createEquipmentInput = document.createElement('input');
    const createTimeInput = document.createElement('input');
    const createUpdateButton = document.createElement('input');
    const createBr = document.createElement('br')

    createNameInput.setAttribute('class', "updateNameInput"+i)
    createAgeInput.setAttribute('class', "updateAgeInput"+i)
    createHeightInput.setAttribute('class', "updateHeightInput"+i)
    createEquipmentInput.setAttribute('class', "updateEquipInput"+i)
    createTimeInput.setAttribute('class', "updateTimeInput"+i)
    i++;


    createNameInput.value = activityKey.activityName;
    createAgeInput.value = activityKey.ageReq;
    createHeightInput.value = activityKey.heightReq;
    createEquipmentInput.value = activityKey.equipment;
    createTimeInput.value = activityKey.time;
    createUpdateButton.type = "button";
    createUpdateButton.setAttribute("value", "Update")
    createUpdateButton.onclick = function (){
      out(activityKey.activityId)
      out(i)
      updateActivity(activityKey.activityId,i);
    }
    childAppendtrix.appendChild(createNameInput)
    childAppendtrix.appendChild(createAgeInput)
    childAppendtrix.appendChild(createHeightInput)
    childAppendtrix.appendChild(createEquipmentInput)
    childAppendtrix.appendChild(createTimeInput)
    childAppendtrix.appendChild(createUpdateButton)
    childAppendtrix.appendChild(createBr)


  }
}

wait5fetch();


let variabel = localStorage.getItem("MyKey")



let activityJson = {
  "activityId": "",
  "activityName": "",
  "ageReq": "",
  "heightReq": "",
  "equipment": "",
  "time": ""
}




function updateActivity(key) {

  const updateActivityURL = "http://localhost:8080/activity/update/" + key;




  let putRequestActivity= {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(activityJson)
  }



  let inpValue1 = document.querySelector('.updateNameInput'+key)
  let inpValue2 = document.querySelector('.updateAgeInput'+key)
  let inpValue3 = document.querySelector('.updateHeightInput'+key)
  let inpValue4 = document.querySelector('.updateEquipInput'+key)
  let inpValue5 = document.querySelector('.updateTimeInput'+key)


  activityJson.activityId = key;
  activityJson.activityName = inpValue1.value;
  activityJson.ageReq = inpValue2.value;
  activityJson.heightReq = inpValue3.value;
  activityJson.equipment = inpValue4.value;
  activityJson.time = inpValue5.value;


 fetch(updateActivityURL, putRequestActivity)

out(activityJson)

}



