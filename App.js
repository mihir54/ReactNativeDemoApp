/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Providers from './navigation';
import { requestUserPermission, notificationListner } from './utils/notificationService';

const App = () => {

  useEffect(() => {
    requestUserPermission()
    notificationListner()
  })

  return (
    <Providers />
  );
};
export default App;

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import OnBoardingScreen from './Screens/OnBoardingScreen';
// import LoginScreen from './Screens/LoginScreen';
// import { useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const Appstack = createStackNavigator();

// const App = () => {

//   const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then(value => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true')
//         setIsFirstLaunch(true)
//       } else {
//         setIsFirstLaunch(false)
//       }       
//     });
//   }, []);

//   if (isFirstLaunch == null) {
//     return null;
//   } else if (isFirstLaunch == true) {
//     return (
//       <NavigationContainer>
//         <Appstack.Navigator
//           headerMode="none"
//         >
//           <Appstack.Screen name="Onboarding" component={OnBoardingScreen} />
//           <Appstack.Screen name="Login1" component={LoginScreen} />
//         </Appstack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return <LoginScreen />
//   } 
// };


// export default App;
