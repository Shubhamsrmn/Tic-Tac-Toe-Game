let cells = Array.from(document.querySelectorAll(".symbol"));
let newgame = document.querySelector(".newgame");
newgame.addEventListener("click", () => {
  for (let a of cells) a.innerHTML = "";
});
function placeinrow(row, iswin, inc) {
  if (
    cells[row].innerHTML === iswin &&
    cells[row + inc * 1].innerHTML === iswin &&
    cells[row + inc * 2].innerHTML === ""
  ) {
    return (cells[row + inc * 2].innerHTML = "o");
  }
  if (
    cells[row].innerHTML === iswin &&
    cells[row + inc * 2].innerHTML === iswin &&
    cells[row + inc * 1].innerHTML === ""
  ) {
    return (cells[row + inc * 1].innerHTML = "o");
  }
  if (
    cells[row + inc * 1].innerHTML === iswin &&
    cells[row + inc * 2].innerHTML === iswin &&
    cells[row].innerHTML === ""
  ) {
    return (cells[row].innerHTML = "o");
  }
  return null;
}
function checkwinner() {
  let draw = true;
  if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[1].innerHTML &&
    cells[0].innerHTML === cells[2].innerHTML
  )
    winner(cells[0].innerHTML);
  else if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[3].innerHTML &&
    cells[0].innerHTML === cells[6].innerHTML
  )
    winner(cells[0].innerHTML);
  else if (
    cells[3].innerHTML !== "" &&
    cells[3].innerHTML === cells[4].innerHTML &&
    cells[3].innerHTML === cells[5].innerHTML
  )
    winner(cells[3].innerHTML);
  else if (
    cells[1].innerHTML !== "" &&
    cells[1].innerHTML === cells[4].innerHTML &&
    cells[1].innerHTML === cells[7].innerHTML
  )
    winner(cells[1].innerHTML);
  else if (
    cells[6].innerHTML !== "" &&
    cells[6].innerHTML === cells[7].innerHTML &&
    cells[6].innerHTML === cells[8].innerHTML
  )
    winner(cells[6].innerHTML);
  else if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[5].innerHTML &&
    cells[2].innerHTML === cells[8].innerHTML
  )
    winner(cells[2].innerHTML);
  else if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[0].innerHTML === cells[8].innerHTML
  )
    winner(cells[0].innerHTML);
  else if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[2].innerHTML === cells[6].innerHTML
  )
    winner(cells[2].innerHTML);
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") draw = false;
  }
  if (draw) winner("draw");
}
function random() {
  // let times = 0;
  // let random = Math.floor(Math.random() * (8 - 0 + 1) + 0);
  // while (times < 10 && cells[random].innerHTML !== "") {
  //   random = Math.floor(Math.random() * (8 - 0 + 1) + 0);
  //   times++;
  // }
  // if (times == 9 || cells[random].innerHTML !== "") return null;
  // return (cells[random].innerHTML = "o");
  // this for the optimised the game
  // because while loop is taking time ....
  for (let i = cells.length - 1; i >= 0; i--)
    if (cells[i].innerHTML === "") return (cells[i].innerHTML = "o");
  return null;
}
function opponate() {
  let draw =
    placeinrow(0, "o", 1) ||
    placeinrow(3, "o", 1) ||
    placeinrow(6, "o", 1) ||
    placeinrow(0, "o", 3) ||
    placeinrow(1, "o", 3) ||
    placeinrow(2, "o", 3) ||
    placeinrow(0, "o", 4) ||
    placeinrow(2, "o", 2) ||
    placeinrow(0, "x", 1) ||
    placeinrow(3, "x", 1) ||
    placeinrow(6, "x", 1) ||
    placeinrow(0, "x", 3) ||
    placeinrow(1, "x", 3) ||
    placeinrow(2, "x", 3) ||
    placeinrow(0, "x", 4) ||
    placeinrow(2, "x", 2) ||
    random();
  checkwinner();
}
for (let a in cells) {
  cells[a].addEventListener("click", function () {
    if (cells[a].innerHTML === "") {
      cells[a].innerHTML = "x";
      checkwinner();
      setTimeout(() => {
        opponate();
      }, 500);
    }
  });
}
function winner(win) {
  setTimeout(() => {
    document.querySelector("body").classList.add("winner");
    if (win !== "draw")
      document.querySelector(
        ".win-text"
      ).innerHTML = `The Winner is ${win.toUpperCase()}`;
    else {
      document.querySelector(".win-text").innerHTML = `Draw`;
    }
  }, 1000);
  setTimeout(() => {
    document.querySelector("body").classList.remove("winner");
    newgame.click();
  }, 10000);
}
