import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  SectionList,
  DrawerLayoutAndroidBase,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = ({navigation}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {

    await axios.post(`http://192.168.182.17:3000/user/`, { name: name, phone: phone, city: city, email: email, password: password })
      .then((response) => {
        ToastAndroid.show("Registered successfully", ToastAndroid.LONG)
        console.log("Registered successfully");
        navigation.navigate("Login");
      })
      .catch((error) =>{console.log(error);alert("Server is down please try again.")});


  }

  return (
    <View style={styles.container}>
      <View>
        <Icon name="spotify" size={60} color="#1DB954" style={styles.icon} />
        <Text style={styles.text}>Spotify</Text>
      </View>
      <Icon />
      <View style={styles.container1}>
        <Text style={styles.text1}>Name</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={setName}
          placeholder="name"
        />
        <Text style={styles.text1}>Mobile number</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={setPhone}
          placeholder="phone"
          keyboardType='number-pad'
        />
        <Text style={styles.text1}>City</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={setCity}
          placeholder="city"
        />
        <Text style={styles.text1}>Email</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={setEmail}
          placeholder="email"
        />
        <Text style={styles.text1}>Password</Text>
        <TextInput
          style={styles.textbox1}
          onChangeText={setPassword}
          placeholder="password"
        // secureTextEntry={!eyeOpen}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => register()}
        >
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text1: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 15
  },
  image: {
    height: 200,
    width: "50%",
    borderRadius: 100,
    marginLeft: 90,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  container1: {
    marginTop: 30,
  },
  icon: {
    marginTop: 50,
    marginLeft: 120,
  },
  text: {
    color: "#1DB954",
    position: "absolute",
    top: 60,
    left: 180,
    fontSize: 30
  },
  button: {
    alignItems: "center",
    borderColor: "white",
    padding: 10,
    height: 40,
    borderWidth: 1,
    width: 100,
    marginHorizontal: 150,
    borderRadius: 10,

  },
  textbox1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,

  },
  buttontext: {
    color: "#1DB954",
    fontWeight: "bold"
  }
});


export default Signup;