const initialState = { c: 0 };

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { c: state.c + 1 };
        case 'decrement':
            return { c: state.c - 1 };
        default: 
        throw new Error();
    }    
}

export { initialState, reducer };