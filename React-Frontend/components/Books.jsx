import useFetch from "../src/useFetch";

const Books = () => {
    const {data, loading, error} = useFetch("https://neog-backend-users.vercel.app/books");
    console.log(data);

    return (
    <div>
        <ul>
            {data?.books.map((book)=>(<li>{book.title}</li>))}
        </ul>
    </div>
    );
}
export default Books;