function main(input) {

    let keyword = input[0];
    const delimitersForSentences = /[\.\?\!]/g;
    let sentences = input[1].split(delimitersForSentences);
    const delimitersForWords = /\W/g;

    let results = [];

    for (i = 0; i < sentences.length; i++) {

        let words = sentences[i].split(delimitersForWords);

        for (j = 0; j < words.length; j++) {

            if (words[j] === keyword) {

                results.push(sentences[i]);
            }
        }
    }

    for (i = 0; i < results.length; i++) {

        console.log(results[i].trim());
    }
}
