const pagesList = ["כרטיסיות", "מערכים", "רקורסיה", "אלגוריתמיקה"];
const pagesFunc = [firstPage, secondPage, thirdPage, fourthPage];
let cardId = 0;
let cards = [];

const createElements = (num, elementType) => {
  const elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(document.createElement(elementType));
  }

  return elements;
};

const insertAdjacentElements = (insertTo, list) => {
  list.forEach((item) => insertTo.insertAdjacentElement("beforeend", item));
};

const addTags = (element, tags, values) => {
  for (let i = 0; i < tags.length; i++) {
    element[tags[i]] = values[i];
  }
};

window.onload = () => {
  fireClock();
  addPages();
  firstPage();
};
