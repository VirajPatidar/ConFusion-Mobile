import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';

{/** Navigation Part 1 - Menu and Dishdetail */}

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen({ navigation }) {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"            
                }
            }}
            >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
                />            
        </MenuNavigator.Navigator>
    );
  }
  
  {/** Navigation Part 2 - Home and Drawer Navigation */}
  
  const HomeNavigator = createStackNavigator();
  
  function HomeNavigatorScreen({ navigation }) {
    return(
      <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff"            
        }
      }}
      >
          <HomeNavigator.Screen
              name="Home"
              component={Home}
              />         
      </HomeNavigator.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MainNavigator({ navigation }) {
  return(

        <Drawer.Navigator initialRouteName="Home" drawerStyle ={{backgroundColor: '#D1C4E9'}}>
          <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
          <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
        </Drawer.Navigator>

);
}

class Main extends Component {
  
  render() {
    
    return (
      <NavigationContainer>   
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default Main;

{/** USE OF CURRENT VERSION OF REACT NATIVE

Adoption of hints from https://reactnavigation.org/docs/stack-navigator/,
 https://reactnavigation.org/docs/drawer-based-navigation and 
 https://www.coursera.org/learn/react-native/discussions/weeks/1/threads/8PifLG4EQ724nyxuBDO9DQ

npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens
    react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
npm install @react-native-community/masked-view
npm install react-native-safe-area-context
*/}

{/** SIMPLE EXAMPLE from https://reactnavigation.org/docs/drawer-based-navigation
  
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

class Main extends Component {

  render() {
 
    return (
        <NavigationContainer>    
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}
*/};

  