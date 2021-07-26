const path = require("path");
const express = require("express");

const { isPrime, getPrimeNumbers } = require("./prime");

const app = express();

app.use(express.json());

app.get("/api/numbers/prime", (req, res) => {
  const amount = parseInt(req.query.amount);

  res.send(getPrimeNumbers(amount).join(","));
});

app.get("/api/numbers/prime/display", (req, res) => {
  res.sendFile(path.join(__dirname, "/prime.html"));
});

app.post("/api/numbers/prime/validate", (req, res) => {
  const body = req.body;
  let isAllPrime = true;

  for (const key in body) {
    if (isPrime(parseInt(body[key]))) {
      isAllPrime = false;
    }
  }

  res.send(isAllPrime);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(4444);
