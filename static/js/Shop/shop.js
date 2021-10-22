const saveShopURL = "http://localhost:8080/shop/save";
let postRequestShop = {
  method: "POST",
  headers:{
    "content-type": "application/json"
  },
  body: ""
}


let shopJson = {
  "shopID" : "",
  "tshirtFarve" : "",
  "tshirt_antal" : "",
  "tshirtSize" : "",
  "sodaSmag" : "",
  "soda_antal" : "",
  "pose_type" : "",
  "pose_antal" : ""
}



function createShop(btn){
  const tshirtFarve = document.querySelector(".tshirtFarve");
  const tshirt_antal = document.querySelector(".tshirt_antal");
  const tshirtSize = document.querySelector(".tshirtSize");
  const sodaSmag = document.querySelector(".sodaSmag");
  const soda_antal = document.querySelector(".soda_antal");
  const pose_type = document.querySelector(".pose_type");
  const pose_antal = document.querySelector(".pose_antal");
  shopJson.tshirtFarve = tshirtFarve.value;
  shopJson.tshirt_antal = tshirt_antal.value;
  shopJson.tshirtSize = tshirtSize.value;
  shopJson.sodaSmag = sodaSmag.value;
  shopJson.soda_antal = soda_antal.value;
  shopJson.pose_type = pose_type.value;
  shopJson.pose_antal = pose_antal.value;

  postRequestShop.body = JSON.stringify(shopJson);
  fetch(saveShopURL, postRequestShop).catch((error) => console.log(error));
}

document.querySelector(".CreateShopBtn").addEventListener("click", createShop);
