function firstPage() {
  cards = JSON.parse(localStorage.getItem("cards")) || [];

  document.querySelector("main").innerHTML = `
     <section class="details"></section>
     <section class="cards"></section>`;

  createForm();
  submitCard();

  cards.forEach((card) =>
    showCard(card.name, card.email, card.job, card.cardId)
  );
}

function createForm() {
  const page = document.querySelector(".details");

  const [form] = createElements(1, "form");
  const [name, email, job] = createElements(3, "input");
  const [nameL, emailL, jobL] = createElements(3, "label");
  const [submit] = createElements(1, "button");

  const tags = ["type", "classList", "placeHolder"];

  addTags(name, tags, ["text", "name", "enter name"]);
  addTags(email, tags, ["text", "email", "enter email"]);
  addTags(job, tags, ["text", "job", "enter job"]);

  submit.className = "submit";

  nameL.innerHTML = "name";
  emailL.innerHTML = "email";
  jobL.innerHTML = "job";
  submit.innerHTML = "submit";

  insertAdjacentElements(form, [nameL, name, emailL, email, jobL, job, submit]);

  page.insertAdjacentElement("beforeend", form);
}

function submitCard() {
  document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector(".name").value;
    const job = document.querySelector(".job").value;
    const email = document.querySelector(".email").value;

    addCard(job, name, email);
  });
}

function addCard(job, name, email) {
  job = job.split("פקיד").join("");

  email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
    email
  )
    ? email
    : "valid@gmil.com";

  if (name.length >= 2) {
    cards.push({ name, email, job, cardId });

    localStorage.cards = JSON.stringify(cards);
    showCard(name, email, job, cardId);
    cardId++;
  } else {
    alert("name field require 2 letter minimum");
  }
}

function showCard(name, email, job, id) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <button class='del' id='${id}'>x</button>
    <h1>name: ${name}</h1>
    <p>mail: ${email}</p>
    <p>job: ${job}</p>
    `;

  document.querySelector(".cards").insertAdjacentElement("beforeend", card);

  delCard(card, id);
}

function delCard(card, id) {
  document.getElementById(id).addEventListener("click", (e) => {
    card.style.display = "none";

    cards = cards.filter((currCard) => currCard.cardId !== Number(e.target.id));

    localStorage.cards = JSON.stringify(cards);
  });
}
