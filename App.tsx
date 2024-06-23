import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';
import land_page from './pages/landing_page';
import IngrediantCalculator from './pages/ingredient_calculator';
import SavedRecipes from './pages/saved_recipes_page';
import RecipeSearch from './pages/search_page';

const Stack = createStackNavigator();

const App = () => {
  const ref = React.useRef(null);
  const linking = {
    prefixes: ['https://rosescookbook.com', 'rosescookbook://'],
    config: {
      screens: {
        Home: 'feed/:sort',
      },
    },
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator 
        initialRouteName='Home'
        screenListeners={{
          state: (e) => {
            // Do something with the state
            console.log('state changed', e.data);
          },
        }} >
        <Stack.Screen name="Home" component={land_page} />
        <Stack.Screen name="RecipeSearch" component={RecipeSearch} />
        <Stack.Screen name="SavedRecipes" component={SavedRecipes} />
        <Stack.Screen name="IngredientCalculator" component={IngrediantCalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;