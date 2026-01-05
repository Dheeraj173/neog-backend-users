const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Recipe = require("./BE1.1_CW/models/recipe.models");
initializeDatabase();

  async function createRecipe(recipe) {
    try {
        const newRecipe = new Recipe(recipe);
        const createdRecipe = await newRecipe.save();
        console.log(createdRecipe);
        return createdRecipe;  
    } catch(error) {
        console.log("Error while creating Recipe: ", error);
    }
  }

  app.post("/recipes", async(req, res)=> {
    try {
      const newRecipeCreated = await createRecipe(req.body);
      if(newRecipeCreated) {
        res.status(201).json({ newRecipeCreated });
      } else {
        res.status(404).json({error: "No new Recipe created."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to create new Recipe."});
    }
  });

  async function getRecipes() {
    try {
        const recipes = await Recipe.find();
        console.log(recipes);
        return recipes;
    } catch (error) {
        console.log("Error occured while reading recipes data: ", error);
    }
  }

app.get("/recipes", async(req, res)=> {
  try {
    const recipes = await getRecipes();
    if(recipes) {
      res.status(200).json({ recipes });
    } else {
      res.status(404).json({error: "No recipes found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch recipes data."})
  }
})

//4. Create an API to get a recipes's detail by its title. Make sure to do error handling.
async function getRecipesByTitle(titleName) {
    try {
        const recipes = await Recipe.find({title: titleName});
        console.log(recipes);
        return recipes;
    } catch (error) {
        console.log("Error occuered while reading recipes data: ", error);
    }
  }

app.get("/recipes/title/:titleName", async(req, res)=> {
    try {
      const recipes = await getRecipesByTitle(req.params.titleName);
      if(recipes) {
        res.status(200).json({recipes });
      } else {
        res.status(404).json({error: "No recipes found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch recipes data."})
    }
  })
//5. Create an API to get details of all the recipes by an author. Make sure to do error handling.
async function getRecipesByAuthor(authorName) {
    try {
        const recipes = await Recipe.find({author: authorName});
        console.log(recipes);
        return recipes;
    } catch (error) {
        console.log("Error occured while reading recipes data: ", error);
    }
  }

app.get("/recipes/author/:authorName", async(req, res)=> {
    try {
      const recipes = await getRecipesByAuthor(req.params.authorName);
      if(recipes) {
        res.status(200).json({ recipes });
      } else {
        res.status(404).json({error: "No recipes found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch recipes data."})
    }
  })

//6. Create an API to get all the books which are of "Easy" difficulty level.
async function getRecipesByDifficulty(difficultyLevel) {
    try {
        const recipes = await Recipe.find({difficulty: difficultyLevel});
        console.log(recipes);
        return recipes;
    } catch (error) {
        console.log("Error occured while reading recipes data: ", error);
    }
  }

app.get("/recipes/difficulty/:difficultyLevel", async(req, res)=> {
    try {
      const recipes = await getRecipesByDifficulty(req.params.difficultyLevel);
      if(recipes) {
        res.status(200).json({ recipes });
      } else {
        res.status(404).json({error: "No recipes found."})
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch recipes data."})
    }
  })
//--------
async function updateRecipesRatingById(recipeId, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, dataToUpdate, {new:true});
        console.log(updatedRecipe);
        return updatedRecipe;
    } catch (error) {
        console.log("Error occured while updating Recipe data: ", error);
    }
  }

  app.post("/recipes/:recipeId", async(req, res)=> {
    try {
      const updatedRecipe = await updateRecipesRatingById(req.params.recipeId, req.body);
      if(updatedRecipe) {
        res.status(200).json({ updatedRecipe });
      } else {
        res.status(404).json({error: "No Recipe updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Recipe to update."});
    }
  });

  async function updateRecipeByTitle(recipeTitle, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate({title: recipeTitle}, dataToUpdate, {new:true});
        console.log(updatedRecipe);
        return updatedRecipe;
    } catch (error) {
        console.log("Error occured while updating Recipe data: ", error);
    }
  }

  app.post("/recipes/title/:recipeTitle", async(req, res)=> {
    try {
      const updatedRecipe = await updateRecipeByTitle(req.params.recipeTitle, req.body);
      if(updatedRecipe) {
        res.status(200).json({updatedRecipe });
      } else {
        res.status(404).json({error: "No Recipe updated."});
      }
    } catch(error) {
      res.status(500).json({error: "Failed to fetch data of Recipe to update."});
    }
  });

async function deleteRecipeById(id) {
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(id);
        console.log("Deleted Recipe: ", deleteRecipe);
        return deleteRecipe;
    } catch (error) {
        console.log("Error occured while updating Recipe data: ", error);
    }
  }
  app.delete("/recipes/:recipeId", async(req, res) => {
    try {
      const deletedRecipe = await deleteRecipeById(req.params.recipeId);
      if(deletedRecipe) {
        res.status(200).json({deletedRecipe});
      } else {
        res.status(404).json({error: "No Recipe found with this Recipe-Id."});
      }
    } catch (error) {
      res.status(500).json({error: "Failed to fetch recipe data."});
    }
  });

app.listen(port, ()=> {console.log("Server is running at port: ", port)});