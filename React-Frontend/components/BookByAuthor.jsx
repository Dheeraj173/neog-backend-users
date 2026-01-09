import useFetch from "../src/useFetch";

const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`https://neog-backend-users.vercel.app/books/author/${author}`);
    console.log(data);
    const book = data?data.books[0]:"";

    return data? (
        <div>
            <h1>Books by: {book.author}</h1>
            <ul>
                {data?.books.map((book)=>(<li>{book.title}</li>))}
            </ul>
        </div>
    ):(loading && <p>loading...</p>)
}
export default BookByAuthor;