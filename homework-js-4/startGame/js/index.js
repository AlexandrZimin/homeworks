const button = document.querySelector("#app-button")

let counter = 0

button.addEventListener("click", function () {
  if (counter === 0){
    startGame()
    logAnalytics()
    counter++
  } else{
    logAnalytics()
  }
  return
});


// do not modify
function startGame() {
  console.log("game started!")
}


// do not modify
function logAnalytics() {
  console.log("log analytics")
}