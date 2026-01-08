import useFetch from "../src/useFetch";
const Restaurants = () => {
    const {data, loading, error} = useFetch("https://neog-backend-users.vercel.app/restaurants");
    console.log(data);

    return (
    <div>
        <ul>
            {data?.restaurants.map((rest)=>(<li>{rest.name}</li>))}
        </ul>
    </div>
    );
}
export default Restaurants;