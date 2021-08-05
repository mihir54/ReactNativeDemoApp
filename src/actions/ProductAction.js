import { ADD_PRODUCT,DELETE_PRODUCT } from "./Types";

export const addProduct = (product,image) => (
    {
        type: ADD_PRODUCT,
        data: product,
        image: image
    }
);

export const deleteProduct = (key) => (
    {
        type: DELETE_PRODUCT,
        key: key,
    }
);