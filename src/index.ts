window.addEventListener("load", () => {
  const header = document.createElement("h1");
  header.innerText = "Hello World";

  const body = document.querySelector("body");
  body ? body.appendChild(header) : alert("Something went wrong")
})
