const initialState = {
    a: 1
};

const reducerA = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_A":
            return {
                ...state,
                a: state.a + action.b  
            }
        default:
            break
    }
    return state;
}


export default reducerA;