import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { ShowBill } from './ShowBill';
import { ShowCart } from './ShowCart';


const Tab = createBottomTabNavigator();

export const Tabs=() =>{

  return (
      <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0
            }
        }}
      >
          <Tab.Screen
            name="Home page"
            component={Home}
            options={{ title: 'University Sales' }}
          />
           <Tab.Screen
           style={styles.container}
            name="Cart page"
            component={ShowCart}
            options={{ title: 'Cart '}}
          />
           <Tab.Screen
            name="Bill page"
            component={ShowBill}
            options={{ title: 'Bill ' }}
          />
      </Tab.Navigator>

  );
}