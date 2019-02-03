import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
  Main,
  Product
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#7159c1"
    },
    headerTintColor: "#FFFFFF"
  },
});