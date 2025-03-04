class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state *= 1.5;
        this.state = this._state;
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        if(newState < 0) {
            this._state = 0;
        } else if(newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30)
            this.books.push(book);
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => {
            return book[type] === value;
        });
        
        return foundBook || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if(bookIndex !== -1) {
            const foundBook = this.books[bookIndex];
            this.books.splice(bookIndex, 1);
            return foundBook;
        } 
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark < 2 || mark > 5) {
            return;
        }

        if(!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if(!this.marks[subject]) {
            return 0;
        }

        const summMarks = this.marks[subject].reduce((acc, mark) => acc + mark, 0);

        return summMarks / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if(subjects.length === 0) {
            return 0;
        }

        const totalAverage = subjects.reduce((acc, subject) =>  acc + this.getAverageBySubject(subject), 0);
        return totalAverage / subjects.length;
    }
}