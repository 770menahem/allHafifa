function getPrimeNumbers(amount) {
  let count = 0;
  const prime = [];

  for (let i = 1; i <= amount; i++) {
    if (isPrime(i)) {
      prime.push(i);
      count++;
    }
  }

  return prime;
}
function isPrime(n) {
  // Corner case
  if (n <= 1) return false;

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

module.exports = { isPrime, getPrimeNumbers };
