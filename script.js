let display = document.getElementById("input");

function inputValue(value) {
  display.value += value;
}
function allClear() {
  display.value = "";
}
function clearLast() {
  display.value = display.value.slice(0, -1);
}
function answer() {
  display.value = eval(display.value);
}
