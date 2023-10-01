function accountBalance(input) {

    let total = 0;

    let index = 0;
    let currentRow = input[index];

    while (currentRow != "NoMoreMoney") {
        let currentRowAsNumber = Number(currentRow);

        if(currentRowAsNumber < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${currentRowAsNumber.toFixed(2)}`)
        total += currentRowAsNumber;

        index++;
        currentRow = input[index];

    }

    console.log(`Total: ${total.toFixed(2)}`)

}

accountBalance (["120",
"45.55",
"-150"])

