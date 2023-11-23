const book = [{
      ISBN:"12345ONE",
      title:"Getting Started with MERN",
      authors: [1,2],
      language: "English",
      pubDate: "25-01-2002",
      numOfPage: 225,
      category: ["Fiction","Programming","Tech","Web Tech"],
      publication: 1,
},
{
    ISBN:"12345TWO",
    title:"Getting Started with FULL STACK",
    authors: [1,2],
    language: "English",
    pubDate: "25-01-2002",
    numOfPage: 225,
    category: ["Fiction","Programming","Tech","Web Tech"],
    publication: 1,
},
];

const author = [{
    id : 1,
    name : "Chakra",
    books :"12345ONE"
},
   {
        id : 2,
        name : "APJ Kalam",
        books :"12345TWO"
    },
];

const publications = [{
    id: 1,
    name: "Chakra",
    books: ["12345ONE"],
  },
];

module.exports = {book , author , publications};