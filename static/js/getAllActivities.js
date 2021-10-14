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
    const createName = document.createElement('h1');
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
