import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import {useState} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import {Storage} from '../services/Storage';
import {AuthRepo} from '../services/AuthRepo';
import {Login} from '../screens/Login';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import App from '../../App';
import CartScreen from '../screens/CartScreen';
import WishList from '../screens/WishList';
import UserScreen from '../screens/UserScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import {Text} from 'react-native';
import CustomDrawer from '../screens/CustomDrawer';
import ProductDetail from '../screens/ProductDetail';
import SearchScreen from '../screens/SearchScreen';
import NewFile from '../screens/Newfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewFile" component={NewFile} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetail} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};
const WishListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WishList" component={WishList} />
      {/* <Stack.Screen name="Card" component={NextScreen} /> */}
    </Stack.Navigator>
  );
};
const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let icon;
            let icona;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }
            if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            if (route.name === 'User') {
              icona = focused ? 'user' : 'user-o';
              return (
                <FontAwesome name={icona} size={30} style={{color: 'black'}} />
              );
            }
            if (route.name === 'WishList') {
              iconName = !focused ? 'cards-heart-outline' : 'cards-heart';
            }
            //aagya but y icon se ku ni aaya phle jo kiya thakyu ki hum bas  abhi issi ko material wala hi use kr rahe hain isliyehame usse hi icon lena padega
            //lekin dusra bhi to use kr skte h haan kr sakten fir isko dynamic bana padega
            //acha thik h ab dkho mne na y data fetch kiya

            return <Icon name={iconName} size={30} style={{color: 'black'}} />;
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        component={AppStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="cart"
        component={CartStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="WishList"
        component={WishListStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const SideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabBar} />
    </Drawer.Navigator>
  );
};
export const Route = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);

  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    (async () => {
      const token = await Storage.getToken();
      if (token) {
        dispatch(AuthRepo.updateUser(token));
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? SideDrawer() : AuthStack()}
    </NavigationContainer>
  );
};
//toh koi to hoga na jo encrypt nhi h ok HAA BND kru kya
