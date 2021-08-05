import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/Types';

const initialState = {
    productList: []
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productList: state.productList.concat({
                    key: Math.random(),
                    name: action.data,
                    image: action.image
                })
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                productList: state.productList.filter((item) => item.key !== action.key)
            };

        default:
            return state;
    }
}

export default ProductReducer;