import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'; // Make sure to import KeyboardAvoidingView
import React from 'react';
import Background from './Background';
import { darkGreen } from './Constants';
import Field from './Field';
import Btn from './Btn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const Signup = () => {
    const [username, setUsername] = useState('');
    const [verifiedUsername, setVerifiedUsername] = useState('');
    const [email, setEmail] = useState('');
    const [verifiedEmail, setVerifiedEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifiedPassword, setVerifiedPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handlePassword = (e) => {
        setPassword(e.nativeEvent.text);
        setError(null);
    };
    const handleEmail = (e) => {
        setEmail(e.nativeEvent.text);
        setError(null);
    };

    const handleUsername = (e) => {
        setUsername(e.nativeEvent.text);
        setError(null);
    };

    const userData = {
        username,
        email,
        password
    }

    console.log(userData);


    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await axios.post('http://192.168.10.11:3000/api/auth/signup', userData);
            const data = res.data;

            console.log(`data status: ${JSON.stringify(data.status)}`);

            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                alert("success === false");
                return;
            }

            setLoading(false);
            setError(null);
        } catch (error) {
            console.log(`error caught: ${error.response ? error.response.data.message : error.message}`);
            setLoading(false);

            // Check if the error object has a response property, which may contain the server response
            if (error.response) {
                const responseData = error.response.data;
                setError(responseData.message || 'An error occurred during signup.');
            } else {
                setError('An error occurred during signup.');
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
                    }}>Login</Text>

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
                        }}>Sign up</Text>

                        <Text style={{
                            color: 'grey',
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginBottom: 20
                        }}>
                            Create your account
                        </Text>

                        {error && (error === 'Username is not available' || error === 'Username must contain at least 2 characters') &&
                            <Text style={{ color: 'red', fontSize: 12 }}>{error === 'Username is not available' ? 'Username is not available' : 'Username must contain at least 2 characters'}</Text>}
                        <Field
                            id="username"
                            placeholder="Username"
                            onChange={handleUsername}
                            error={error && (error === 'Username is not available' || error === 'Username must contain at least 2 characters')}
                        />   
                        {error && error === 'Email is not available' &&
                            <Text style={{ color: 'red', fontSize: 12 }}>Email is not available</Text>}
                        <Field id='email' placeholder="Email" onChange={handleEmail} keyboardType={'email-address'} error={error && error === 'Email is not available'} />
                        {error && error === 'Password must contain at least 8 characters' &&
                            <Text style={{ color: 'red', fontSize: 12 }}>Password must contain at least 8 characters</Text>}
                        <Field id='password' placeholder="password" onChange={handlePassword} secureTextEntry={true} error={error && error === 'Password must contain at least 8 characters'} />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={{
                                    color: '#838996',
                                    fontWeight: 'bold',
                                    fontSize: 9,
                                }}>Already have an account? <Text style={{ color: 'blue' }}>Sign in</Text></Text>
                            </TouchableOpacity>


                        </View>

                        <Btn textColor='white' bgColor={darkGreen} btnLabel="Signup" handlePress={() => handleSubmit()} />

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

export default Signup;
