const http = require("http");
const url = require("url");

const { isPrime, getPrimeNumbers } = require("./prime");

const server = http.createServer(async (req, res) => {
  const path = req.url.split("?")[0];

  if (req.method === "GET" && path === "/api/numbers/prime") {
    getAllPrimeNumberUntil(req, res);
  }

  if (req.method === "POST" && path === "/api/numbers/prime/validate") {
    await isAllParamIsPrime(req, res);
  }

  res.end();
});

server.listen(4444);

function getAllPrimeNumberUntil(req, res) {
  const amount = url.parse(req.url, true).query.amount;
  const primeNum = getPrimeNumbers(parseInt(amount));
  res.write(primeNum.join(","));
}

async function isAllParamIsPrime(req, res) {
  let body = "";
  let isPrimes = true;

  await req.on("data", (chunk) => {
    body += chunk.toString();
  });

  const bodyParam = JSON.parse(body);

  for (const property in bodyParam) {
    if (!isPrime(parseInt(bodyParam[property]))) {
      isPrimes = false;
      break;
    }
  }

  res.write(isPrimes.toString());
}
