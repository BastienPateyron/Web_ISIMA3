/*
* Hide all the cards
*/
function hideAllCards() {
    var cardTextList = document.getElementsByClassName('card-text')
    for(const card of cardTextList) card.style.display = 'none'
}

/*
* @param id: The id of the selected card
* Hide all flipped card first
*/
function displayCard(id) {
    console.log(id)
    hideAllCards()
    // querySelector sélectionne le premier match de la classe 'card-text' parmi l'élement de notre id
    var text = document.getElementById(id).querySelector('.card-text')
    if (["''", 'none'].includes(text.style.display) ) text.style.display = 'block'
    else text.style.display = 'none'
}

$('.nav').click(function() {
    var id = $(this.id);
    $('html, body').animate({
        scrollTop: ($('#' + id).offset().top)
    }, 1000);
});
