import React, {useState} from 'react';
import { View, StyleSheet, Text, Appearance  } from 'react-native';
import Background from './Background';
import { darkGreen, green } from './Constants';
import Btn from './Btn';



const Home = (props) => {

    const [theme, setTheme] = useState(Appearance.getColorScheme());
    Appearance.addChangeListener((scheme)=>{
        console.log(scheme);
    })


    return (
            <View
                style={{
                    marginHorizontal: 40,
                    marginVertical: 100
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 56,
                    }}>
                    Let's start</Text>

                <Text
                    style={{
                        color: 'white',
                        fontSize: 47,
                        marginBottom: 24
                    }}>
                    Coding</Text>

                        <Btn 
                        bgColor='white' 
                        textColor={darkGreen} 
                        btnLabel="Sign Up" 
                        handlePress={()=>props.navigation.navigate("Signup")}/>

                        <Btn 
                        bgColor={green} 
                        textColor='white' 
                        btnLabel="Sign in" 
                        handlePress={()=>props.navigation.navigate("Login")}/>



            </View>
    );
}

const styles = StyleSheet.create({});

export default Home;