/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
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
 
 const Flux = () => {
 
   return (
     <View style={styles.container}>
       <View style={styles.container1}>
         <View style={[styles.text1,styles.border]}><Text >1</Text></View>
         <View style={[styles.text2,styles.border]}><Text>2</Text></View>
         <View style={[styles.text3,styles.border]}><Text>3</Text></View>
       </View>
       <View style={styles.container2}>
           <View style={[styles.text4,styles.border]}><Text >4</Text></View>
           <View style={[styles.text5,styles.border]}><Text>5</Text></View>
         <View style={styles.container3}>
           <View style={[styles.text6,styles.border]}><Text >6</Text></View>
           <View style={[styles.text7,styles.border]}><Text>7</Text></View>
         </View>
       </View>
       <View style={styles.container4}>
         <View style={[styles.text8,styles.border]}><Text >8</Text></View>
         <View style={[styles.text9,styles.border]}><Text>9</Text></View>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   border:{
     borderColor:"white",
     borderWidth:5,
   },
   container: {
     flex: 1,
   },
   container1: {
     flex: 1,
     width: "100%",
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   container2: {
     flex: 2,
     width: "100%",
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   container3: {
     flex: 3,
     width: "100%",
     flexDirection: 'column',
     justifyContent: 'space-around'
   },
   container4: {
     flex: 4,
     width: "100%",
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   text1: {
     flex: 1,
     fontWeight:10,
     backgroundColor: "red",
     justifyContent:"center",
     alignItems:'center'
   },
   text2: {
     flex: 2,
     backgroundColor: "yellow",
     justifyContent:"center",
     alignItems:'center'
   },
   text3: {
     flex: 3,
     backgroundColor: "red",
     justifyContent:"center",
     alignItems:'center'
   },
   text4: {
     flex: 1,
     backgroundColor: "yellow",
     justifyContent:"center",
     alignItems:'center'
   },
   text5: {
     flex: 1,
     backgroundColor: "red",
     justifyContent:"center",
     justifyContent:"center",
     alignItems:'center'
   },
   text6: {
     flex: 1,
     backgroundColor: "yellow",
     justifyContent:"center",
     alignItems:'center'
   },
   text7: {
     flex: 1,
     backgroundColor: "black",
     justifyContent:"center",
     alignItems:'center'
   },
   text8: {
     flex: 1,
     backgroundColor: "yellow",
     justifyContent:"center",
     alignItems:'center'
   },
   text9: {
     flex: 1,
     backgroundColor: "red",
     justifyContent:"center",
     alignItems:'center'
   }
 });
 
 export default Flux;
 