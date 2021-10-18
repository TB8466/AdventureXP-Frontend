const out = (str) => console.log(str);

const getActivitiesURL = "http://localhost:8080/activity/get";


function getAllActivities(){
  return fetch(getActivitiesURL).then(response => response.json());
}

function callGetAllActivities(btn){
  const prom = getAllActivities();
  prom.then(createActivityMap);
}


let activityMap = new Map();

function createActivityMap(data){
  data.forEach(Activity =>{
    activityMap.set(Activity.activityId, Activity)
  })

}
callGetAllActivities();
