const initialState = {
    b: 1
};

const reducerB = (state = initialState, action) => {
    switch(action.type){ 
        case "UPDATE_B":
            return {
                ...state,
                b: action.a + state.b  
            }
        default:
            break
    }
    return state;
}


export default reducerB;