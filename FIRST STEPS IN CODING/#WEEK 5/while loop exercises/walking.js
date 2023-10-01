function steps(input) {
    let totalSteps = 0;
    let goal = 10000;

    let command = input[0];
    let index = 1;

    while (command !== 'Going home') {
        let currentSteps = Number(command);
        totalSteps += currentSteps;

        if(totalSteps >= goal) {
            let stepsOverGoal = totalSteps - goal;

            console.log("Goal reached! Good job!");
            console.log(`${stepsOverGoal} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Going home') {
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome;

        if(totalSteps >= goal) {
            let stepsOverGoal = totalSteps - goal;

            console.log("Goal reached! Good job!");
            console.log(`${stepsOverGoal} steps over the goal!`);
        } else {
            let stepsBelowGoal = goal - totalSteps;
            console.log(`${stepsBelowGoal} more steps to reach goal.`);
        }
    }
}

steps(["1000",
"1500",
"2000",
"6500"])

