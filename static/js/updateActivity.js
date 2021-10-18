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
    const createNameInput = document.createElement('input');
    const createAgeInput = document.createElement('input');
    const createHeightInput = document.createElement('input');
    const createEquipmentInput = document.createElement('input');
    const createTimeInput = document.createElement('input');
    const createupdateButton = document.createElement('button')
    const createBr = document.createElement('br')
    createNameInput.placeholder = activity.activityName;
    createNameInput.setAttribute('class', "nameclass");
    createAgeInput.placeholder = activity.ageReq;
    createHeightInput.placeholder = activity.heightReq;
    createEquipmentInput.placeholder = activity.equipment;
    createTimeInput.placeholder = activity.time;
    childAppender.appendChild(createNameInput)
    childAppender.appendChild(createAgeInput)
    childAppender.appendChild(createHeightInput)
    childAppender.appendChild(createEquipmentInput)
    childAppender.appendChild(createTimeInput)
    childAppender.appendChild(createupdateButton)
    childAppender.appendChild(createBr)
  })

}
let childAppender = document.querySelector('.appendingUpdate')

callGetAllActivities();
