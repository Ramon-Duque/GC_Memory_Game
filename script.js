//List of variables


// Function to start timer
let count = 0;
function myCounter() {
  document.getElementById("timer").innerHTML = ++count;
}


// randomizer array for cards, with img sources for whatever pics we want to use

const cardArray = [
 {
  name: 'arcdetriophme',
  img: 'images/arcdetriomphe.jpeg',
 },
 {
  name: 'colosseum',
  img: 'images/colosseum.jpeg',
 },
 {
  name: 'giza',
  img: 'images/giza.jpeg',
 },
 {
  name: 'rushmore',
  img: 'images/rushmore.jpeg',
 },
 {
  name: 'statueofliberty',
  img: 'images/statue_of_liberty.jpeg',
 },
  {
  name: 'tajmahal',
  img: 'images/tajmahal.jpeg',
  }
]

const memoryGame = document.getElementById('card-container')


const grid = document.createElement('section')
grid.setAttribute('class', 'grid')


memoryGame.appendChild(grid)

let memoryGameGrid = cardArray.concat(cardArray)
memoryGameGrid.sort(() => 0.5 - Math.random());

memoryGameGrid.forEach((item) => {
 
  const card = document.createElement('div')

  
  card.classList.add('card')

  
  card.dataset.name = item.name

  
  card.style.backgroundImage = `url('${item.img}')`

  
  grid.appendChild(card)
});

memoryGameGrid.forEach((item) => {
 
  const card = document.createElement('div')
  card.classList.add('card')
  card.dataset.name = item.name

  
  const front = document.createElement('div')
  front.classList.add('front')

  
  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${item.img})`

  
  grid.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
})




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
=======

>>>>>>> 3d05fe6c924ccb76a0e563e9775112971e0acca6
      const matchedCards = document.querySelectorAll(".clicked");
      setTimeout(() =>{
          for(let card of matchedCards){
          card.remove();
        }
      }, 2000);
    } else{
<<<<<<< HEAD
      const noMatch = document.querySelectorAll('.card.clicked');

      setTimeout(() => {
        noMatch[0].classList.remove('clicked');
        noMatch[1].classList.remove('clicked');
      },4000);
    }
  });
});
=======
          const matchedCards = document.querySelectorAll(
        ".card[monument= ' + firstSelection + ' ]"
      );
      matchedCards[0].classList.add('matched');
      matchedCards[0].classList.remove('clicked');
      matchedCards[1].classList.add('matched');
      matchedCards[1].classList.remove('clicked');

  
    }else{
            const noMatch = document.querySelectorAll('.card.clicked');
            setTimeout(() => {
              noMatch[0].classList.remove('clicked');
              noMatch[1].classList.remove('clicked');
            },4000);
          }
        });
      });
      $("#reset").unbind("click", cards);
>>>>>>> 3d05fe6c924ccb76a0e563e9775112971e0acca6











