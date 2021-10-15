const head = document.querySelector(".head");

function createHead(){
  const link = document.createElement("link");
  const meta = document.createElement("meta");
  const title = document.createElement("title");
  meta.setAttribute("charset","UTF-8");
  head.appendChild(meta);
  link.rel = "stylesheet";
  link.href = "../../static/css/style.css";
  link.type = "text/css";
  head.appendChild(link);
  title.innerText = "AdventureXP"
  head.appendChild(title);
}
createHead();
