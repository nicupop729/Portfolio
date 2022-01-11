const projectUl = document.querySelector('.projects');
const humbergerButton = document.querySelector('.menu-icon');
const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const invalidH3 = document.querySelector('.invalid-email');

humbergerButton.addEventListener('click', () => {
  const textHTML = `
  <div
  class="toggle-nav"
 >
  <span id="close-icon-id">
    <ion-icon name="close-outline"></ion-icon>
  </span>
  <ul>
    <li id="portf-mob-nav">Portfolio</li>
    <li id="ab-mob-nav">About</li>
    <li id="cont-mob-nav">Contact</li>
  </ul>
</div>
  `;
  document.body.insertAdjacentHTML('afterbegin', textHTML);

  const menuDiv = document.querySelector('.toggle-nav');
  const closeIcon = document.querySelector('#close-icon-id');
  const menuPortfolio = document.querySelector('#portf-mob-nav');
  const menuAbout = document.querySelector('#ab-mob-nav');
  const menuContact = document.querySelector('#cont-mob-nav');

  menuDiv.style.backgroundColor = '#fff';
  menuDiv.style.display = 'block';

  closeIcon.addEventListener('click', () => {
    menuDiv.style.display = 'none';
  });

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
});

const projects = [
  {
    name: 'Awesome Books',
    description:
      'A basic website built using HTML, CSS and JavaScript that allows users to add and remove awesome books to or from a list',
    projectImg: './src/projects-screenshots/awesome-books.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Terminal',
      'Local Storage',
    ],
    liveVersion: 'https://codepantherr.github.io/Awesome-Books/',
    gitHubRepo: 'https://github.com/codepantherr/Awesome-Books',
  },
  {
    name: 'Leaderboard for Game Snake',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
    projectImg: './src/projects-screenshots/leaderboard.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Webpack',
      'Terminal',
      'GitFlow',
      'API',
    ],
    liveVersion: 'https://leaderboard-snake-game.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/Leaderboard',
  },
  {
    name: 'Exhibition - Ancient Egypt',
    description:
      'This project is about an art Exhibition titled "Exhibition 2022 — London: Ancient Egypt" hold next year in London UK. The work was ordered by Global Exhibitions LTD UK.',
    projectImg: './src/projects-screenshots/exhibition-project.jpg',
    techologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Terminal'],
    liveVersion: 'https://nicupop729.github.io/Exhibition-Page/',
    gitHubRepo: 'https://github.com/nicupop729/Exhibition-Page',
  },
  {
    name: 'Three Pizza Guyzz',
    description:
      'This website comprises a pizza restaurant menu of Three Pizza Guyzz Restaurant. Inspired by the best pizza recipes from the internet and by not claiming the recipes as their one, they share them with the users, to give them the possibility to bake their pizza at home. If internet users want to become customers, they can reserve a particular pizza for a few days, and the restaurant takes the responsibility that after the moment the customer arrives at the spot, the pizza will be ready in a maximum of 15 minutes.',
    projectImg: './src/projects-screenshots/Three-Pizza-Guyzz.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Webpack',
      'Jest-test',
      'GitFlow',
      'Terminal',
    ],
    liveVersion: 'https://three-pizza-guyzz.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/Three-Pizza-Guyzz-JS-Capstone',
  },
  {
    name: "Space Travellers' Hub",
    description:
      'This application works with real live data from the SpaceX API. It was built for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.',
    projectImg: './src/projects-screenshots/travellers-hub-home-page.png',
    techologies: [
      'JavaScript',
      'React',
      'React-thunk',
      'Redux',
      'CSS',
      'GitHub',
      'Jest-test',
      'GitFlow',
    ],
    liveVersion: 'https://space-travellers-hub-react-redux.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/space-travellers-hub',
  },
  {
    name: 'World Countries',
    description:
      'Fetching data from REST COUNTRIES API, this app (mobile version for now) gives informations like area, population, capital, and borders for 195 countries from seven continents.',
    projectImg: './src/projects-screenshots/countries-world.png',
    techologies: [
      'JavaScript',
      'React',
      'React-thunk',
      'Redux',
      'CSS',
      'GitHub',
      'Jest-test',
      'GitFlow',
    ],
    liveVersion: 'https://world-countries-react-redux.netlify.app/',
    gitHubRepo: 'https://github.com/nicupop729/world-countries--react-capstone',
  },
];

const loadProject = (projects) => {
  projects.forEach((project) => {
    const textHtml = `
    <li class="project">
      <div class="project-img">
        <img
          class="img"
          src="${project.projectImg}"
          alt="image placeholder"
        />
      </div>
      <h3 class="project-title">${project.name}</h3>
      <ul class="project-langs">
      
      </ul>
      <a href="#" class="button">See Project</a>
    </li>
    `;
    projectUl.insertAdjacentHTML('beforeend', textHtml);
  });
};

const displayTech = (projects) => {
  const techologList = [...document.querySelectorAll('.project-langs')];
  projects.forEach((project, i) => {
    project.techologies.forEach((tech) => {
      const textHtml = `
             <li class="project-lang">${tech}</li>
            `;
      techologList[i].insertAdjacentHTML('beforeend', textHtml);
    });
  });
};

const clickForPopUp = (projects) => {
  const projectBtn = [...document.querySelectorAll('.button')];
  projectBtn.forEach((btn, i) => {
    btn.addEventListener(
      'click',
      // eslint-disable-next-line no-undef
      (displayPopUp = () => {
        const textHtml = `
        <div class="pop-up-div">
          <div class="inner-pop-up-div">
            <div class="pop-up-img-div">
              <img
                class="pop-up-img"
                src="${projects[i].projectImg}"
              />
            </div>
            <div class="cont-div">
              <h3 class="cont-title">${projects[i].name}</h3>
              <div class="tech-list-div">
                <ul class="project-langs pop-up-mobile-langs">
                
                </ul>
              </div>
              <div class="btn-div">
                <a
                  class="button popUpBtn"
                  href="${projects[i].gitHubRepo}"
                  target="_blank"
                  rel="noopener"
                >
                  See source
                </a>
                <a
                  class="button popUpBtn"
                  href="${projects[i].liveVersion}"
                  target="_blank"
                  rel="noopener"
                >
                  See live
                </a>
              </div>
            </div>
            <p class="pop-up-desc">
              ${projects[i].description}
            </p>
            <span class="close-pop-up"><ion-icon name="close-outline"></ion-icon></span>
          </div>
        </div>;
        `;
        document.body.insertAdjacentHTML('beforebegin', textHtml);

        const popUpDiv = document.querySelector('.pop-up-div');
        popUpDiv.style.display = 'block';

        const displayTechPopUp = (projects) => {
          const techologList = document.querySelector('.pop-up-mobile-langs');
          projects[i].techologies.forEach((tech) => {
            const textHtml = `
            <li class="project-lang pop-up-tech-langs">${tech}</li>
                `;
            techologList.insertAdjacentHTML('beforeend', textHtml);
          });
        };

        displayTechPopUp(projects);
        const closePopUp = document.querySelector('.close-pop-up');
        closePopUp.addEventListener('click', () => {
          popUpDiv.style.display = 'none';
          window.location.reload();
        });
      }),
    );
  });
};

const userData = [];

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

function saveDataToLs() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function getDataFromForm() {
  const newUser = new User(nameInput.value, emailInput.value);
  userData.length = 0;
  userData.push(newUser);
  saveDataToLs();
}

function getDataFromLocalSt() {
  const dataFromLocal = JSON.parse(localStorage.getItem('userData'));
  if (dataFromLocal) {
    dataFromLocal.forEach((data) => {
      nameInput.value = data.name;
      emailInput.value = data.email;
    });
  }
}

form.addEventListener('submit', getDataFromForm);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const capitalLetters = [];

  const emailCheck = emailInput.value.split('');
  for (let i = 0; i < emailCheck.length; i += 1) {
    if (!/[a-z]/.test(emailCheck[i]) && /[A-Z]/.test(emailCheck[i])) {
      capitalLetters.push(emailCheck[i]);
    }
  }

  function errorMessage() {
    invalidH3.textContent = 'Please enter your email in lower case';
    invalidH3.style.display = 'block';
    invalidH3.style.color = 'red';
    emailInput.style.border = 'thin solid red';
    setTimeout(() => {
      invalidH3.style.display = 'none';
      emailInput.style.border = '1px solid #d0d9d4';
    }, 3000);
  }

  function corectEmail() {
    invalidH3.textContent = '';
    form.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else corectEmail();
});

window.onload = () => {
  loadProject(projects);
  displayTech(projects);
  clickForPopUp(projects);
  getDataFromLocalSt();
};
