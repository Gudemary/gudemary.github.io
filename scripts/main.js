const heading = document.querySelector("h1");
const image = document.querySelector("img");
const button = document.querySelector("button");

image.onclick = () => {
  const imageSource = image.getAttribute("src");
  if (imageSource === "images/firefox-icon.png") {
    image.setAttribute("src", "images/edge-icon.png");
  } else {
    image.setAttribute("src", "images/firefox-icon.png");
  }
};

button.onclick = () => {
  const userName = prompt("What's your name?");
  if (userName !== null) {
    heading.textContent = `Mozilla is cool, ${userName}`;
  }
};
