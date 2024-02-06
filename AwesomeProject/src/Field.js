import React from 'react';
import { TextInput } from 'react-native';
import { darkGreen } from './Constants';

export default function Field({ error, ...props }) {
    return (
        <TextInput
            {...props}
            style={[
                {
                    borderRadius: 100,
                    color: darkGreen,
                    paddingHorizontal: 10,
                    width: '57%',
                    backgroundColor: 'rgb(220, 220, 220)',
                    marginVertical: 10,
                },
                error && { borderColor: 'red', borderWidth: 1 }, // Conditional style for error
            ]}
            placeholderTextColor="#838996"
        />
    );
}