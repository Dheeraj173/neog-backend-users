import useFetch from "../src/useFetch";

const BookTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://neog-backend-users.vercel.app/books/${title}`);
    console.log(data);

    return data ? (
    <div>
        <h2>{book.title}</h2>
        <p>Author: </p>
        <p>Released Year: {book.releasedYear}</p>
        <p>Genre: {book.genre}</p>
    </div>
    ): (loading && <p>loading...</p>);
}
export default BookTitle;