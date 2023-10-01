function vacationMoney(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let days = 0;
    let consecutiveDays = 0;
    let i = 2;

    while (i < input.length) {
        let action = input[i];
        let amount = Number(input[i + 1]);

        if (action === 'spend') {
            consecutiveDays++;
            availableMoney -= amount;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
        } else if (action === 'save') {
            consecutiveDays = 0;
            availableMoney += amount;
        }

        days++;
        i += 2;

        if (consecutiveDays === 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
    }

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacationMoney(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



