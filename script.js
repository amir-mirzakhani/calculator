const output = document.querySelector(".text");
const clearBtn = document.querySelector(".AC");
const delBtn = document.querySelector(".DEL");
const values = document.querySelectorAll(".val");
const equal = document.querySelector(".equal");
const result = document.querySelector(".show");

values.forEach((vals) => {
  vals.addEventListener("click", () => {
    output.value += vals.value;
  });
});

clearBtn.addEventListener("click", () => {
  output.value = "";
  result.value = "";
  result.style.display = "none";
});

delBtn.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});

equal.addEventListener("click", () => {
  result.style.display = "block";
  result.value = "= " + eval(output.value);
});
