const out = (str) => console.log(str);

const getActivitiesURL = "http://localhost:8080/activity/get";


async function getAllActivities(){
  return fetch(getActivitiesURL).then(response => response.json());
}


async function callGetAllActivities(btn){
  const prom = getAllActivities();
  await prom.then(createActivityMap);
}


let activityMap = new Map();

function createActivityMap(data){
  data.forEach(Activity =>{
    activityMap.set(Activity.activityId, Activity)
  })

}

async function getAll (){
  await callGetAllActivities();
}
