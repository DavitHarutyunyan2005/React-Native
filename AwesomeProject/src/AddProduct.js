import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import HeaderAdmin from './headerAdmin';
import ImagePicker from 'react-native-image-picker';


const AddProduct = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [madeIn, setMadeIn] = useState('');
    const [code, setCode] = useState('');
    const [type, setType] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [image, setImage] = useState(null);

    const handleTitle = (text) => {
        setTitle(text);
    };
    const handlePrice = (text) => {
        setPrice(text);
    };
    const handleCompany = (text) => {
        setCompany(text);
    };
    const handleMadeIn = (text) => {
        setMadeIn(text);
    };
    const handleCode = (text) => {
        setCode(text);
    };
    const handleType = (text) => {
        setType(text);
    };
    const handleIngredients = (text) => {
        setIngredients(text);
    };

    const handleAddProduct = () => {
        const productData = {
            title,
            price,
            company,
            madeIn,
            code,
            type,
            ingredients,
            image
        };
        console.log('Adding product:', productData);
    };

    const handleImageUpload = () => {
            ImagePicker.showImagePicker({ mediaType: 'photo' }, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else {
                    const source = { uri: response.uri };
                    setImage(source);
                }
            });    
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderAdmin navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>Add Product</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={handleTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={price}
                    onChangeText={handlePrice}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Company"
                    value={company}
                    onChangeText={handleCompany}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Made in"
                    value={madeIn}
                    onChangeText={handleMadeIn}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Type"
                    value={type}
                    onChangeText={handleType}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredients"
                    value={ingredients}
                    onChangeText={handleIngredients}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Code"
                    value={code}
                    onChangeText={handleCode}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                    <Text style={styles.uploadText}>Upload Image</Text>
                </TouchableOpacity>
                <Button title="Add Product" onPress={handleAddProduct} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    uploadButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    uploadText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AddProduct;
