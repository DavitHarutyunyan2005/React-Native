import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'; // Make sure to import KeyboardAvoidingView
import React from 'react';
import Background from './Background';
import { darkGreen } from './Constants';
import Field from './Field';
import Btn from './Btn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const Signin = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handlePassword = (e) => {
        setPassword(e.nativeEvent.text);
        setError(null);
    };

    const handleIdentifier = (e) => {
        setIdentifier(e.nativeEvent.text);
        setError(null);
    };

    const userData = {
        identifier,
        password
    };

    // console.log(userData);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await axios.post('http://192.168.10.11:3000/api/auth/signin', userData);
            const data = res.data;

            // console.log(`data status: ${JSON.stringify(data.status)}`);

            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                alert("success === false");
                return;
            }

            setLoading(false);
            setError(null);

            const userRole = data.role;

            if (userRole === 'admin') {
                navigation.navigate('Admin');
            } else {
                navigation.navigate('Home');
            }
        } catch (error) {
            // console.log(`error caught: ${error.response ? error.response.data.message : error.message}`);
            setLoading(false);

            if (error.response) {
                const responseData = error.response.data;
                setError(responseData.message || 'An error occurred during login.');
            } else {
                setError('An error occurred during login.');
            }
        }
    };







    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={-210}
        >
            <View style={{ flex: 1, alignItems: 'center', width: 400 }}>
                <View style={{ alignItems: 'center', alignContent: 'center', paddingRight: 65, justifyContent: 'space-around', }}>
                    <Text style={{
                        color: "white",
                        fontSize: 64,
                        fontWeight: 'bold',
                        marginVertical: 10
                    }}>Sign in</Text>

                    <View style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 460,
                        borderTopLeftRadius: 130,
                        paddingTop: 100,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 40,
                            color: darkGreen,
                            fontWeight: 'bold'
                        }}>Sign in</Text>

                        <Text style={{
                            color: 'grey',
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginBottom: 20
                        }}>
                            to your account
                        </Text>

                        {/* {error && (error === 'Username is not available' || error === 'Username must contain at least 6 characters') &&
                            <Text style={{ color: 'red', fontSize: 12 }}>{error === 'Username is not available' ? 'Username is not available' : 'Username must contain at least 6 characters'}</Text>}
                        <Field
                            id="username"
                            placeholder="Username"
                            onChange={handleUsername}
                            error={error && (error === 'Username is not available' || error === 'Username must contain at least 6 characters')}
                        />    */}
                        {error && (error === "Email is invalid" || error === 'Username is invalid' || error === 'Username or Email is invalid') &&
                            <Text style={{ color: 'red', fontSize: 12 }}>{error === "Email is invalid" ? 'Email is invalid' : ( error === 'Username is invalid' ? 'Username is invalid' :'Username or Email is invalid'  )}</Text>}
                        <Field placeholder="Email or Username" onChange={handleIdentifier} keyboardType={'email-address'} error={error && (error === 'Username or Email is invalid' || error === "Email is invalid" || error === 'Username is invalid' )} />
                        {error && error === 'Password is invalid' &&
                            <Text style={{ color: 'red', fontSize: 12 }}>Password is invalid</Text>}
                        <Field id='password' placeholder="password" onChange={handlePassword} secureTextEntry={true} error={error && error === 'Password is invalid'} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text style={{
                                    color: '#838996',
                                    fontWeight: 'bold',
                                    fontSize: 9,
                                    paddingRight: 31
                                }}>Dont have an account?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{
                                    color: '#838996',
                                    fontWeight: 'bold',
                                    fontSize: 9,
                                }}>Forgot password?</Text>
                            </TouchableOpacity>

                        </View>

                        <Btn textColor='white' bgColor={darkGreen} btnLabel="Sign in" handlePress={() => handleSubmit()} />

                    </View>
                </View>
            </View>


        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});

export default Signin;
