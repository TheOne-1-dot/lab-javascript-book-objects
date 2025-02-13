// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago..."
    }
  },
  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
    }
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention..."
    }
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
    }
  }
];


console.log(booksArray);




// Iteration 2 | Book Details
  // Your code here:
  function getBookDetails(book) {
    return `${book.title} - ${book.author} - ${book.pages} pages`;
  }
  
  // Example usage
  const book = {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: { /*...*/ }
  };
  
  console.log(getBookDetails(book));



// Iteration 3 | Delete Language
// Your code here:
// Iterate over the booksArray and delete the nested object property "language" from each book object
for (let i = 0; i < booksArray.length; i++) {
  delete booksArray[i].details.language;
}

// Log booksArray array to confirm that property has been deleted from all the book objects
console.log(booksArray);




// Iteration 4 | Estimated Reading Time
// Your code here:

for (let i = 0; i < booksArray.length; i++) {
  const pages = booksArray[i].pages;
  const readingTime = Math.round((pages * 500) / 90);
  booksArray[i].readingTime = readingTime;
}

// Log booksArray array to confirm that property has been added to each book object
console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor(dictionary) {
  let booksArray = [];

  for (let author in dictionary) {
    dictionary[author].forEach(book => {
      let [title, pages] = book;
      let bookObject = {
        title: title,
        pages: pages,
        author: author
      };
      booksArray.push(bookObject);
    });
  }

  return booksArray;
}

// Example usage with the provided dictionaryExample object
const dictionaryExample = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

const result = booksByAuthor(dictionaryExample);
console.log(result);




// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
