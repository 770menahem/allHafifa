const addPages = () => {
  const listPage = document.querySelector(".listPage");

  pagesList.forEach((page, i) => {
    const li = document.createElement("li");
    li.innerText = page;
    listPage.appendChild(li);

    li.addEventListener("click", () => {
      document.querySelector("main").innerHTML = "";
      pagesFunc[i]();
    });
  });
};

const fireClock = () => {
  setInterval(() => {
    const [date, time] = new Date().toLocaleString().split(",");
    document.querySelector(".clock").innerHTML = `<p>${date} | ${time}</p>`;
  }, 500);
};
