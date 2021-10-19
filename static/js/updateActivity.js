

async function wait5fetch(){
  await getAll();
  updateActivityInputMaker()
}

out(localStorage.getItem("myKey"))

function updateActivityInputMaker(){

  let childAppendtrix = document.querySelector('.appendingUpdate')


  for(let key of activityMap.keys()) {
    let activityKey = activityMap.get(key)


    const createNameInput = document.createElement('input');
    const createAgeInput = document.createElement('input');
    const createHeightInput = document.createElement('input');
    const createEquipmentInput = document.createElement('input');
    const createTimeInput = document.createElement('input');
    const createUpdateButton = document.createElement('input');
    const createBr = document.createElement('br')

    createNameInput.setAttribute('class', "updateInput1")
    createAgeInput.setAttribute('class', "updateInput2")
    createHeightInput.setAttribute('class', "updateInput3")
    createEquipmentInput.setAttribute('class', "updateInput4")
    createTimeInput.setAttribute('class', "updateInput5")


    createNameInput.value = activityKey.activityName;
    createAgeInput.value = activityKey.ageReq;
    createHeightInput.value = activityKey.heightReq;
    createEquipmentInput.value = activityKey.equipment;
    createTimeInput.value = activityKey.time;
    createUpdateButton.type = "button";
    createUpdateButton.setAttribute("value", "Update")
    createUpdateButton.onclick = function (){
      updateActivity()
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



async function updateActivity() {

  const updateActivityURL = "http://localhost:8080/activity/update/" + variabel;

  let putRequestActivity= {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(activityJson)
  }

  let inpValue1 = document.querySelector('.updateInput1')
  let inpValue2 = document.querySelector('.updateInput2')
  let inpValue3 = document.querySelector('.updateInput3')
  let inpValue4 = document.querySelector('.updateInput4')
  let inpValue5 = document.querySelector('.updateInput5')


  activityJson.activityName = inpValue1.value;
  activityJson.ageReq = inpValue2.value;
  activityJson.heightReq = inpValue3.value;
  activityJson.equipment = inpValue4.value;
  activityJson.time = inpValue5.value;

  const johnny = await fetch(updateActivityURL, putRequestActivity).catch((error) => console.log(error));
return johnny.json()
out(activityJson)

}

//let hesteknap = document.querySelector('.knapDemOp')
//hesteknap.addEventListener('click', updateActivityInputMaker)

