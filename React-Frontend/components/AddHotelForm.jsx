import React, {useState} from "react";

const AddHotelForm = () => {
    const [formData, setFormData] = useState({
        name:"", 
        category:"", 
        location:"",
        rating:"",
        website:"",
        phoneNumber:"",
        checkInTime:"",
        checkOutTime:"",
        amenities:"",
        priceRange:"",
        reservationsNeeded:false, 
        isParkingAvailable:false,
        isWifiAvailable:false,
        isPoolAvailable:false,
        isSpaAvailable:false,
        isRestaurantAvailable:false,
        photos:"",
    });

    const CATEGORY_OPTIONS = [
        "Budget",
        "Mid-Range",
        "Luxury",
        "Boutique",
        "Resort",
        "Other"
];

const PRICE_RANGE_OPTIONS = [
  "$$ (11-30)",
  "$$$ (31-60)",
  "$$$$ (61+)",
  "Other"
];

    // const handleChange = (e) => {
    //     const {name, value, type , checked} = e.target;
    //     setFormData((prevState) => ({
    //         ...prevState,[name]:name==="rating"?parseInt(value):value,
    //     }));
    // };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevState) => ({
             ...prevState,
                [name]:
                type === "checkbox"
                 ? checked
                    : name === "rating"
                    ? parseInt(value)
                    : value,
  }));
};

    const handleSubmit = async (event) => {
  event.preventDefault();

  const payload = {
    ...formData,
    category: [formData.category],
    priceRange: [formData.priceRange],
    amenities: formData.amenities
      ? formData.amenities.split(",").map(a => a.trim())
      : [],
    photos: formData.photos
      ? formData.photos.split(",").map(p => p.trim())
      : [],
  };

  try {
    const response = await fetch(
      "https://neog-backend-users.vercel.app/hotels",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Backend error:", data);
      throw new Error(data.message || "Failed to add hotel");
    }

    console.log("Hotel added:", data);
  } catch (error) {
    console.error("Submit error:", error.message);
  }
};


    return (
        <div>
            <h2>Add new Hotel</h2>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <br />
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Category: </label>
            <br />
            <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select category</option>
            {CATEGORY_OPTIONS.map((cat) => (
                 <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
            </select>
            <br />
            <br />
         <label>Location: </label>
            <br />
            <input 
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Rating: </label>
            <br />
            <input 
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Website: </label>
            <br />
            <input 
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Phone Number: </label>
            <br />
            <input 
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Check In Time: </label>
            <br />
            <input 
            type="text"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Check Out Time: </label>
            <br />
            <input 
            type="text"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
         <label>Amenities: </label>
            <br />
            <input 
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Price Range: </label>
            <br />
            <select 
            name="pricesRange" 
            value={formData.priceRange} 
            onChange={handleChange}
            >
            <option value="">Select price range</option>
                {PRICE_RANGE_OPTIONS.map((price) => (
                    <option key={price} value={price}>
                    {price}
                    </option>
                ))}
            </select>
            <br />
            <br />
            <label>Reservations Needed: </label>
            <br />
            <input 
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Is Parking Available: </label>
            <br />
            <input 
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Is Wifi Available: </label>
            <br />
            <input 
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Is Pool Available: </label>
            <br />
            <input 
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Is Spa Available: </label>
            <br />
            <input 
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Is Restaurant Available: </label>
            <br />
            <input 
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <label>Photos: </label>
            <br />
            <input 
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            />{" "}
            <br />
            <br />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default AddHotelForm;