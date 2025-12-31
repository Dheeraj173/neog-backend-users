const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Hotel = require("./BE1.1_CW/models/Hotel.models");
initializeDatabase();

  const newHotel1 = {
    name: "Lake View",
    category: "Mid-Range",
    location: "124 Main Street, Anytown",
    rating: 3.2,
    reviews: [],
    website: "https://lake-view-example.com",
    phoneNumber: "+1234555890",
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    amenities: ["Laundry", "Boating"],
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isParkingAvailable: false,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
  };

  const newHotel2 = {
    name: "Sunset Resort",
    category: "Resort",
    location: "12 Main Road, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://sunset-example.com",
    phoneNumber: "+1299655890",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
    priceRange: "$$$$ (61+)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: true,
    isSpaAvailable: true,
    isRestaurantAvailable: true,
    photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
  };

  async function createHotel(hotel) {
    try {
        const newHotel = new Hotel(hotel);
        const createdNewHotel = await newHotel.save();
        console.log("New Hotel created: ", createdNewHotel);
        return createdNewHotel;
    } catch(error) {
        console.log("Error while creating Hotel: ", error);
    }
  }

  app.post("/hotels", async(req, res)=> {
    try {
      const createdHotel = await createHotel(req.body);
      if(createdHotel) {
        res.status(201).json({createdHotel });
      } else {
        res.status(404).json({error: "No new Hotel created."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to create a new Hotel."});
    }
  });

  async function readHotelsData() {
    try {
        const hotels = await Hotel.find();
        console.log(hotels);
        return hotels;
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }
  app.get("/hotels", async(req, res)=> {
    try {
      const hotels = await readHotelsData();
      if(hotels) {
        res.status(200).json({hotels });
      } else {
        res.status(404).json({error: "No Hotel data found."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to read Hotel data."});
    }
  });
  //readHotelsData();

  async function readHotelsByName(hotelName) {
    try {
        const hotel = await Hotel.findOne({name: hotelName});
        console.log(hotel);
        return hotel;
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }

  app.get("/hotels/:hotelName", async(req, res)=> {
    try {
      const hotel = await readHotelsByName(req.params.hotelName);
      if(hotel) {
        res.status(200).json({hotel});
      } else {
        res.status(404).json({error: "No Hotel data found."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to read Hotel data."});
    }
  });
  //readHotelsByName("Lake View");

  async function getHotelsByRatings(value) {
    try {
        const hotel = await Hotel.find({rating: value});
        console.log(hotel);
        return hotel;
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }

  app.get("/hotels/rating/:hotelRating", async(req, res)=> {
    try {
      const hotel = await getHotelsByRatings(req.params.hotelRating);
      if(hotel) {
        res.status(200).json({hotel});
      } else {
        res.status(404).json({error: "No Hotel data found."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to read Hotel data."});
    }
  });
  //getHotelsByRatings("4");

  async function getHotelsByPhoneNumber(number) {
    try {
        const hotel = await Hotel.find({phoneNumber: number});
        console.log(hotel);
        return hotel;
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }

  app.get("/hotels/directory/:phoneNumber", async(req, res)=> {
    try {
      const hotel = await getHotelsByPhoneNumber(req.params.phoneNumber);
      if(hotel) {
        res.status(200).json({hotel});
      } else {
        res.status(404).json({error: "No Hotel data found."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to read Hotel data."});
    }
  });
  //getHotelsByPhoneNumber("+1299655890");

  async function getHotelsByCategory(hotelCategory) {
    try {
        const hotel = await Hotel.find({category: hotelCategory});
        console.log(hotel);
        return hotel;
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }

  app.get("/hotels/category/:hotelCategory", async(req, res)=> {
    try {
      const hotel = await getHotelsByCategory(req.params.hotelCategory);
      if(hotel) {
        res.status(200).json({hotel});
      } else {
        res.status(404).json({error: "No Hotel data found."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to read Hotel data."});
    }
  });

  async function readHotelsByParkingAvailability(value) {
    try {
        const hotel = await Hotel.find({isParkingAvailable: value});
        console.log(hotel);
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }
  //readHotelsByParkingAvailability(true);

  async function readHotelsByRestaurantAvailability(value) {
    try {
        const hotel = await Hotel.find({isRestaurantAvailable: value});
        console.log(hotel);
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }
  //readHotelsByRestaurantAvailability(true);

  async function getMidRangeHotels(categoryValue) {
    try {
        const hotel = await Hotel.find({category: categoryValue});
        console.log(hotel);
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }
  //getMidRangeHotels("Mid-Range");

  async function getHotelsByPriceRange(range) {
    try {
        const hotel = await Hotel.find({priceRange: range});
        console.log(hotel);
    } catch (error) {
        console.log("Error occuered while reading Hotels data: ", error);
    }
  }
  //getHotelsByPriceRange("$$$$ (61+)");

   //updtae rating:
   async function updateRatingOfHotelById(id, dataToUpdate) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, dataToUpdate, {new:true});
        console.log(updatedHotel);
        return updatedHotel;
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }

  app.post("/hotels/:hotelId", async(req, res)=> {
    try {
      const updatedHotel = await updateRatingOfHotelById(req.params.hotelId, req.body);
      if(updatedHotel) {
        res.status(200).json({updatedHotel });
      } else {
        res.status(404).json({error: "No Hotel updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Hotel to update."});
    }
  });
 // updateCheckOutTImeOfHotel("694d94e0039f2304d2a40c12", {checkOutTime: "11:00 AM"});

 async function updateRatingOfHotel(hotelName, dataToUpdate) {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate({name: hotelName}, dataToUpdate, {new:true});
        console.log(updatedHotel);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //updateRatingOfHotel("Sunset Resort", {rating: "4.2"});

async function updatePhoneNumberOfHotel(number, dataToUpdate) {
    try {
        const updatedHotel = await Hotel.findOneAndUpdate({phoneNumber: number}, dataToUpdate, {new:true});
        console.log(updatedHotel);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //updatePhoneNumberOfHotel("+1299655890", {phoneNumber: "+1997687392"});

  //Create an API with route "/hotels/:hotelId" to delete a hotel data by their ID in the Database. Test your API with Postman
  async function deleteHotelById(id) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(id);
        console.log("Deleted Hotel: ", deletedHotel);
        return deletedHotel;
    } catch (error) {
        console.log("Error occuered while deleting Hotel data: ", error);
    }
  }

  app.delete("/hotels/:hotelId", async(req, res)=> {
    try {
      const deletedhotel = await deleteHotelById(req.params.hotelId);
      if(deletedhotel) {
        res.status(200).json({deletedhotel });
      } else {
        res.status(404).json({error: "No Hotel deleted."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Hotel to delete."});
    }
  });
  //deleteHotelById("694d94e0039f2304d2a40c12");

  async function deleteHotelByPhoneNumber(number) {
    try {
        const deletedHotel = await Hotel.findOneAndDelete({phoneNumber: number});
        console.log("Deleted Hotel: ", deletedHotel);
    } catch (error) {
        console.log("Error occuered while deleting Hotel data: ", error);
    }
  }
  //deleteHotelByPhoneNumber("+1997687392");

  app.listen(port, ()=> {console.log("server is running at port: ", port)});