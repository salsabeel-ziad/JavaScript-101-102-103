 // BookID , Title , author , price , quantity
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];
  // TO Search for ( BookID , Title , Author )
function findBookID( bookID ){
    for ( var i of books){
        if ( i[0] == bookID ){
            console.log( i[0] );
        }
    }
}
function findTitle( title ){
    for ( var i of books){
      if ( i[1] == title ){
          console.log( i[1] );
      }
    }
}
function findAuthor( Author ){
    for ( var i of books){
      if ( i[2] == Author ){
          console.log( i[2] );
      }
    }
}

function sellBook( title, quantity, balance ){
    const book = books.find(book => book[1] === title);
    if(!book){
        console.log(`The book  "${title}" is not there.`);
        return;
    }
    if(book[4]< quantity){
        console.log(`the Quantity of this book  "${title}" is not available. `);
            return;
    }
    const totalPrice = book[3] * quantity;

    if(balance < totalPrice){
        console.log(` the total price is "${totalPrice}" and your balance "${balance}" is not enough .`);
            return;
    }
    book[4] -= quantity;
    console.log(`the "${title}" book was soled successfully.`);

}


function addBook(bookId, title, author, price, quantity) {
    this.books.push([bookId, title, author, price, quantity]);
    console.log(` the ${title} is added successfully `);
}


function displayBooks(){
    console.log("the books are available in the book store");
    for(var a of books){
        console.log(` book ID: ${a[0]},  Title: ${a[1]}, Author: ${a[2]}, Price: ${a[3]}, Quantity: ${a[4]}`);
    };
}

function updateBook(bookId, title, author, price, quantity) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][0] === bookId) {
            this.books[i] = [bookId, title, author, price, quantity];
            console.log(` the ${title} is added successfully`);
            return;
        }
    }
    console.log(`this book ${bookId} is not found`);
}

displayBooks();
sellBook("Clean Code", 2 , 150);
