window.addEventListener('DOMContentLoaded', init);

function exampleObjForReferenceNotUsed() {
  //  "powers": ["fly", "strength", "immortality"],
  //  "name": "Superwoman",
  //  "sidekick": "",
  //  "wearsACape": true,
  //  "dob": {
  //    "year": 1997,
  //    "month": 04,
  //    "day": 4
  //  },
  //  "image": "https://cdn.pixabay.com/photo/2017/10/11/17/46/graduation-2841875_960_720.jpg"
}

function init() {
  superheroes.forEach(showOneHero);
  //FOR ONE
  //  const template = document.querySelector('template').content;
  //
  //  const clone = template.cloneNode(true);
  //
  //  const h2 = clone.querySelector('h2');
  //
  //  h2.textContent = superheroes[0].name;
  //
  //  const main = document.querySelector('main');
  //
  //  main.appendChild(clone);
}

function showOneHero(hero) {
  //console.log("hey");
  const template = document.querySelector('template').content;

  const clone = template.cloneNode(true);

  const h2 = clone.querySelector('h2');
  h2.textContent = hero.name;

  const img = clone.querySelector('.superhero-img');

  img.src = hero.image;
  img.alt = hero.name;

  if (!hero.wearsACape) {
    const wACimg = clone.querySelector('.wearsACape');
    wACimg.remove();
  }

  const ulPower = clone.querySelector('.powers');

  hero.powers.forEach(power => {
    //console.log("power");
    const li = document.createElement('li');
    li.textContent = power;
    ulPower.appendChild(li);
  });

  const sk = clone.querySelector('.sidekick');

  if (hero.sidekick) {
    sk.textContent += hero.sidekick;
  } else {
    sk.remove();
  }

  const ageEl = clone.querySelector('.age');
  //The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

  const epochHero = new Date(hero.dob.year, hero.dob.month, hero.dob.day)
  const now = Date.now();
  console.log(epochHero);
  console.log(now);
  console.log(hero.name);
  const yearsInSeconds = now - epochHero;
  const age = Math.floor(yearsInSeconds / (60 * 60 * 24 * 365 * 1000));
  console.log(age);

  ageEl.textContent = age;

  const main = document.querySelector('main');

  main.appendChild(clone);
}
