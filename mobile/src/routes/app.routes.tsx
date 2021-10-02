import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import Products from '../screens/Products';
import Product from '../screens/Product';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import {useCart} from '../contexts/cart';

const AppStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Main"
        component={TabNav}
        options={{headerShown: false}}
      />
      <AppStack.Screen name="Produto" component={Product} />
    </AppStack.Navigator>
  );
};

const TabNav: React.FC = () => {
  const {totalItensInCart} = useCart();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Produtos') {
            iconName = focused ? 'dashboard' : 'dashboard';
          } else if (route.name === 'Carrinho') {
            iconName = focused ? 'shopping-bag' : 'shopping-bag';
          } else if (route.name === 'Meu Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <>
              {focused ? (
                <>
                  <View
                    style={{
                      backgroundColor: '#007cc3',
                      height: 2,
                      width: 60,
                      top: 0,
                      position: 'absolute',
                    }}
                  />
                  <Icons name={iconName} size={size} color={color} />
                </>
              ) : (
                <Icons name={iconName} size={size} color={color} />
              )}
            </>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#007cc3',
        inactiveTintColor: '#999999',
        showLabel: true,
      }}>
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{tabBarBadge: totalItensInCart}}
      />
      <Tab.Screen name="Meu Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
export default AppRoutes;
