// Framework
const express = require("express");

// Database
const database = require("./database/index");

// Initializing Express
const shapeAI = express();

// Configuration
shapeAI.use(express.json());

// API
shapeAI.get("/" ,(req , res) =>{
    return res.json({books : database.author});
    });

shapeAI.get("/:isbn" ,(req , res) =>{
       const getSpecificBooks = database.book.filter((book) =>
       {
        if(book.ISBN === req.params.isbn)
        return book;
       }
       );
       if(getSpecificBooks.length == 0)
       return res.json("Not Found Book With This ISBN");
       else
       return res.json({books : getSpecificBooks});
    });

// Server Connected
shapeAI.listen(3000 ,() => 
    console.log("Server is running"));