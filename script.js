// const { url } = require('inspector');

// const { create } = require('domain');

const getMyElement = (param) => document.querySelector(param);

const createMyElement = (param) => document.createElement(param);

const menuDiv = createMyElement('div');
menuDiv.className = 'toggle-nav';
const menuUl = createMyElement('ul');
const menuPortfolio = createMyElement('li');
menuPortfolio.textContent = 'Portfolio';
const menuAbout = createMyElement('li');
menuAbout.textContent = 'About';
const menuContact = createMyElement('li');
menuContact.textContent = 'Contact';
const closeIcon = createMyElement('span');
closeIcon.textContent = 'X';
closeIcon.id = 'closeIcon-id';
// let projectUl = getMyElement('projects');
let projectImg = createMyElement('img');

menuUl.appendChild(menuPortfolio);
menuUl.appendChild(menuAbout);
menuUl.appendChild(menuContact);

menuDiv.appendChild(closeIcon);
menuDiv.appendChild(menuUl);

const humbergerButton = getMyElement('.menu-icon');

menuPortfolio.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#portfolio';
});

menuAbout.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#about';
});

menuContact.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.location = '#contact';
});

closeIcon.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

humbergerButton.addEventListener('click', () => {
  document.body.appendChild(menuDiv);
  menuDiv.style.backgroundColor = '#fff';
  menuDiv.style.display = 'block';
});

const projects = [
  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },
  {
    name: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },

  {
    name: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },
  {
    name: 'Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    projectImg: './src/resources/Snapshoot-Portfolio.png',
    techologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://nicupop729.github.io/Web_Developer_Portfolio/',
    gitHubRepo: 'https://github.com/nicupop729/Web_Developer_Portfolio',
  },
];




function loadProject() {
  projects.forEach((project) => {

    preventDefault = true;
    let projectLi = createMyElement('li');
    projectLi.className = 'project';
    let imageDiv = createMyElement('div');
    imageDiv.classList.add('project-img');

    projectLi.appendChild(imageDiv);
    let projectImage = createMyElement('img');
    projectImage.className = 'img';
    projectImage.src = project.projectImg;
    imageDiv.appendChild(projectImage);
    let projectH3 = createMyElement('h3');
    projectH3.textContent = project.name;
    projectH3.className = 'project-title';
    let innerUl = createMyElement('ul');
    innerUl.className = 'project-langs';
    
    var projectBtn = createMyElement('a');
    projectBtn.className = 'button proBtn';
    projectBtn.href = '#';
    projectBtn.textContent = "See Project"

    for(let i = 0; i < project.techologies.length - 2; i++){
      var innerLi = createMyElement('li');
      innerLi.className = 'project-lang';
      innerLi.textContent = project.techologies[i]
      innerUl.appendChild(innerLi);
    }
    projectLi.appendChild(imageDiv);
    projectLi.appendChild(projectH3);
    projectLi.appendChild(innerUl);
    projectLi.appendChild(projectBtn);

    
    let projectUl = getMyElement('.projects');
    projectUl.prepend(projectLi);
  });
}











loadProject();

