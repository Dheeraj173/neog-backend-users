import { useState } from "react";
import useFetch from "../src/useFetch";


const Books = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {data, loading, error} = useFetch("https://neog-backend-users.vercel.app/books");
    console.log(data);

    const handleDelete = async (bookId) => {
        try{
            const response  = await fetch(`https://neog-backend-users.vercel.app/books/${bookId}`,
                {method: "DELETE"},
            );
            if(!response.ok) {
                throw "Failed to delete Book";
            } else {
                const data = await response.json();
                if(data) {
                    setSuccessMessage("Book deleted successfully");
                    window.location.reload();
                }
            }
        } catch(error) {
            console.log("error");
        }
    }

    return (
    <div>  
        <ul>
            {data?.books.map((book)=>(<li key={book._id}>{book.title}{"  "}
                <button onClick={()=> handleDelete(book._id)}>Delete Book</button></li>))}
        </ul>
        <p>{successMessage}</p>
    </div>
    );
}
export default Books;

//{loading && <p>Loading...</p>}
  //      {data?.error && <p>{data?.error}</p>}