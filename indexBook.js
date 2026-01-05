const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Book = require("./BE1.1_CW/models/Book.models");
initializeDatabase();

  async function createBook(book) {
    try {
        const newBook = new Book(book);
        const createdBook = await newBook.save();
        console.log(createdBook);
        return createdBook;  
    } catch(error) {
        console.log("Error while creating Book: ", error);
    }
  }

  app.post("/books", async(req, res)=> {
    try {
      const newBookCreated = await createBook(req.body);
      if(newBookCreated) {
        res.status(201).json({newBookCreated });
      } else {
        res.status(404).json({error: "No new Book created."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to create new Book."});
    }
  });

  async function getBooks() {
    try {
        const books = await Book.find();
        console.log(books);
        return books;
    } catch (error) {
        console.log("Error occured while reading books data: ", error);
    }
  }

app.get("/books", async(req, res)=> {
  try {
    const books = await getBooks();
    if(books) {
      res.status(200).json({books });
    } else {
      res.status(404).json({error: "No Books found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch Books data."})
  }
})

//4. Create an API to get a book's detail by its title. Make sure to do error handling.
async function getBooksByTitle(titleName) {
    try {
        const books = await Book.find({title: titleName});
        console.log(books);
        return books;
    } catch (error) {
        console.log("Error occuered while reading books data: ", error);
    }
  }

app.get("/books/title/:titleName", async(req, res)=> {
    try {
      const books = await getBooksByTitle(req.params.titleName);
      if(books) {
        res.status(200).json({books });
      } else {
        res.status(404).json({error: "No Books found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Books data."})
    }
  })
//5. Create an API to get details of all the books by an author. Make sure to do error handling.
async function getBooksByAuthor(authorName) {
    try {
        const books = await Book.find({author: authorName});
        console.log(books);
        return books;
    } catch (error) {
        console.log("Error occuered while reading books data: ", error);
    }
  }

app.get("/books/author/:authorName", async(req, res)=> {
    try {
      const books = await getBooksByAuthor(req.params.authorName);
      if(books) {
        res.status(200).json({books });
      } else {
        res.status(404).json({error: "No Books found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Books data."})
    }
  })
//6. Create an API to get all the books which are of "Business" genre.
async function getBooksByGenre(genreName) {
    try {
        const books = await Book.find({genre: genreName});
        console.log(books);
        return books;
    } catch (error) {
        console.log("Error occuered while reading books data: ", error);
    }
  }

app.get("/books/genre/:genreName", async(req, res)=> {
    try {
      const books = await getBooksByGenre(req.params.genreName);
      if(books) {
        res.status(200).json({books });
      } else {
        res.status(404).json({error: "No Books found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Books data."})
    }
  })
//7. Create an API to get all the books which was released in the year 2012.
async function getBooksByYear(year) {
    try {
        const books = await Book.find({publishedYear: year});
        console.log(books);
        return books;
    } catch (error) {
        console.log("Error occuered while reading books data: ", error);
    }
  }

app.get("/books/year/:inputYear", async(req, res)=> {
    try {
      const books = await getBooksByYear(req.params.inputYear);
      if(books) {
        res.status(200).json({books });
      } else {
        res.status(404).json({error: "No Books found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Books data."})
    }
  })
//--------
async function updateBooksRatingById(bookId, dataToUpdate) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(bookId, dataToUpdate, {new:true});
        console.log(updatedBook);
        return updatedBook;
    } catch (error) {
        console.log("Error occuered while updating Books data: ", error);
    }
  }

  app.post("/books/:booksId", async(req, res)=> {
    try {
      const updatedBook = await updateBooksRatingById(req.params.booksId, req.body);
      if(updatedBook) {
        res.status(200).json({updatedBook });
      } else {
        res.status(404).json({error: "No Book updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Book to update."});
    }
  });

  async function updateBookByTitle(bookTitle, dataToUpdate) {
    try {
        const updatedBook = await Book.findOneAndUpdate({title: bookTitle}, dataToUpdate, {new:true});
        console.log(updatedBook);
        return updatedBook;
    } catch (error) {
        console.log("Error occuered while updating Books data: ", error);
    }
  }

  app.post("/books/title/:bookTitle", async(req, res)=> {
    try {
        console.log(req.params.bookTitle);
      const updatedBook = await updateBookByTitle(req.params.bookTitle, req.body);
      if(updatedBook) {
        res.status(200).json({updatedBook });
      } else {
        res.status(404).json({error: "No Book updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Book to update."});
    }
  });

async function deleteBookById(id) {
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        console.log("Deleted Book: ", deletedBook);
        return deletedBook;
    } catch (error) {
        console.log("Error occuered while updating Book data: ", error);
    }
  }
  app.delete("/books/:bookId", async(req, res) => {
    try {
      const deletedBook = await deleteBookById(req.params.bookId);
      if(deletedBook) {
        res.status(200).json({deletedBook});
      } else {
        res.status(404).json({error: "No Book found with this Book-Id."});
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Book data."});
    }
  });

app.listen(port, ()=> {console.log("Server is running at port: ", port)});