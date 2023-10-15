function hairSalon(input) {
    let target = Number(input[0]);
    let currentIncome = 0;

    for (let i = 1; i < input.length; i++) {
        let service = input[i];

        if (service === "closed") {
            break;
        }

        let price = 0;

        if (service === "haircut") {
            i++;
            let haircutType = input[i];

            switch (haircutType) {
                case "mens":
                    price = 15;
                    break;
                case "ladies":
                    price = 20;
                    break;
                case "kids":
                    price = 10;
                    break;
            }
        } else if (service === "color") {
            i++;
            let colorType = input[i];

            switch (colorType) {
                case "touch up":
                    price = 20;
                    break;
                case "full color":
                    price = 30;
                    break;
            }
        }

        if (currentIncome + price >= target) {
            currentIncome += price;
            console.log("You have reached your target for the day!");
            break;
        } else {
            currentIncome += price;
        }
    }

    if (currentIncome < target) {
        let neededMoney = target - currentIncome;
        console.log(`Target not reached! You need ${neededMoney}lv. more.`);
    }

    console.log(`Earned money: ${currentIncome}lv.`);
}

// Примерен вход
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])


