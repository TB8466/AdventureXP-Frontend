const body = document.querySelector("body");

function createHeader(){
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerText = "Welcome";
  header.appendChild(h1);
  body.appendChild(header);
}
createHeader();
