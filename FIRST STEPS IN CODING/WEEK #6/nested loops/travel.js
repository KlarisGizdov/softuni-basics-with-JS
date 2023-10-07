function travel(input) {
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destinationName = command;
        index++;
        let budget = Number(input[index]);
        let savedMoney = 0;
        while (savedMoney < budget) {
            index++;
            savedMoney += Number(input[index]);
        }
        console.log(`Going to ${destinationName}!`);
        index++;
        command = input[index];
    }
}