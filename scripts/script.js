// 1. *******************************************************************************

document.addEventListener('DOMContentLoaded', function() {
  var numberDiv = document.querySelector('.number');

  for (var i = 100; i >= 50; i -= 10) {
    var paragraph = document.createElement('p');
    paragraph.textContent = i;
    numberDiv.appendChild(paragraph);
  }
});

// 2. *******************************************************************************

document.addEventListener('DOMContentLoaded', function() {
  var strings = [ "Пианино", "Гитара", "Скрипка", "Виолончель", "Барабан"];
  var container = document.querySelector('.strings_container');

  for (var i = 0; i < strings.length; i++) {
    var paragraph = document.createElement('p');
    paragraph.textContent = strings[i];
    container.appendChild(paragraph);
  }
});

// 3. *******************************************************************************

const users = [
  { first_name: 'Dominika', last_name: 'Dołżańska', age: 23 },
  { first_name: 'Alicja', last_name: 'Dorożała', age: 25 },
  { first_name: 'Anastasia', last_name: 'Kaczmarek', age: 13 },
  { first_name: 'Gracjan', last_name: 'Aksamski', age: 38 },
  { first_name: 'Mateusz', last_name: 'Laufer', age: 33 },
];

var container = document.querySelector(".users_container");

for (var i = 0; i < users.length; i++) {
  var user = users[i];

  if (user.age >= 18) {
    var card = document.createElement("div");
    card.classList.add("user_card");

    var nameElement = document.createElement("p");
    nameElement.appendChild(document.createTextNode("Имя: " + user.first_name));

    var lastName = document.createElement("p");
    lastName.appendChild(document.createTextNode("Фамилия: " + user.last_name));

    var age = document.createElement("p");
    age.appendChild(document.createTextNode("Возраст: " + user.age));

    card.appendChild(nameElement);
    card.appendChild(lastName);
    card.appendChild(age);

    container.appendChild(card);
  }
}
