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
    name: 'Hundreds of components',
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
    name: 'Multi-Post',
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
    name: 'Glory',
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
    const projectLi = createMyElement('li');
    projectLi.className = 'project';
    const imageDiv = createMyElement('div');
    imageDiv.classList.add('project-img');

    projectLi.appendChild(imageDiv);
    const projectImage = createMyElement('img');
    projectImage.className = 'img';
    projectImage.src = project.projectImg;
    imageDiv.appendChild(projectImage);
    const projectH3 = createMyElement('h3');
    projectH3.textContent = project.name;
    projectH3.className = 'project-title';
    const innerUl = createMyElement('ul');
    innerUl.className = 'project-langs';

    const projectBtn = createMyElement('a');
    projectBtn.className = 'button';
    projectBtn.href = '#';
    projectBtn.textContent = 'See Project';

    for (let i = 0; i < project.techologies.length - 2; i += 1) {
      const innerLi = createMyElement('li');
      innerLi.className = 'project-lang';
      innerLi.textContent = project.techologies[i];
      innerUl.appendChild(innerLi);
    }
    projectLi.appendChild(imageDiv);
    projectLi.appendChild(projectH3);
    projectLi.appendChild(innerUl);
    projectLi.appendChild(projectBtn);

    projectBtn.addEventListener('click', () => {
      const popUpDiv = createMyElement('div');
      popUpDiv.className = 'pop-up-div';
      const innerPopUpDiv = createMyElement('div');
      innerPopUpDiv.className = 'inner-pop-up-div';
      const popUpImgDiv = createMyElement('div');
      popUpImgDiv.className = 'pop-up-img-div';
      const popUpImg = createMyElement('img');
      popUpImg.className = 'pop-up-img';
      popUpImg.src = project.projectImg;
      const popUpContDiv = createMyElement('div');
      popUpContDiv.className = 'cont-div';
      const contTitle = createMyElement('h3');
      contTitle.className = 'cont-title';
      contTitle.textContent = project.name;
      const techListDiv = createMyElement('div');
      techListDiv.className = 'tech-list-div';
      const techUl = createMyElement('ul');
      techUl.className = 'project-langs pop-up-mobile-langs';
      const btnDiv = createMyElement('div');
      btnDiv.className = 'btn-div';
      const popUpBtn = createMyElement('a');
      popUpBtn.className = 'button popUpBtn';
      popUpBtn.textContent = 'See live';
      popUpBtn.href = project.liveVersion;

      const popUpRepoBtn = createMyElement('a');
      popUpRepoBtn.className = 'button popUpBtn';
      popUpRepoBtn.textContent = 'See source';
      popUpRepoBtn.href = project.gitHubRepo;

      const popUpDesc = createMyElement('p');
      popUpDesc.className = 'pop-up-desc';
      popUpDesc.textContent = project.description;
      const closePopUp = createMyElement('span');
      closePopUp.className = 'close-pop-up';
      closePopUp.textContent = 'x';
      popUpDiv.style.display = 'block';

      for (let i = 0; i < project.techologies.length; i += 1) {
        const innerLi = createMyElement('li');
        innerLi.className = 'project-lang pop-up-tech-langs';
        innerLi.textContent = project.techologies[i];
        techUl.appendChild(innerLi);
      }

      btnDiv.appendChild(popUpRepoBtn);
      btnDiv.appendChild(popUpBtn);
      techListDiv.appendChild(techUl);
      popUpImgDiv.appendChild(popUpImg);
      innerPopUpDiv.appendChild(popUpImgDiv);
      popUpContDiv.appendChild(contTitle);
      popUpContDiv.appendChild(techListDiv);
      popUpContDiv.appendChild(btnDiv);
      innerPopUpDiv.appendChild(popUpContDiv);
      innerPopUpDiv.appendChild(popUpDesc);
      innerPopUpDiv.appendChild(closePopUp);
      popUpDiv.appendChild(innerPopUpDiv);
      document.body.appendChild(popUpDiv);

      closePopUp.addEventListener('click', () => {
        popUpDiv.style.display = 'none';
      });
    });

    const projectUl = getMyElement('.projects');
    projectUl.appendChild(projectLi);
  });
}

loadProject();

const form = getMyElement('form');
const input = getMyElement('#email-input');
const formContainer = getMyElement('.contact-form');
const error = createMyElement('span');
error.className = 'errorSpan';
formContainer.appendChild(error);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const capitalLetters = [];

  const emailCheck = input.value.split('');
  for (let i = 0; i < emailCheck.length; i += 1) {
    if (!/[a-z]/.test(emailCheck[i]) && /[A-Z]/.test(emailCheck[i])) {
      capitalLetters.push(emailCheck[i]);
    }
  }

  function errorMessage() {
    error.textContent = 'Please enter your email in lowercase';
    error.style.color = 'red';
  }

  function corectEmail() {
    error.textContent = '';
    form.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else corectEmail();
});

displayProjects();
