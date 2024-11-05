const screen = document.getElementById("screen");

let num1 = 0;
let num2 = 0;
let res = 0;
let operator = "";

window.addEventListener("load", () => {
  document.getElementById("minus").addEventListener("click", () => {
    const num = Number(screen.textContent);
    screen.textContent = num < 0 ? Math.abs(num) : -num;
  });

  document.getElementById("bckspc").addEventListener("click", () => {
    const num = Number(screen.textContent);
    let newNum = Math.abs(num) > 0 ? Math.floor(Math.abs(num) / 10) : 0;
    if (num < 0) newNum = -newNum;
    screen.textContent = newNum;
  });

  Array.from(document.getElementsByClassName("digit")).forEach((d) => {
    d.addEventListener("click", function (e) {
      if (screen.textContent === "0") screen.textContent = e.target.textContent;
      else screen.textContent += e.target.textContent;
    });
  });

  Array.from(document.getElementsByClassName("special")).forEach((s) => {
    s.addEventListener("click", function (e) {
      const num = Number(screen.textContent);

      switch (e.target.textContent) {
        case "1/x":
          screen.textContent = 1.0 / num;
          break;
        case "x^2":
          screen.textContent = num * num;
          break;
        case "sqrt(x)":
          screen.textContent = Math.sqrt(num);
          break;
      }
    });
  });

  Array.from(document.getElementsByClassName("operator")).forEach((o) => {
    o.addEventListener("click", function (e) {
      if (operator === "") {
        operator = e.target.textContent;
        num1 = Number(screen.textContent);
        screen.textContent = 0;
      }
    });
  });

  document.getElementById("equals").addEventListener("click", () => {
    if (num1 === 0) return;
    if (operator === "") return;

    num2 = Number(screen.textContent);
    res = 0;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
    }

    screen.textContent = res;
    num1 = res;
    operator = "";
  });
});
