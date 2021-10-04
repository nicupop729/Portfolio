const getMyElement = (param) => {
  return document.querySelector(param);
};

const createMyElement = (param) => {
  return document.createElement(param);
};

const humbergerButton = getMyElement(".menu-icon");
const overLayNav = getMyElement(".desktop-nav");

humbergerButton.addEventListener("click", () => {
  overLayNav.style.display = "block";
});
