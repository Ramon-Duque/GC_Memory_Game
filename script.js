//List of variables


// Function to start timer
let count = 0;
function myCounter() {
  document.getElementById("timer").innerHTML = ++count;
}


// randomizer array for cards, with img sources for whatever pics we want to use

const cardImages = [
  {"src": "./images/tajmahal.jpeg"},
  {"src": "./images/giza.jpeg"},
  {"src": "./images/statue_of_liberty.jpeg"},
  {"src": "./images/arcdetriomphe.jpeg"},
  {"src": "./images/rushmore.jpeg"},
  {"src": "./images/colosseum.jpeg"},
]

// function App() {

//   const [cards, setCards] = useState([])
//   const [turns, setTurns] = useState(0)

//   // shuffle cards
// const shuffleCards =()=>{
//   const shuffleCards = [...cardImages, ...cardImages]
//    .sort(( )=> Math.random() - 0.5)
//    .map((card) => ({ ...card, id: Math.random() }))

//    setCards(shuffleCards)
//    setTurns(0)
// }
// console.log(cards, turns);

//   return(
//     <div className="App">
//       <h1>Memory Card Game</h1>
//       <button onClick={shuffleCards}>New Game</button>
//     </div>
//   );
// };

//Function to Flip Cards
// let counter = 0;
// let firstSelection = "";
// let secondSelection = "";
// const cards = document.querySelectorAll(".card-container .card");
//    card-container.forEach((card)=>
//      card.addEventListener("click", () => {
//      card.classList.add("clicked");

//     if (counter === 0 ) {
//      firstSelection = card.getAttribute("monument");
//      counter++
//      } else {
//       secondSelection = card.getAttribute("monument");
//       counter = 0;
//      }
//    });
//   });

let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    

    if (counter === 0) {
      firstSelection = card.getAttribute("monument");
      counter++;
    } else {
      secondSelection = card.getAttribute("monument");
      counter = 0;
    }

    if (firstSelection === secondSelection){
<<<<<<< HEAD
      const matchedCards = document.querySelectorAll(".clicked");
      setTimeout(() =>{
          for(let card of matchedCards){
          card.remove();
        }
      }, 2000);
    } else{
=======
      const matchedCards = document.querySelectorAll(
        ".card[monument= ' + firstSelection + ' ]"
      );
      matchedCards[0].classList.add('matched');
      matchedCards[0].classList.remove('clicked');
      matchedCards[1].classList.add('matched');
      matchedCards[1].classList.remove('clicked');

    }else{
>>>>>>> 5b1bf0d48242453008a665d4454f5053f9b8d68a
      const noMatch = document.querySelectorAll('.card.clicked');

      setTimeout(() => {
        noMatch[0].classList.remove('clicked');
        noMatch[1].classList.remove('clicked');
      },4000);
    }
  });
});

$("#reset").unbind("click", cards);










