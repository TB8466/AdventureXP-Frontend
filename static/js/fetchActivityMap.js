const out = (str) => console.log(str);

const getActivitiesURL = "http://localhost:8080/activity/get";

// 1 function
async function getAllActivities(){
  return fetch(getActivitiesURL).then(response => response.json());
}

// 2 function
async function callGetAllActivities(btn){
  const prom = getAllActivities();
  await prom.then(createActivityMap);
}


let activityMap = new Map();
// 3
function createActivityMap(data){
  data.forEach(Activity =>{
    activityMap.set(Activity.activityId, Activity)
  })

}
// 4 function
async function getAll (){
  await callGetAllActivities();
}

