const getShopURL = "http://localhost:8080/shop/get";


async function getAllShop(){
  return fetch(getShopURL).then(response => response.json());
}


async function callGetAllShops(){
  const prom = getAllShop();
  await prom.then(createShopgMap);
}

let shopMap = new Map();

function createShopgMap(data){
  data.forEach(shop => {
    shopMap.set(shop.shopID, shop)
  })
}
