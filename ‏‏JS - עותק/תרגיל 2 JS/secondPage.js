const userCard = (user) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h1>name: ${user.name}</h1>
    <p>age: ${user.age}</p>
    <p>admin: ${user.admin}</p>
    <p>grades: ${user.grades}</p>
    <h3>address:</h3>
    <p>city: ${user.address.city}</p>
    <p>houseNumber: ${user.address.houseNumber}</p>
    `;

  return card;
};

function secondPage() {
  document.querySelector("main").innerHTML = `
    <section class="secondPage"></section>
    <section class="cards"></section>`;

  const det = document.querySelector(".secondPage");
  const [select] = createElements(1, "select");
  const [div] = createElements(1, "div");
  const [input] = createElements(1, "input");
  const [find, allGrades, someGradeGT, filter] = createElements(4, "button");
  const [age, name, admin, grades, address] = createElements(5, "option");

  addTags(find, ["innerText"], ["find"]);
  addTags(allGrades, ["innerText"], ["all grades"]);
  addTags(someGradeGT, ["innerText"], ["some grade"]);
  addTags(filter, ["innerText"], ["filter"]);

  addTags(input, ["type"], ["text"]);
  addTags(age, ["innerText"], ["age"]);
  addTags(name, ["innerText"], ["name"]);
  addTags(admin, ["innerText"], ["admin"]);
  addTags(grades, ["innerText"], ["grades"]);
  addTags(address, ["innerText"], ["address"]);

  findClick(find);
  allGradesClick(allGrades);
  someGradeGTClick(someGradeGT);
  filterClick(filter);

  insertAdjacentElements(det, [select, input, div]);
  insertAdjacentElements(div, [find, allGrades, someGradeGT, filter]);
  insertAdjacentElements(select, [age, name, admin, grades, address]);

  usersCard(users);
}

function allGradesClick(allGrades) {
  allGrades.addEventListener("click", () => {
    const val = document.querySelector("input").value;

    usersCard(
      users.filter((user) => user.grades.every((grade) => grade > val))
    );
  });
}

function someGradeGTClick(someGradesGT) {
  someGradesGT.addEventListener("click", () => {
    const val = document.querySelector("input").value;

    usersCard(users.filter((user) => user.grades.some((grade) => grade > val)));
  });
}

function filterClick(filter) {
  filter.addEventListener("click", () => {
    const val = document.querySelector("input").value;

    usersCard(
      users.filter((user) => {
        const average =
          user.grades.reduce((c, n) => (c += n)) / user.grades.length;

        const isFiltered = average < val && user.address.houseNumber > val;

        if (isFiltered) user.age = Number(user.age) + Number(val);

        return isFiltered;
      })
    );
  });
}

function findClick(find) {
  find.addEventListener("click", () => {
    const param = document.querySelector("select").value;
    const val = document.querySelector("input").value.toLocaleLowerCase();

    switch (param) {
      case "age":
        usersCard(users.filter((user) => user.age > val));
        break;
      case "name":
        usersCard(users.filter((user) => user.name.includes(val)));
        break;
      case "admin":
        usersCard(
          val
            ? users.filter((user) => user.admin)
            : users.filter((user) => !user.admin)
        );
        break;
      case "grades":
        usersCard(
          users.filter((user) => {
            const average =
              user.grades.reduce((c, n) => (c += n)) / user.grades.length;

            return average > val;
          })
        );
        break;
      case "address":
        usersCard(
          users.filter((user) => {
            const [title, value] = val.split(".");
            let show;

            switch (title) {
              case "city":
                show = user.address.city === value;
                break;
              case "houseNumber":
                show = user.address.houseNumber === value;
                break;
              default:
                break;
            }

            return show;
          })
        );
        break;

      default:
        break;
    }
  });
}

function usersCard(userArray) {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";

  userArray.map((user) => {
    insertAdjacentElements(cards, [userCard(user)]);
  });
}
