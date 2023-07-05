const numbersDiv = document.querySelector('.numbers');

for (let num = 100; num >= 50; num -= 10) {
  const paragraph = document.createElement('p');
  paragraph.textContent = num;
  numbersDiv.appendChild(paragraph);
}

const stringsArray = ['Пианино', 'Гитара', 'Скрипка', 'Виолончель', 'Барабан'];
const stringsDiv = document.querySelector('.strings_container');

for (let str of stringsArray) {
  const paragraph = document.createElement('p');
  paragraph.textContent = str;
  stringsDiv.appendChild(paragraph);
}

const usersArray = [
  { first_name: 'Dominika', last_name: 'Dołżańska', age: 23 },
  { first_name: 'Alicja', last_name: 'Dorożała', age: 25 },
  { first_name: 'Gracjan', last_name: 'Aksamski', age: 38 },
  { first_name: 'Mateusz', last_name: 'Laufer', age: 33 },
];

const usersDiv = document.querySelector('.users_container');

for (let user of usersArray) {
  if (user.age >= 18) {

    const card = document.createElement('div');
    card.classList.add('user-card');

    const name = document.createElement('p');
    name.textContent = `Name: ${user.first_name} ${user.last_name}`;

    const age = document.createElement('p');
    age.textContent = `Age: ${user.age}`;

    card.appendChild(name);
    card.appendChild(age);

    usersDiv.appendChild(card);
  }
}
