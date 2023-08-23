let favNumber = 16;
let baseURL = "http://numbersapi.com";

// 1 
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}/?json`)
    console.log('DATA', data);
}

part1()


// 2
let favNumbers = [16, 28, 327]
async function part2() {
    let facts = await $.getJSON(`${baseURL}/${favNumbers}/?json`)
    console.log('facts', facts);
}

part2()


// 3
async function part3() {
    let facts = await Promise.all(
    Array.from({length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(fact => {
        $("#list-facts").append(`<li>${fact.text}</li>`)
    });
};

part3()





