const body = document.querySelector('body');
let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let area = document.querySelector('#area-select')
let addressFirst = document.querySelector('#address-first')
let addressLast = document.querySelector('#address-two')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let text = document.querySelector('#text')
let noneSelect = document.querySelector('#none-select')
let submit = document.querySelector('#submit')

const USERS = [];

submit.addEventListener('click', () => {
  let usersLength = USERS.length + 1;
  let user = {
    id: USERS.length + 1,
    firstName: firstName.value,
    lastName: lastName.value,
    area: area.value,
    addressFirst: addressFirst.value,
    addressLast: addressLast.value,
    city: city.value,
    state: state.value,
    text: text.value,
    noneSelect: noneSelect.value,
  }
  USERS.push(user);

  let userContainer = document.createElement('div');
  userContainer.classList.add('user');
  document.body.appendChild(userContainer);

  for(let key in user) {
    let userKeys = document.createElement('div')
    userKeys.classList.add(key)
    userKeys.textContent = key + ': ' + user[key];
    userContainer.appendChild(userKeys)
  }
});