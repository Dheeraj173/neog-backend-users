const { model } = require("mongoose");
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Car = require("./BE1.1_CW/models/cars2.models");
initializeDatabase();

  const newCar1 = {
    brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

  const newCar2 = {
    brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
  };

  async function createCar(car) {
    try {
        const newCar = new Car(car);
        const createNewCar = await newCar.save();
        console.log("New Car created: ", createNewCar);
    } catch(error) {
        console.log("Error while creating Car: ", error);
    }

  }
  //createCar(newCar1);
  //createCar(newCar2);
  
  async function readCarsData() {
    try {
        const cars = await Car.find();
        console.log(cars);
    } catch (error) {
        console.log("Error occuered while reading Cars data: ", error);
    }
  }
  //readCarsData();

  async function getCarsByBrand(name) {
    try {
        const car = await Car.find({brand: name});
        console.log(car);
    } catch (error) {
        console.log("Error occuered while reading Car data: ", error);
    }
  }
  //getCarsByBrand("Ford");

  async function getCarsByColor(value) {
    try {
        const car = await Car.find({color: value});
        console.log(car);
    } catch (error) {
        console.log("Error occuered while reading Cars data: ", error);
    }
  }
  //getCarsByColor("Black");

   //updtae rating:
   async function updateCarPrice(modelName, dataToUpdate) {
    try {
        const updatedCar = await Car.findOneAndUpdate({model: modelName}, dataToUpdate, {new:true});
        console.log(updatedCar);
    } catch (error) {
        console.log("Error occuered while updating Cars data: ", error);
    }
  }
  //updateCarPrice("Corolla", {price: 2300000});

 async function updateConditionOfCar(carModel, dataToUpdate) {
    try {
        const updatedCar= await Car.findOneAndUpdate({model: carModel}, dataToUpdate, {new:true});
        console.log(updatedCar);
    } catch (error) {
        console.log("Error occuered while updating cars data: ", error);
    }
  }
  //updateConditionOfCar("Model S", {condition: "Used"});

  async function deleteCarById(id) {
    try {
        const deletedCar = await Car.findByIdAndDelete(id);
        console.log("Deleted Car: ", deletedCar);
    } catch (error) {
        console.log("Error occuered while deleting cars data: ", error);
    }
  }
  deleteCarById("69465305cd4e2111d6903f4f");

  async function deleteCarByBodyStyle(style) {
    try {
        const deletedCar = await Car.findOneAndDelete({bodyStyle: style});
        console.log("Deleted Car: ", deletedCar);
    } catch (error) {
        console.log("Error occuered while deleting Car data: ", error);
    }
  }
  deleteCarByBodyStyle("Coupe");