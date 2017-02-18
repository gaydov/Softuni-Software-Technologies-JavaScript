function main(input) {

    let n = parseInt(input[0]);

    let phrases = ["Excellent product.", "Such a great product.", "I always use that product.", "Best product of its category.", "Exceptional product.", "I can’t live without this product."];
    let events = ["Now I feel good.", "I have succeeded with this product.", "Makes miracles.I am happy of the results!", "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!"];
    let authors = ["Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"];
    let cities = ["Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"];

    for (i = 0; i < n; i++) {

        let randomPhrase = phrases[Math.floor((Math.random() * phrases.length))];
        let randomEvent = events[Math.floor((Math.random() * events.length))];
        let randomAuthor = authors[Math.floor((Math.random() * authors.length))];
        let randomCity = cities[Math.floor((Math.random() * cities.length))];

        console.log("%s %s %s - %s", randomPhrase, randomEvent, randomAuthor, randomCity);
    }
}
