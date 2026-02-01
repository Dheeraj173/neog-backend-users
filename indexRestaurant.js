const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Restaurant = require("./BE1.1_CW/models/restaurants.models");
initializeDatabase();
const cors = require("cors");
  const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

const restaurant1 = {
    name: "Somi",
    cuisine: ["Greek"],
    location: "11 Main Road, Gem",
    rating: 4.3,
    reviews: [],
    website: "https://somi-example.com",
    phoneNumber: "+1234997390",
    openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: false,
    isDeliveryAvailable: true,
    menuUrl: "https://somi-example.com/menu",
    photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
  };

  const restaurant2 = {
    name: "Yo China",
    cuisine: ["Chinese", "Italian"],
    location: "MG Road, Bangalore",
    rating: 3.9,
    reviews: [],
    website: "https://yo-example.com",
    phoneNumber: "+1288997392",
    openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isDeliveryAvailable: false,
    menuUrl: "https://yo-example.com/menu",
    photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
  };

  //1. Create an API with route "/restaurants" to create a new restaurant data in the Database. Test your API with Postman.
  async function createRestaurant(restaurant) {
    try {
        const newRestaurant = new Restaurant(restaurant);
        const createNewRestaurant = await newRestaurant.save();
        console.log("New Restaurant created: ", createNewRestaurant);
        return createNewRestaurant;
    } catch(error) {
        console.log("Error while creating Restaurant: ", error);
    }
  }

  app.post("/restaurants", async(req, res)=> {
    try {
      const createdRestaurants = await createRestaurant(req.body);
      if(createdRestaurants) {
        res.status(201).json({createdRestaurants });
      } else {
        res.status(404).json({error: "No new Restaurants created."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to create new Restaurant."});
    }
  });
  
  //1. Create an API with route "/restaurants" to read all restaurants from the Database. Test your API with Postman.
  async function getRestanrants() {
    try {
        const restaurants = await Restaurant.find();
        console.log(restaurants);
        return restaurants;
    } catch (error) {
        console.log("Error occuered while reading restaurants data: ", error);
    }
  }

app.get("/restaurants", async(req, res)=> {
  try {
    const restaurants = await getRestanrants();
    if(restaurants) {
      res.status(200).json({restaurants });
    } else {
      res.status(404).json({error: "No Restaurants found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch Restaurants data."})
  }
})
  //getRestanrants();

  //2. Create an API with route "/restaurants/:restaurantName" to read a restaurant by its name. Test your API with Postman.
  async function getRestanrantByName(restaurantName) {
    try {
        const restaurant = await Restaurant.findOne({name: restaurantName});
        console.log(restaurant);
        return restaurant;
    } catch (error) {
        console.log("Error occuered while reading restaurant data: ", error);
    }
  }

  app.get("/restaurants/:restaurantName", async(req, res)=> {
    try {
      const restaurant = await getRestanrantByName(req.params.restaurantName);
      if(restaurant) {
        res.status(200).json({restaurant});
      } else {
        res.status(404).json({error: "No Restaurant found with this name."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Restaurant data."})
    }
  })
  //getRestanrantByName("Cha Cha");

  //3. Create an API with route "/restaurants/directory/:phoneNumber" to read a restaurant by phone number. Test your API with Postman.
  async function getRestanrantsByPhone(number) {
    try {
        const restaurants = await Restaurant.find({phoneNumber: number});
        console.log(restaurants);
        return restaurants;
    } catch (error) {
        console.log("Error occured while reading restaurants data: ", error);
    }
  }

  app.get("/restaurants/directory/:phoneNumber", async(req, res)=> {
    try {
      const restaurants = await getRestanrantsByPhone(req.params.phoneNumber);
      if(restaurants) {
        res.status(200).json({restaurants});
      } else {
        res.status(404).json({error: "No Restaurant found with this phone Number."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Restaurant data."})
    }
  })
  //getRestanrantsByPhone("+1288997392");

  //4. Create an API with route "/restaurants/cuisine/:cuisineName" to read all restaurants by cuisine. Test your API with Postman.
  async function getRestanrantsByCuisine(cuisineName) {
    try {
        const restaurants = await Restaurant.find({cuisine: cuisineName});
        console.log(restaurants);
        return restaurants;
    } catch (error) {
        console.log("Error occuered while reading restaurants data: ", error);
    }
  }

  app.get("/restaurants/cuisine/:cuisineName", async(req, res)=> {
    try {
      const restaurants = await getRestanrantsByCuisine(req.params.cuisineName);
      if(restaurants) {
        res.status(200).json({restaurants});
      } else {
        res.status(404).json({error: "No Restaurant found with this cuisine name."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Restaurant data."})
    }
  })
  //getRestanrantsByCuisine("Italian");

  //5. Create an API with route "/restaurants/location/:restaurantLocation" to read all restaurants by location. Test your API with Postman.
  async function getRestanrantsByLocation(value) {
    try {
        const restaurants = await Restaurant.find({location: value});
        console.log(restaurants);
        return restaurants;
    } catch (error) {
        console.log("Error occuered while reading restaurants data: ", error);
    }
  }

  app.get("/restaurants/location/:restaurantLocation", async(req, res)=> {
    try {
      const restaurants = await getRestanrantsByLocation(req.params.restaurantLocation);
      if(restaurants) {
        res.status(200).json({restaurants});
      } else {
        res.status(404).json({error: "No Restaurant found with this restaurant location."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Restaurant data."})
    }
  });
  
  async function getRestanrantsByReservations(value) {
    try {
        const restaurants = await Restaurant.find({reservationsNeeded: true});
        console.log(restaurants);
    } catch (error) {
        console.log("Error occuered while reading restaurants data: ", error);
    }
  }
  //getRestanrantsByReservations(true);

  async function getRestanrantsByDelivery(value) {
    try {
        const restaurants = await Restaurant.find({isDeliveryAvailable: true});
        console.log(restaurants);
    } catch (error) {
        console.log("Error occuered while reading restaurants data: ", error);
    }
  }
  //getRestanrantsByDelivery(true);

  //updtae rating:
  async function updateRatingOfRestanrant(id, dataToUpdate) {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, dataToUpdate, {new:true});
        console.log(updatedRestaurant);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //updateRatingOfRestanrant("694d9c5c30cc5c9380058909", {rating:4.1});

  //update Name:
  async function updateNameOfRestanrant(hotelName, dataToUpdate) {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate({name: hotelName}, dataToUpdate, {new:true});
        console.log(updatedRestaurant);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //updateNameOfRestanrant("Somi", {name:"Som Sarovar"});

async function updateDelieveryOfRestanrant(number, dataToUpdate) {
    try {
        const updatedRestaurant = await Restaurant.findOneAndUpdate({phoneNumber: number}, dataToUpdate, {new:true});
        console.log(updatedRestaurant);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //updateDelieveryOfRestanrant("+1288997392", {isDeliveryAvailable: true})

  //Update cuisine of the restaurant:
  async function updateRestaurantCuisineById(restId, dataToUpdate) {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restId, dataToUpdate, {new:true});
        console.log(updatedRestaurant);
        return updatedRestaurant;
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }

  app.post("/restaurants/:restaurantId", async(req, res)=> {
    try {
      const updatedRestaurants = await updateRestaurantCuisineById(req.params.restaurantId, req.body);
      if(updatedRestaurants) {
        res.status(200).json({updatedRestaurants });
      } else {
        res.status(404).json({error: "No Restaurant updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Restaurant to update."});
    }
  });

  //7. Create an API with route "/restaurants/:restaurantId" to delete a restaurant data by their ID in the Database. Test your API with Postman.
  async function deleteRestaurantById(id) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        console.log("Deleted Restaurant: ", deletedRestaurant);
        return deletedRestaurant;
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  app.delete("/restaurants/:restaurantId", async(req, res) => {
    try {
      const deletedRestaurant = await deleteRestaurantById(req.params.restaurantId);
      if(deletedRestaurant) {
        res.status(200).json({deletedRestaurant});
      } else {
        res.status(404).json({error: "No Restaurant found with this restaurant Id."});
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch Restaurant data."});
    }
  });
  //deleteRestaurantById("694d9c5c30cc5c9380058909");

  async function deleteRestaurantByName(restaurantName) {
    try {
        const deletedRestaurant = await Restaurant.findOneAndDelete({name: restaurantName});
        console.log("Deleted Restaurant: ", deletedRestaurant);
    } catch (error) {
        console.log("Error occuered while updating restaurants data: ", error);
    }
  }
  //deleteRestaurantByName("Som Sarovar");

  

app.listen(port, ()=> {console.log("server is running at port: ", port)});