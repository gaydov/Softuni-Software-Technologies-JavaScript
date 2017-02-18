function main(input) {

    let text = input[0];
    const pattern = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g;

    let matches = text.match(pattern);

    if (matches != null) {

        for (let match of matches) {
            console.log(match.trim());
        }
    }
}