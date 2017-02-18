function main(input) {

    let text = input[0].toLowerCase();
    if (input[1] == undefined) {

        var pattern = ' ';
    }
    else {

        pattern = input[1].toLowerCase();
    }

    let counter = 0;
    let index = text.indexOf(pattern);

    while (index != -1) {

        counter++;
        index = text.indexOf(pattern, index + 1);
    }

    console.log(counter);
}