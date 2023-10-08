function sumPrimeNonPrimeNums(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;
    
    let index = 0;
    
    let command = input[index];
    index ++;

    while (command !== 'stop') {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }   

        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if(num % divisor === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}