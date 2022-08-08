// Function to start timer
let count = 0;
function myCounter() {
  document.getElementById("timer").innerHTML = ++count;
}

//Function to Flip Cards
const card = document.getElementById("card-container")
card.addEventListener("click", flipCard);

function flipCard(){
    card.classList.toggle('flipCard');
}
