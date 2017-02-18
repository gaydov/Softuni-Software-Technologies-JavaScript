function main(input) {

    let bannedWords = input[0].split(", ");
    let text = input[1];

    for (i = 0; i < bannedWords.length; i++) {

        if (text.includes(bannedWords[i])) {

            let replacement = new Array(bannedWords[i].length + 1).join('*');
            let bannedWord = new RegExp(bannedWords[i], 'g');
            text = text.replace(bannedWord, replacement);
        }
    }

    console.log(text);
}