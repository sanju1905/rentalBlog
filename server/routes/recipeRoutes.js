const express=require("express");
const router=express.Router();
const recipeController=require('../controllers/recipeController');
/**
 * App routes
 */
router.get('/',recipeController.homepage);
router.get('/categories',recipeController.explorecategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.get('/recipe/:id',recipeController.explorerecipe);
router.post('/search',recipeController.exploresearch);
router.get('/explore-latest',recipeController.explorelatest);
router.get('/random-recipe',recipeController.explorerandom);
router.get('/submit-recipe',recipeController.exploresubmit);
router.post('/submit-recipe',recipeController.exploresubmitonpost);




module.exports=router;