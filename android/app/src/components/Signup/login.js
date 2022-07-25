import React, { useState } from "react";
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
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Homepage/home';

const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdetails, setUserDetails] = useState(null)
  const [eyeopen, setEyeopen] = useState(false)
  const [isusernamevalid, setUsernamevalid] = useState(false)
  const [ispasswordvalid, setPasswordValid] = useState(false)
  const login = async () => {

    await axios.post(`http://192.168.182.17:3000/user/${email}`, { email: email, password: password })
      .then((response) => {
        setUserDetails(response.data); ToastAndroid.show("Login successfully", ToastAndroid.LONG);
        console.log("Login successfully");
        navigation.navigate("Home",{userData : response.data});

      })
      .catch((error) => {console.log("register unsuccessfull please check the code", error);alert("Invalid Credentials")});

  }


const usernames = (name) => {
  setUsernamevalid(name.length > 5);
  setEmail(name);
}
const passwords = (pass) => {
  setPasswordValid(pass.length >= 6);
  setPassword(pass);
}
//console.log(userdetails)
return (
  <View style={styles.container}>
    <View>
      <Icon name="spotify" size={60} color="#1DB954" style={styles.icon} />
      <Text style={styles.text}>Spotify</Text>
    </View>
    <Icon />
    <View style={styles.container1}>
      <Text style={styles.text1}>Email</Text>
      <TextInput
        style={styles.textbox1}
        onChangeText={usernames}
        placeholder="email"
        keyboardType="email-address"
      />
      {email.length > 0 && !isusernamevalid ? (
        <Text style={styles.error}>
          Invalid Email address
        </Text>
      ) : null}
      <Text style={styles.text1}>Password</Text>
      <TextInput
        style={styles.textbox1}
        onChangeText={passwords}
        placeholder="password"
        secureTextEntry={!eyeopen}
      />
      {password.length > 0 && !ispasswordvalid ? (
        <Text style={styles.error}>
          Invalid Password
        </Text>
      ) : null}
      <TouchableOpacity onPress={() => setEyeopen(!eyeopen)}><Icon2 name={(eyeopen) ? "eye" : "eye-off"} color="black" size={30} style={{ marginTop: "-12%", marginLeft: "87%" }} /></TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => login()}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
)
}
const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: 17,
    marginBottom: 8
  },
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
    margin: 12

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
})

export default Login