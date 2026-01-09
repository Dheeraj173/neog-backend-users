import useFetch from "../src/useFetch";

const HotelsByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://neog-backend-users.vercel.app/hotels/title/${title}`);
    console.log(data);
    const hotel = data?data.hotels[0]:"";

    return data? (
        <div>
            <h1>{hotel.title}</h1>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Price Range: {hotel.price}</p>
        </div>
    ):(loading && <p>loading...</p>)
}
export default HotelsByTitle;