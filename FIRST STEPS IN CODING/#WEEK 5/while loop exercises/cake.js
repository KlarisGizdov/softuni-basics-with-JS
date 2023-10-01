function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let volume = width * length;

    let command = input[2];
    let index = 3;

    while (command !== 'STOP') {
        let peices = Number(command);
        volume -= peices;

        if (volume <= 0) {
            console.log(`No more cake left! You need ${Math.abs(volume)} peices more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'STOP') {
        console.log(`${volume} Peices are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

