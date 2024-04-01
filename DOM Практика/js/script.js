const genre = document.querySelector(".promo__genre");
const bg = document.querySelector(".promo__bg");
const adv = document.querySelectorAll(".promo__adv > img");
const list = document.querySelector(".promo__interactive-list");
const add = document.querySelector(".add");
const input = document.querySelector(".adding__input");
const checkBox = document.querySelector(".checkbox");

adv.forEach((c) => {
  c.remove();
});

bg.style.background = "url(img/1.jpg)";
genre.innerText = "Comedy";

const serias = [
  "OMAR",
  "The Final Legacy",
  "ERTUGRUL",
  "MAGNIFICENT CENTURY",
  "GREAT SELJUKS: GUARDIANS...",
];

const setList = () => {
  list.innerHTML = "";

  serias.forEach((c, i) => {
    list.innerHTML += `<li class="promo__interactive-item">${i + 1} ${c}
      <div class="delete"></div>
    </li>`;
  });

  serias.sort();

};

setList()

function addList() {
  add.addEventListener("submit", (e) => {
    e.preventDefault();

    const newValue = input.value;

    if (checkBox) {
      console.log("любимый сериал добавлен");
    }

    if (newValue) {
      serias.push(newValue);
    }

    setList()
    serias.sort();
    input.value = "";
  });
}

addList();
