function calculateCatCalories(input) {
    let fatPercentage = Number(input[0]);
    let proteinPercentage = Number(input[1]);
    let carbPercentage = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercentage = Number(input[4]);

    // Изчисляваме грамовете на мазнините, протеините и въглехидратите
    let fatGrams = (fatPercentage / 100) * (totalCalories / 9);
    let proteinGrams = (proteinPercentage / 100) * (totalCalories / 4);
    let carbGrams = (carbPercentage / 100) * (totalCalories / 4);

    // Изчисляваме общото тегло на храната
    let totalWeight = (fatGrams + proteinGrams + carbGrams) / (1 - waterPercentage / 100);

    // Изчисляваме калориите за един грам храна
    let caloriesPerGram = totalCalories / totalWeight;

    return caloriesPerGram.toFixed(4);
}

let input = (["20",
"60",
"20",
"1800",
"50"])


let result = calculateCatCalories(input);
console.log(result);
