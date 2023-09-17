function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let placeTaken = rows * cols;
    let profit = 0;

    if (movieType === 'Premiere') {
        profit = placeTaken * 12;
    } else if (movieType === 'Normal') {
        profit = placeTaken * 7.5;
    } else if (movieType === 'Discount') {
        profit = placeTaken * 5;
    }

    console.log(`${profit.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);