const getMyElement = param => document.querySelector(param)

const createMyElement = param => document.createElement(param)

const menuDiv = createMyElement('div')
menuDiv.className = 'toggle-nav'
const menuUl = createMyElement('ul')
const menuPortfolio = createMyElement('li')
menuPortfolio.textContent = 'Portfolio'
const menuAbout = createMyElement('li')
menuAbout.textContent = 'About'
const menuContact = createMyElement('li')
menuContact.textContent = 'Contact'
const closeIcon = createMyElement('span')
closeIcon.textContent = 'X'
closeIcon.id = 'closeIcon-id'

menuUl.appendChild(menuPortfolio)
menuUl.appendChild(menuAbout)
menuUl.appendChild(menuContact)

menuDiv.appendChild(closeIcon)
menuDiv.appendChild(menuUl)

const humbergerButton = getMyElement('.menu-icon')

menuPortfolio.addEventListener('click', () => {
  menuDiv.style.display = 'none'
  document.location = '#portfolio'
})

menuAbout.addEventListener('click', () => {
  menuDiv.style.display = 'none'
  document.location = '#about'
})

menuContact.addEventListener('click', () => {
  menuDiv.style.display = 'none'
  document.location = '#contact'
})

closeIcon.addEventListener('click', () => {
  menuDiv.style.display = 'none'
})

humbergerButton.addEventListener('click', () => {
  document.body.appendChild(menuDiv)
  menuDiv.style.backgroundColor = '#fff'
  menuDiv.style.display = 'block'
})
