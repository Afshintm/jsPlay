console.log(global);

var pressButton = document.getElementById("btnPress");
console.log(btn)
pressButton.addEventListener(
  "click",
  function (event) {
    console.log(event);
  },
  false
);
