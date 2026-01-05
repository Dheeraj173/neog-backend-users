import useFetch from "../useFetch";
const Restaurants = () => {
const {data, loading, error} = useFetch("http://localhost:3000/restaurants");
}
export default Restaurants;