import { useState } from "react";
import useFetch from "../src/useFetch";

const Hotels = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {data, loading, error} = useFetch("https://neog-backend-users.vercel.app/hotels");
    console.log(data);

    const handleDelete = async (hotelId) => {
        try{
            const response  = await fetch(`https://neog-backend-users.vercel.app/hotels/${hotelId}`,
                {method: "DELETE"},
            );
            if(!response.ok) {
                throw "Failed to delete Hotel";
            } else {
                const data = await response.json();
                if(data) {
                    setSuccessMessage("Hotel deleted successfully");
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
            {data?.hotels.map((hotel)=>(<li key={hotel._id}>{hotel.name}{"  "}
                <button onClick={()=> handleDelete(hotel._id)}>Delete Hotel</button></li>))}
        </ul>
        <p>{successMessage}</p>
    </div>
    );
}
export default Hotels;