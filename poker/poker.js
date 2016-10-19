// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

var randomDeal = function(){
return Math.floor(Math.random()*51)
}
var randomCard = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  $("#deal").on("click", function(event) {
    event.preventDefault()
    var c1= window.getDeck()[randomDeal()]
    var c2= window.getDeck()[randomCard(0,51)]
    var c3= window.getDeck()[randomDeal()]
    var c4= window.getDeck()[randomDeal()]
    var c5= window.getDeck()[randomDeal()]
    $("#c1").attr("src", "http://golearntocode.com/images/cards/"+ c1 + ".png")
    $("#c2").attr("src", "http://golearntocode.com/images/cards/"+ c2 + ".png")
    $("#c3").attr("src", "http://golearntocode.com/images/cards/"+ c3 + ".png")
    $("#c4").attr("src", "http://golearntocode.com/images/cards/"+ c4 + ".png")
    $("#c5").attr("src", "http://golearntocode.com/images/cards/"+ c5 + ".png")
  })
})
