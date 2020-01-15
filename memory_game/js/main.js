console.log("Up and running!");


let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];
let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score();
		} else {
			alert("Sorry, try again.");
		}

	cardsInPlay.pop();
	cardsInPlay.pop();	
}

function flipCard(){

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length % 2 === 0) {
		checkForMatch();
	}
}

console.log(cards[0].suit);
console.log(cards[0].cardImage);

console.log(cards[2].suit);
console.log(cards[2].cardImage);

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();

function resetfun(){
	//location.reload();
	createBoard();
}

function score() {
	var score = document.getElementsByTagName('td')[1].textContent;
	score = parseInt(score);
	console.log("current score = " + score);
	score += 1;
	document.getElementsByTagName('td')[1].innerHTML = score;
	console.log(" score after addition = " + score);

}
