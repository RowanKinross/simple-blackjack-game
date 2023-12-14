// Create a simple blackjack game:

let playerHand = 0;
let dealerHand = 0;

let hit = true;



// Deals the player a random number between 4 and 21 inclusive.
function getRandomStart() {
  playerHand = Math.floor(Math.random()*17) + 4;
    alert(`you were dealt ${playerHand}`);
    // If the player has 21 they win!
  dealerHand = Math.floor(Math.random()*17) + 4;
    alert(`the dealer has been dealt a hand`);
    if (playerHand && dealerHand === 21) {
      alert(`it's a draw`)
    } else if (playerHand === 21) {
      alert(`You won!`);
    } else if (dealerHand === 21) {
    alert(`the dealer won!`); 
    } else {
    confirmHit();
    dealerHandHit();
    }
}

function getRandomCard() {
  return Math.floor(Math.random()*9) + 2;  // Deals a random number between 2 and 11 inclusive to the dealer.
}

function confirmHit() { 
  hit = confirm("ok to hit, cancel to stay");
  if (hit) {
    playerHand += getRandomCard(); // If the player hits, add `getRandomCard` to their score
    alert(`you now have ${playerHand}`);
      if (playerHand === 21) { // If the player has 21, stay for them.
        alert(`You won!`)
      } else if (playerHand >21) { // If the player goes over 21 the lose.
      alert(`bust`);
      } else {
      confirmHit();
      }
    } else {
  alert(`you chose to stick at ${playerHand}`); // Repeat until they choose to stay or they bust
    }
  }

getRandomStart()
  
function dealerHandHit() {// If dealer number is less than 17 add another number
  if (dealerHand < 17) {
  dealerHand += getRandomCard(); // Once player stays add a number between 2 and 11 to the dealer's hand.
      if (dealerHand === 21) { // Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
      alert(`the dealer wins - they got 21!`)
      } else if (dealerHand > 21) {
      alert(`the dealer bust`) // If dealer goes over 21 they lose.
      } else {
      dealerHandHit();
      }
  } else {
    alert(`The dealer chose to stick`);
  }  
}

function compareStick() {
    if (playerHand > dealerHand) {
    alert(`the dealer got ${dealerHand}, you got ${playerHand}, you win`);
  } else if (dealerHand > playerHand) {
    alert(`the dealer got ${dealerHand}, you got ${playerHand}, you lose`);
  } else {
    alert(`the dealer got ${dealerHand}, you got ${playerHand}, it's a draw.`)
  }
}

if (playerHand < 21 && dealerHand < 21) { // Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!
  compareStick()
} else if (playerHand > 21 && dealerHand < 21) {
  alert(`the dealer got ${dealerHand}, you lose`) 
} else if (playerHand < 21 && dealerHand > 21) {
  alert(`the dealer got ${dealerHand}, you win`)
} else {
  alert(`the dealer got ${dealerHand}, it's a draw`);
}


