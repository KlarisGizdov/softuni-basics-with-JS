function vacationBooksList(input) {
    let curBookPages = Number(input[0]);
    let pagesPerHour  = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursNeeded = curBookPages / pagesPerHour;
    
    let hoursPerDay = hoursNeeded / daysToRead;

    console.log(hoursPerDay);
}
    
vacationBooksList(["212", "20", "2"]);