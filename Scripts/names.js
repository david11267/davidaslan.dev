let x = 0;
let names = ["David", "Davve", "David11267", "David127", "Aslan", "Asloni"];

function nameRotation() {
  document.getElementById("jsName").innerHTML = names[x++ % names.length];
}
window.onload = function () {
  setInterval(nameRotation, 1000);
};
