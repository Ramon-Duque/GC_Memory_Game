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

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards
const shuffleCards =()=>{
  const shuffleCards = [...cardImages, ...cardImages]
   .sort(( )=> Math.random() - 0.5)
   .map((card) => ({ ...card, id: Math.random() }))

   setCards(shuffleCards)
   setTurns(0)
}
console.log(cards, turns);

  return(
    <div className="App">
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
};

//Function to Flip Cards
const card = document.getElementById("card-container")
card.addEventListener("click", flipCard);

function flipCard(){
    card.classList.toggle('flipCard');
}

