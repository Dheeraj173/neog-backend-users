import useFetch from "../src/useFetch";

const BookTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://neog-backend-users.vercel.app/books/title/${title}`);
    console.log(data);
    const book = data?data.books[0]:"";

    return data? (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Released Year: {book.publishedYear}</p>
            <p>Genre: {book.genre.join(", ")}</p>
        </div>
    ):(loading && <p>loading...</p>)
}
export default BookTitle;