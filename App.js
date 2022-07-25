/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Flux from '../SpotifyNative/android/app/src/sampleflux/flux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './android/app/src/components/Homepage/home';

import Signup from './android/app/src/components/Signup/signup';
import Login from './android/app/src/components/Signup/login';
import Visitpage from './android/app/src/screens/Visitpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeScreenContainer } from 'react-native-screens';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  return (
    
    // <ScrollView style={styles.container}>
    <View style={styles.container}>
      {/* <Home/> */}
      {/* {user?(  <Home onLogout={()=>setUser(null)}/>):(<Login onLogin={setUser}/>)} */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Visitpage'>
          <Stack.Screen
            name="Visitpage"
            component={Visitpage}
            options={{
              header: () => null
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signup}
            options={{
              header: () => null
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
    //</ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    justifyContent: 'center'
  },

});

export default App;
