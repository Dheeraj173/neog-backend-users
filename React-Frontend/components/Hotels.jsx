import useFetch from "../src/useFetch";

const Books = () => {
    const {data, loading, error} = useFetch("https://neog-backend-users.vercel.app/hotels");
    console.log(data);

    return (
    <div>
        <ul>
            {data?.hotels.map((hotel)=>(<li>{hotel.name}</li>))}
        </ul>
    </div>
    );
}
export default Books;