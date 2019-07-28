const initialState = {
    age:21
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP':
            return {
                ...state,
                age: state.age += action.val
            }
        case 'AGE_DOWN':
        return {
            ...state,
            age: state.age -= action.val
        }
        default:
            break;
    }

    return newState
}

export default reducer;