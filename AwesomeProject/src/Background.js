import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children})=> {
    return (
        <View>
            <ImageBackground source={require("./images/images (3).jpg")} 
            style={{height: '100%'}}/>
            <View >
                {children}
            </View>
        </View>
    )
};

export default Background;