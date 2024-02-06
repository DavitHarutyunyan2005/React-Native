import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    mader: {
        type: String,
        required: true,
    },
    madeIn: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    code: {
        type: Number,
        required: true
    },

    Ingredients: {
        type: String,
    },

    type:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);

export default Item;