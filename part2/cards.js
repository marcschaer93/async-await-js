let BASE_URL = "https://deckofcardsapi.com/api"

// 1
async function part1() {
    let response = await $.getJSON(`${BASE_URL}/deck/new/draw/`)
    console.log(response);
    let {value, suit} = response.cards[0]
    console.log(`${value} of ${suit}`);
}

part1()


// 2
// let card1 = null
async function part2() {
    let card1 = await $.getJSON(`${BASE_URL}/deck/new/draw/`)
    deckId = card1.deck_id
    console.log(deckId);
    let card2 = await $.getJSON(`${BASE_URL}/deck/${deckId}/draw/`)
    let cards = [card1, card2];
    cards.forEach((card) => {
        console.log(`${card.cards[0].value} of ${card.cards[0].suit}`)
    }
    )
}

part2()


// 3
async function part3() {
    let deckData = await $.getJSON(`${BASE_URL}/deck/new/draw/`)
    $("#btn").on("click", async function() {
        let cardData = await $.getJSON(`${BASE_URL}/deck/${deckData.deck_id}/draw/`)
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $(".card-area").append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (cardData.remaining === 0) $("#btn").remove();
    })
}

part3()




