import useFetch from "../src/useFetch";

const HotelsByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://neog-backend-users.vercel.app/hotels/${title}`);
    console.log(data);
    const hotell = data?data.hotel:"";

    return data? (
        <div>
            <h1>{title}</h1>
            <p>Location: {hotell.location}</p>
            <p>Rating: {hotell.rating}</p>
            <p>Price Range: {hotell.price}</p>
        </div>
    ):(loading && <p>loading...</p>)
}
export default HotelsByTitle;