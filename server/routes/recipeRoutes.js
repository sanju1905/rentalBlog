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
router.get('/about',recipeController.exploreAbout);
router.get('/register',recipeController.register);
router.post('/register',recipeController.registeronpost);
router.post('/login',recipeController.loginonpost);
router.get('/login',recipeController.login);
router.get('/dashboard',recipeController.dashboard);
router.post('/dash-login',recipeController.dashboardonpost);
router.post('/delete-room/:roomId',recipeController.delete);
router.get('/edit-room/:roomId',recipeController.edit);
router.post('/update-room/:roomId',recipeController.update);
router.post('/send-email/:roomId',recipeController.email)





module.exports=router;