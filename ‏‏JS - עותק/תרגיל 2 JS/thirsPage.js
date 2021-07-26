const createTriangle = (pos, sidelen) => {
  const c = document.querySelector("#canvas");
  const ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(...pos); // start point

  ctx.lineTo(pos[0] + sidelen / 2, pos[1] - sidelen * Math.sin(Math.PI / 3)); // start to hight point
  ctx.lineTo(pos[0] + sidelen, pos[1]); // hight to end
  ctx.closePath(); // end to start
  ctx.fill();
};

const createSierpinskiTriangle = (pos, sidelen, depth) => {
  const innerSideLine = sidelen / 2; // inner triangle end/start in half of bottom line of parent triangle
  const innerTrianglesPositions = [
    pos, // bottom left point
    [pos[0] + innerSideLine, pos[1]], // next triangle start in middle of full width
    [
      pos[0] + innerSideLine / 2,
      pos[1] - Math.sin(Math.PI / 3) * innerSideLine,
    ], // third triangle start 1/4 of full width in hight
  ]; // the 3 inner triangle

  if (depth === 0) {
    innerTrianglesPositions.map((innerTriangle) =>
      createTriangle(innerTriangle, innerSideLine)
    ); // run on 3 inner triangle and paint them
  } else {
    innerTrianglesPositions.map((innerTriangle) =>
      createSierpinskiTriangle(innerTriangle, innerSideLine, depth - 1)
    ); // calc the inner triangle of current triangle
  }
};

function thirdPage() {
  document.querySelector("main").innerHTML = `
    <div class="thirdPage">
    <div class="fiboDiv">
    <input class="fiboNum" type="number" value="5"/>
    <button class="fibo">fibo</button>
    <p class="res">5 in fibonacci is: 8</p>
    </div>
    <hr/>
    <section class="title">
    1<input class="range" type="range" min="1" max="6" value="3"/>6
    </section>
    <canvas class="board" id='canvas' width='500' height='500' color='red'></canvas>
    </div>`;

  document.querySelector(".fibo").addEventListener("click", () => {
    const num = document.querySelector(".fiboNum").value;
    const res = findFiboNum(num);
    document.querySelector(".res").innerHTML = `${num} in fibonacci is: ${res}`;
  });

  const startPoints = [0, 500];
  const endPoint = 500;
  const timeToRepeat = 3;
  document.querySelector(".range").addEventListener("input", (e) => {
    const c = document.querySelector("#canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createSierpinskiTriangle(startPoints, endPoint, e.target.value);
  });

  createSierpinskiTriangle(startPoints, endPoint, timeToRepeat);
}

function findFiboNum(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = findFiboNum(num - 1, memo) + findFiboNum(num - 2, memo));
}
