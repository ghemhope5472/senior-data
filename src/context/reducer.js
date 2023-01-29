export const initialState = {
    user: null
};

// selector
export const getTotal = (basket) =>
    basket?.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {

    switch (action.type) {
      

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "VIEW_PRODUCT_INFO":
            return {
                ...state,
                previewItem: action.item
            };

        default:
            return state;
    }
};

export default reducer;
