const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
//1. Write a GET route "/" which sends a message "Hello, Express JS".
app.get("/", (request, response)=> {
    response.send("Hello Express!");
});
//2. Write a GET route "/products" which sends a message "Browse our products here.".
app.get("/products", (request, response)=> {
    response.send("Browse our products here.");
});
//3. Write a GET route "/services" which sends a message "Explore our services.".
app.get("/services", (request, response)=> {
    response.send("Explore our services.");
});
//4. Write a GET route "/faq" which sends a message "Frequently Asked Questions.".
app.get("/faq", (request, response)=> {
    response.send("Frequently Asked Questions.");
});
//5. Write a GET route "/gallery" which sends a message "View our gallery.".
app.get("/gallery", (request, response)=> {
    response.send("View our gallery.");
});
//6. get:/ already written in 1.
//7. Write a GET route "/signin" which sends a message "This is the Sign In page.".
app.get("/signin", (request, response)=> {
    response.send("This is the Sign In page.");
});
//8. Write a GET route "/booking" which sends a message "Book your tickets here.".
app.get("/booking", (request, response)=> {
    response.send("Book your tickets here.");
});
//9. Write a GET route "/clothing/kids" which sends a message "This is the kids wear page.".
app.get("/clothing/kids", (request, response)=> {
    response.send("This is the kids wear page.");
});
//10. Write a GET route "/blog" which sends a message "This is the blog page.".
app.get("/blog", (request, response)=> {
    response.send("This is the blog page.");
});
//11. get "/" already written in 1.
//12. Write a POST route "/books" which sends a new book into the pre-defined books array. Send an error message in case any of the data is missing in the request body. Test your API with Postman.
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];
app.post("/books", (request, response)=> {
    const newBook = request.body;
    if(!newBook.title || !newBook.author || !newBook.year) {
        response.status(400).json({error: "title, author and year should be present to add new book in store."})
    } else {
        books.push(newBook);
        response.status(201).json({message: "Book has been added successfully.", book:newBook});
    }
});
app.get("/books", (request, response)=> {
    response.send(books);
});
//13. Write a GET route "/books" which sends the books array in response. Test your API with Postman.
//Done above
//14. Write a POST route "/todos" which sends a new todo into the pre-defined todos array. Send an error message in case any of the data is missing in the request body. Test your API with Postman.
const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
];
app.post("/todos", (request, response)=> {
    const newTodo = request.body;
    if(!newTodo.title || !newTodo.day) {
        response.status(400).json({error: "title, day should be present to add new todo."})
    } else {
        todos.push(newTodo);
        response.status(201).json({message: "Todo has been added successfully.", todo:newTodo});
    }
});
app.get("/todos", (request, response)=> {
    response.send(todos);
});
//15. Write a GET route "/todos" which sends the todos array in response. Test your API with Postman.
//Already done above
//16. Write a POST route "/movies" which sends a new movie into the pre-defined movies array. Send an error message in case any of the data is missing in the request body. Test your API with Postman.
//{ id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
];
app.post("/movies", (request, response)=> {
    const newMovie = request.body;
    if(!newMovie.title || !newMovie.director ||!newMovie.year) {
        response.status(400).json({error: "title, director and year should be present to add new Movie."})
    } else {
        movies.push(newMovie);
        response.status(201).json({message: "Movie has been added successfully.", movie:newMovie});
    }
});
app.get("/movies", (request, response)=> {
    response.send(movies);
});
//17. Write a POST route "/items" which sends a new item into the pre-defined items array. Send an error message in case any of the data is missing in the request body. Test your API with Postman.
//New item to be added:   { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
const items = [
  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }
];
app.post("/items", (request, response)=> {
    const newItem = request.body;
    if(!newItem.itemName || !newItem.color ||!newItem.quantity) {
        response.status(400).json({error: "itemName, color, quantity should be present to add new item."})
    } else {
        items.push(newItem);
        response.status(201).json({message: "Item has been added successfully.", item:newItem});
    }
});
app.get("/items", (request, response)=> {
    response.send(items);
});
//18. delete book with id:1
app.delete("/books/:id", (request, response)=> {
    const id = request.params.id;
    const index = books.findIndex((book)=>book.id == id);
    if(index === -1) {
        response.status(404).json({error: "Book not found"})
    } else {
        books.splice(index, 1);
        response.status(200).json({message: "Book with id 1 deleted successfully."})
    }
});
app.get("/books", (request, response)=> {
    response.send(books);
});
//19. delete a todo with id: 4
app.delete("/todos/:id", (request, response)=> {
    const id = request.params.id;
    const index = todos.findIndex((todo)=>todo.id == id);
    if(index === -1) {
        response.status(404).json({error: "Todo not found"})
    } else {
        todos.splice(index, 1);
        response.status(200).json({message: "Todo with id 4 is deleted successfully."})
    }
});
app.get("/todos", (request, response)=> {
    response.send(todos);
});

//Delete movie with id: 5
app.delete("/movies/:id", (request, response)=> {
    const id = request.params.id;
    const index = movies.findIndex((movie)=>movie.id == id);
    if(index === -1) {
        response.status(404).json({error: "Movie not found"})
    } else {
        movies.splice(index, 1);
        response.status(200).json({message: "Movie with id 5 deleted successfully."})
    }
});
app.get("/movies", (request, response)=> {
    response.send(movies);
});
//Delete item with id: 2
app.delete("/items/:id", (request, response)=> {
    const id = request.params.id;
    const index = items.findIndex((item)=>item.id == id);
    if(index === -1) {
        response.status(404).json({error: "Item not found"})
    } else {
        items.splice(index, 1);
        response.status(200).json({message: "Item with id 2 deleted successfully."})
    }
});
app.get("/items", (request, response)=> {
    response.send(items);
});
//Update Book for id: 2
app.post("/books/:id", (request, response)=> {
    const bookId = parseInt(request.params.id);
    const updatedBook = request.body;
    const bookToUpdate = books.find((book)=> book.id === bookId);
    if(!bookToUpdate) {
        response.status(404).json({error: "Car not found."})
    } else {
        if(!updatedBook.title ||!updatedBook.author ||!updatedBook.year) {
            response.status(400).json({error: "Author, title and year is required to update book."})
        } else {
            Object.assign(bookToUpdate, updatedBook);
            response.status(200).json({message: "Book has been updated successfully.", book:bookToUpdate});
        }
    }
});
app.get("/books", (request, response)=> {
    response.send(books);
});
//Update todo for id: 1
app.post("/todos/:id", (request, response)=> {
    const todoId = parseInt(request.params.id);
    const updatedTodo = request.body;
    const todoToUpdate = todos.find((todo)=> todo.id === todoId);
    if(!todoToUpdate) {
        response.status(404).json({error: "Todo not found."})
    } else {
        if(!updatedTodo.title ||!updatedTodo.day) {
            response.status(400).json({error: "title and day is required to update Todo."})
        } else {
            Object.assign(todoToUpdate, updatedTodo);
            response.status(200).json({message: "Todo has been updated successfully.", todo:todoToUpdate});
        }
    }
});
app.get("/todos", (request, response)=> {
    response.send(todos);
});
//Update movie for id: 2
app.post("/movies/:id", (request, response)=> {
    const movieId = parseInt(request.params.id);
    const updatedMovie = request.body;
    const movieToUpdate = movies.find((movie)=> movie.id === movieId);
    if(!movieToUpdate) {
        response.status(404).json({error: "Movie not found."})
    } else {
        if(!updatedMovie.title ||!updatedMovie.director ||!updatedMovie.year) {
            response.status(400).json({error: "Director, title and year is required to update Movie."})
        } else {
            Object.assign(movieToUpdate, updatedMovie);
            response.status(200).json({message: "Movie has been updated successfully.", movie:movieToUpdate});
        }
    }
});
app.get("/movies", (request, response)=> {
    response.send(movies);
});
//Update Item for id: 
app.post("/items/:id", (request, response)=> {
    const itemId = parseInt(request.params.id);
    const updatedItem = request.body;
    const itemToUpdate = items.find((item)=> item.id === itemId);
    if(!itemToUpdate) {
        response.status(404).json({error: "Item not found."})
    } else {
        if(!updatedItem.itemName ||!updatedItem.quantity ||!updatedItem.color) {
            response.status(400).json({error: "ItemName, quantity and color is required to update Item."})
        } else {
            Object.assign(itemToUpdate, updatedItem);
            response.status(200).json({message: "Item has been updated successfully.", item:itemToUpdate});
        }
    }
});
app.get("/items", (request, response)=> {
    response.send(items);
});
//New Album create Post request:
const albums = [
    { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
    { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
  ];
app.post("/albums", (request, response)=> {
    const newAlbum = request.body;
    if(!newAlbum.title || !newAlbum.artist || !newAlbum.year) {
        response.status(400).json({error: "title, artist and year should be present to add new Album in store."})
    } else {
        albums.push(newAlbum);
        response.status(201).json({message: "Album has been added successfully.", album:newAlbum});
    }
});
//Delete a Album:
app.delete("/albums/:id", (request, response)=> {
    const id = request.params.id;
    const index = albums.findIndex((album)=>album.id == id);
    if(index === -1) {
        response.status(404).json({error: "Album not found"})
    } else {
        albums.splice(index, 1);
        response.status(200).json({message: "Album with id 2 deleted successfully."})
    }
});
//Update Album:
app.post("/albums/:id", (request, response)=> {
    const albumId = parseInt(request.params.id);
    const updatedAlbum = request.body;
    const albumToUpdate = albums.find((album)=> album.id === albumId);
    if(!albumToUpdate) {
        response.status(404).json({error: "Album not found."});
    } else {
        if(!updatedAlbum.title ||!updatedAlbum.artist ||!updatedAlbum.year) {
            response.status(400).json({error: "Title, artist and year is required to update Item."});
        } else {
            Object.assign(albumToUpdate, updatedAlbum);
            response.status(200).json({message: "Album has been updated successfully.", album:albumToUpdate});
        }
    }
});
//get ALbum:
app.get("/albums", (request, response)=> {
    response.send(albums);
});

app.listen(port, ()=> {console.log("server is running at port: ", port)});
