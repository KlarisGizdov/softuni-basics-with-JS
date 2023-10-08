function equalSumEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let currNum = startNum; currNum <= endNum; currNum++) {
        let sumEvenPositions = 0;
        let sumOddPositions = 0;

        let currNumStr = String(currNum);
        
        for (let i = 0; i < currNumStr.length; i++) {
            let digit = Number(currNumStr[i]);

            let position = i + 1;

            if (position % 2 === 0) {
                sumEvenPositions += digit;
            } else {
                sumOddPositions += digit;
            }
        }

        if (sumEvenPositions === sumOddPositions) {
            result += currNum + ' ';
        }
    }

    console.log(result);
}
