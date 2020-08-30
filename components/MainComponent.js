import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})

const HeaderOptions = {
  headerStyle: {
      backgroundColor: "#512DA8"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
      color: "#fff"            
  }
};

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
      <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
              <Image 
                  source={require('./images/logo.png')}
                  style={styles.drawerImage}
              />
          </View>
          <View style={{flex: 2}}>
              <Text style={styles.drawerHeaderText}>
                  Ristorante Con Fusion
              </Text>
          </View>
      </View>
      <DrawerItemList {...props}/>
  </ScrollView>
);

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
                options={
                  ({navigation}) => ({
                      headerLeft: () => (
                          <Icon 
                              name='menu' 
                              size={24}
                              color='white'
                              onPress={() => navigation.toggleDrawer()}
                          />
                      )
                  })
               }
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
              options={
                ({navigation}) => ({
                    headerLeft: () => (
                        <Icon 
                            name='menu' 
                            size={24}
                            color='white'
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                
                })
             }
              />         
      </HomeNavigator.Navigator>
  );
}

const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator
      initialRouteName="Contact Us"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#512DA8" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <ContactNavigator.Screen
        name="Contact Us"
        component={Contact}
        options={
          ({navigation}) => ({
              headerLeft: () => (
                  <Icon 
                      name='menu' 
                      size={24}
                      color='white'
                      onPress={() => navigation.toggleDrawer()}
                  />
              )
          
          })
       }
      />
    </ContactNavigator.Navigator>
  );
}

const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen() {
  return (
    <AboutNavigator.Navigator
      initialRouteName="About Us"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#512DA8" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <AboutNavigator.Screen
        name="About Us"
        component={About}
        options={
          ({navigation}) => ({
              headerLeft: () => (
                  <Icon 
                      name='menu' 
                      size={24}
                      color='white'
                      onPress={() => navigation.toggleDrawer()}
                  />
              )
          
          })
       }
      />
    </AboutNavigator.Navigator>
  );
}
const ReservationNavigator = createStackNavigator();
function ReservationNavigatorScreen() {
  return (
    <ReservationNavigator.Navigator
      initialRouteName="About Us"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#512DA8" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <ReservationNavigator.Screen
        name="Reservation"
        component={Reservation}
        options={
          ({navigation}) => ({
              headerLeft: () => (
                  <Icon 
                      name='menu' 
                      size={24}
                      color='white'
                      onPress={() => navigation.toggleDrawer()}
                  />
              )
          
          })
       }
      />
    </ReservationNavigator.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return(
      <Drawer.Navigator 
          initialRouteName="Home"
          drawerStyle={{ backgroundColor:'#D1C4E9' }}
          drawerContent={props => <CustomDrawerContentComponent {...props}/>}
      >
          <Drawer.Screen 
              name="Home"       
              component={HomeNavigatorScreen} 
              options={{
                  drawerIcon: ({tintColor}) => (
                      <Icon
                          name='home'
                          type='font-awesome'
                          size={24}
                          color={tintColor}
                      />
                  )
              }}

          />
          <Drawer.Screen 
              name="Contact Us" 
              component={ContactNavigatorScreen}
              options={{
                  drawerIcon: ({tintColor}) => (
                      <Icon
                          name='address-card'
                          type='font-awesome'
                          size={22}
                          color={tintColor}
                      />
                  )
              }}                
          />
          <Drawer.Screen 
              name="Menu"       
              component={MenuNavigatorScreen} 
              options={{
                  drawerIcon: ({tintColor}) => (
                      <Icon
                          name='list'
                          type='font-awesome'
                          size={24}
                          color={tintColor}
                      />
                  )
              }}                
          />
          <Drawer.Screen 
              name="About Us"   
              component={AboutNavigatorScreen} 
              options={{
                  drawerIcon: ({tintColor}) => (
                      <Icon
                          name='info-circle'
                          type='font-awesome'
                          size={24}
                          color={tintColor}
                      />
                  )
              }}                
          />
          <Drawer.Screen 
              name="Reservation"   
              component={ReservationNavigatorScreen} 
              options={{
                  drawerIcon: ({tintColor}) => (
                      <Icon
                          name='cutlery'
                          type='font-awesome'
                          size={24}
                          color={tintColor}
                      />
                  )
              }}                
          />
      </Drawer.Navigator>
  );
}


class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  render() {
    return (
      <NavigationContainer>   
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});


// function MainNavigator({ navigation }) {
//   return(

//         <Drawer.Navigator initialRouteName="Home" drawerStyle ={{backgroundColor: '#D1C4E9'}}>
//           <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
//           <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
//           <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
//           <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
//         </Drawer.Navigator>

// );
// }

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

  