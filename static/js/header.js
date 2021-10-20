const body = document.querySelector("body");

function createHeader(){
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const goBack = document.createElement("a");
  const wtf = document.createElement("a");
  h1.innerText = "AdventureXP";
  header.appendChild(h1);
  goBack.innerText = "Go Back";
  goBack.href = "../landingPage/home.html";
  header.appendChild(goBack);

  body.appendChild(header);
}
createHeader();
