import $ from "jquery";

const screen = $("#screen");

let num1 = 0;
let num2 = 0;
let res = 0;
let operator = "";

$(window).on("load", () => {
  $("#minus").on("click", () => {
    screen.text(() => {
      const num = Number(screen.text());
      return num < 0 ? Math.abs(num) : -num;
    });
  });

  $("#bckspc").on("click", () => {
    screen.text(() => {
      const num = Number(screen.text());
      let newNum = Math.abs(num) > 0 ? Math.floor(Math.abs(num) / 10) : 0;
      if (num < 0) return -newNum;
      return newNum;
    });
  });

  $(".digit").on("click", function (e) {
    if (screen.text() === "0") screen.text($(e.target).text());
    else screen.append($(e.target).text());
  });

  $(".special").on("click", function (e) {
    screen.text(() => {
      const num = Number(screen.text());

      switch ($(e.target).text()) {
        case "1/x":
          return 1.0 / num;
        case "x^2":
          return num * num;
        case "sqrt(x)":
          return Math.sqrt(num);
      }
    });
  });

  $(".operator").on("click", function (e) {
    screen.text(() => {
      if (operator === "") {
        operator = $(e.target).text();
        num1 = Number(screen.text());
        return 0;
      }
    });
  });

  $("#equals").on("click", () => {
    screen.text(() => {
      if (num1 === 0) return;
      if (operator === "") return;

      num2 = Number(screen.text());
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

      num1 = res;
      operator = "";
      return res;
    });
  });
});
