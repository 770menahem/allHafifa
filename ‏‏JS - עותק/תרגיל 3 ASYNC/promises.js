//1//
//a
const getPromise = (value) => {
  return new Promise((res, rej) => {
    res(`message info: ${value}`);
  });
};

getPromise(5).then((res) => console.log(res));

//b
const resAndRej = (value) => {
  return new Promise((res, rej) => {
    if (value === "good") {
      return res(`ok`);
    } else {
      return rej("error");
    }
  });
};

// resAndRej("g")
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

//c
const checkBiggerNum = (first, second) => {
  return new Promise((res, rej) => {
    if (!(typeof first === "number") || !(typeof second === "number")) {
      return rej("Wrong input");
    }

    if (first > second) {
      res("First number is bigger");
    } else if (second > first) {
      res("Second number is bigger");
    } else if (first === second) {
      res("equals");
    }
  });
};

// checkBiggerNum(6, 2)
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

//2//

// resAndRej("good")
//   .then((res) => {
//     console.log(res);
//     getPromise(5).then((res) => {
//       console.log(res);
//       checkBiggerNum(4, 5).then((res) => console.log(res));
//     });
//   })
//   .catch((e) => console.log(e));

//3//

// checkBiggerNum(4, "f")
//   .then()
//   .catch((e) => {
//     console.log(e);
//     resAndRej("w").catch((e) => {
//       console.log(e);
//     });
//   });

//4//
// getPromise(5)
//   .then((res) => {
//     console.log(res);
//     resAndRej("good").then((res) => {
//       console.log(res);
//       checkBiggerNum(4, 5).then((res) => console.log(res));
//     });
//   })
//   .catch((e) => console.log(e));
