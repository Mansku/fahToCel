let fah = document.getElementById("fahrenheit");
let cel = document.getElementById("celcius");
window.onload = function() {
  fah.addEventListener("input", function() {
    cel.value = ((fah.value - 32) * 5) / 9;
    // console.log(cel.value);
  });
  cel.addEventListener("input", function() {
    fah.value = (cel.value * 9) / 5 + 32;
    // console.log(fah.value);
  });
};
