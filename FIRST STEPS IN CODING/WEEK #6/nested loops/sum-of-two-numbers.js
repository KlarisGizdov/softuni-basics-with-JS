function sumOfTwoNumbers(input) {

    let intervalStart = Number(input[0]);
    let intervalEnd = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationCounter = 0;
    let isValidCombination = false

    for(let first = intervalStart; first <= intervalEnd; first++){
        for(let second = intervalStart; second <= intervalEnd; second++)
        {
            combinationCounter++;

            if(first + second === magicNumber){
                
                console.log(`Combination N:${combinationCounter} (${first} + ${second} = ${magicNumber})`);
                isValidCombination = true;
                break;
            }
        }

        if(isValidCombination) {
            break;
        }
    }

    if (!isValidCombination){
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }
}