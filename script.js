const getMyElement = (param) => {
  return document.querySelector(param);
};

const getAllMyElement = (param) => {
  return document.querySelectorAll(param);
};

const createMyElement = (param) => {
  return document.createElement(param);
};

// Create a div:
const menuDiv = createMyElement("div");
menuDiv.className = "toggle-nav";
// In the div create a ul
const menuUl = createMyElement("ul");
// In the ul we will create 3lis
const menuPortfolio = createMyElement("li");
menuPortfolio.textContent = "Portfolio";
const menuAbout = createMyElement("li");
menuAbout.textContent = "About";
const menuContact = createMyElement("li");
menuContact.textContent = "Contact";
const closeIcon = createMyElement("span");
closeIcon.textContent = "X";
closeIcon.id = "closeIcon-id";

//Append the lis to the ul:
menuUl.appendChild(menuPortfolio);
menuUl.appendChild(menuAbout);
menuUl.appendChild(menuContact);

//Append the ul in the Div:
menuDiv.appendChild(closeIcon);
menuDiv.appendChild(menuUl);

const humbergerButton = getMyElement(".menu-icon");

menuPortfolio.addEventListener("click", () => {
  menuDiv.style.display = "none";
  document.location = "#portfolio";
});

menuAbout.addEventListener("click", () => {
  menuDiv.style.display = "none";
  document.location = "#about";
});

menuContact.addEventListener("click", () => {
  menuDiv.style.display = "none";
  document.location = "#contact";
});

//Add evenlistener to the closeIcon:
closeIcon.addEventListener("click", () => {
  menuDiv.style.display = "none";
});

humbergerButton.addEventListener("click", () => {
  document.body.appendChild(menuDiv);
  menuDiv.style.backgroundColor = "#fff";
  menuDiv.style.display = "block";
});
