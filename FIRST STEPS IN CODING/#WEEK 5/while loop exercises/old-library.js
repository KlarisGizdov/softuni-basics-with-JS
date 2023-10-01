function oldLibrary(input) {
    let searchedBook = input[0];

    let command = input[1];
    let index = 2;
    let booksChecked = 0;

    while (command !== 'No More Books') {
        if (command === searchedBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }

        booksChecked++;

        command = input[index];
        index++;
    }

    if (command === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



