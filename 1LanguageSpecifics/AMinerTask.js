function main(input) {

    let resources = new Map();
    let i = 0;
    let product = input[i];

    while (product !== 'stop') {

        let quantity = parseInt(input[i + 1]);

        if (resources.has(product)) {

            let prevQuantity = resources.get(product);
            resources.set(product, prevQuantity + quantity);
        }
        else {

            resources.set(product, quantity);
        }

        i += 2;
        product = input[i];
    }

    for (resource of resources) {

        console.log('%s -> %s', resource[0], resource[1]);
    }
}