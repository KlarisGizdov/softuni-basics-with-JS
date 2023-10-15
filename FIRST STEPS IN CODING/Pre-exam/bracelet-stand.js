function calculateGiftBudget(input) {
    const dailyPocketMoney = parseFloat(input[0]);
    const dailyEarnings = parseFloat(input[1]);
    const expenses = parseFloat(input[2]);
    const giftPrice = parseFloat(input[3]);

    const days = 5;
    const totalPocketMoney = dailyPocketMoney * days;
    const totalEarnings = dailyEarnings * days;
    const totalSavings = totalPocketMoney + totalEarnings;

    const totalBudget = totalSavings - expenses;

    if (totalBudget >= giftPrice) {
        const profit = totalBudget.toFixed(2);
        console.log(`Profit: ${profit} BGN, the gift has been purchased.`);
    } else {
        const insufficientMoney = (giftPrice - totalBudget).toFixed(2);
        console.log(`Insufficient money: ${insufficientMoney} BGN.`);
    }
}

// Примерен вход
const input = ["5.12", "32.05", "15", "150"];
calculateGiftBudget(input);
