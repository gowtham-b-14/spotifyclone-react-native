import React, { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Visitpage = ({navigation}) => {

const Signin=()=>{
    navigation.navigate("Signin")
}
const Login=()=>{
    navigation.navigate("Login")
}

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://psychology-spot.com/wp-content/uploads/2018/06/preferred-music.jpg" }} style={{ flex: 1 }}>
                <View>
                    <Icon name="spotify" size={70} color="white" style={styles.icon} />
                    <Text style={styles.text}>Spotify</Text>
                </View>
                <View>
                    <Text style={styles.text1}>Welcome</Text>
                    <Text style={styles.text2}>Sign up for free music on your phone, tablet and computer.</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>Signin()}
                    >
                        <Text style={styles.buttontext}>Create Account ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={()=>Login()}
                    >
                        <Text style={styles.buttontext}>Login 💛</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: "center",
        padding: 10,
        height: 50,
        marginTop:60,
        width: "90%",
        marginLeft: 20,
        borderRadius: 9999,
        backgroundColor:"#1DB954",
        borderColor:'#1DB954'
    },
    buttontext: {
        fontWeight: "bold",
        color:"white",
        textAlign:"center",
        fontSize:20
    },
    icon: {
        marginTop: 250,
        marginLeft: 100,
    },
    text: {
        color: "white",
        position: "absolute",
        top: 255,
        left: 164,
        fontSize: 40,
        fontWeight: "bold"
    },
    text1:{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        left:100,
        padding:50
    },
    text2:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    button2:{
        padding:30
    }
})

export default Visitpage 