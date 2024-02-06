import React from 'react';
import { SafeAreaView } from 'react-native';
import HeaderAdmin from './headerAdmin';

const Admin = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderAdmin navigation={navigation} />
            {/* Add the rest of your Admin content here */}
        </SafeAreaView>
    );
};

export default Admin;
