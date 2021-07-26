function fourthPage() {
  document.querySelector("main").innerHTML = `
    <section class="fourthPagePage">
      <div class="tar">
        <h2>check palindrome</h2>
        <input class="paliTxt" type="text"/input>
        <button class="checkPali">check pali</button>
        </div>  
        <div class="tar">
        <h2>Encrypt / Decrypt text</h2>
        <input class="txt" type="text"/input>
        <input class="num" type="number"/input>
        <button class="decode">Encrypt</button>
        <button class="encode">Decrypt</button>
      </div>  
    </section>`;

  checkPalindrome();
  decode();
  encode();
}

function decode() {
  document.querySelector(".decode").addEventListener("click", () => {
    const input = document.querySelector(".txt");
    const num = Number(document.querySelector(".num").value);

    input.value = convert(input.value, num);
  });
}

function encode() {
  document.querySelector(".encode").addEventListener("click", () => {
    const input = document.querySelector(".txt");
    const num = Number(document.querySelector(".num").value);

    input.value = convert(input.value, -num);
  });
}

function convert(txt, num) {
  return txt
    .split("")
    .map((char) => String.fromCharCode((char.charCodeAt(0) + num + 255) % 255))
    .join("");
}

function checkPalindrome() {
  document.querySelector(".checkPali").addEventListener("click", () => {
    const input = document.querySelector(".paliTxt").value;

    document.querySelector(".paliTxt").style.backgroundColor =
      input === input.split("").reverse().join("") ? "green" : "red";
  });
}
