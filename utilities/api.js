// export const getAPIData = (query) => {
//   // const apiKey = 'your_api_key_here';
//   const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d062059a&app_key=e6de72e94ee8ba3ddb75fa45a3a06681`;

//   return fetch(url);
// }

export const getAPIData = (query) => {
  var SpoonacularApi = require('spoonacular_api');
  
  var defaultClient = SpoonacularApi.ApiClient.instance;
  // Configure API key authorization: apiKeyScheme
  var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
  apiKeyScheme.apiKey = "YOUR API KEY"
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //apiKeyScheme.apiKeyPrefix['x-api-key'] = "Token"
  
  var api = new SpoonacularApi.DefaultApi()
  var analyzeRecipeRequest = {"title":"Spaghetti Carbonara","servings":2,"ingredients":["1 lb spaghetti","3.5 oz pancetta","2 Tbsps olive oil","1  egg","0.5 cup parmesan cheese"],"instructions":"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "}; // {AnalyzeRecipeRequest} Example request body.
  var opts = {
    'language': en, // {String} The input language, either \"en\" or \"de\".
    'includeNutrition': false, // {Boolean} Whether nutrition data should be added to correctly parsed ingredients.
    'includeTaste': false // {Boolean} Whether taste data should be added to correctly parsed ingredients.
  };
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };
  api.analyzeRecipe(analyzeRecipeRequest, opts, callback);
}