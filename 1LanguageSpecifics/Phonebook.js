function main(input) {

    let i = 0;
    let command = input[i].split(' ');
    let phonebook = new Map();

    while (command[0] !== "END") {

        switch (command[0]) {

            case 'A':
                var name = command[1];
                let phone = command[2];
                phonebook.set(name, phone);
                break;

            case 'S':
                name = command[1];

                if (phonebook.has(name)) {

                    console.log("%s -> %s", name, phonebook.get(name));
                }
                else {

                    console.log("Contact %s does not exist.", name);
                }
                break;

            default:
                break;
        }

        i++;
        command = input[i].split(' ');
    }
}
