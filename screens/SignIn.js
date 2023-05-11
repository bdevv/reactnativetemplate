import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import axios from "axios"
const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useContext(AuthContext);

    const { authorize, clearSession, user, error, getCredentials } = useAuth0();
    const onLogin = async () => {
        try {
            
            await authorize({ scope: 'openid profile email' }, { customScheme: 'com.reactnativetemplate' });
            let credentials = await getCredentials();
            console.log(credentials);
            //Alert.alert('AccessToken: ' + credentials.accessToken);
            navigation.navigate("MainScreen");
        } catch (e) {
            console.log(e);
        }
    };

    const loggedIn = user !== undefined && user !== null;

    const onLogout = async () => {
        try {
            await clearSession({ customScheme: 'com.reactnativetemplate' });
        } catch (e) {
            console.log('Log out cancelled');
        }
    };
    const handleSubmit = async () => {
        if (email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        const resp = await axios.post("http://127.0.0.1:8000/api/signin", { email, password });
        console.log(resp.data);
        if (resp.data.error)
            alert(resp.data.error);
        else {
            setState(resp.data);
            await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
            navigation.navigate("MainScreen");
        }
    };

    // console.log(config.domain);
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{ marginVertical: 10 }}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/logo.png")} style={styles.imageStyles} />
                </View>
                <Text style={styles.signupText}>SignIn</Text>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>EMAIL</Text>
                    <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)} autoCompleteType="email" keyboardType="email-address" />
                </View>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>PASSWORD</Text>
                    <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} autoComplteType="password" />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => onLogin()}>
                    <Text style={styles.buttonText}>SignIn with Auth0</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                    Not yet registered? {" "}
                    <Text style={{ color: 'darkred', fontWeight: 'bold' }}
                        onPress={() => navigation.navigate("SignUp")}> SignUp</Text>
                </Text>
                <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 10 }}>Forgot Password?</Text>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: "darkmagenta",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    imageContainer: { justifyContent: "center", alignItems: "center" },
    imageStyles: { width: 100, height: 100, marginVertical: 20 }
})

export default SignIn