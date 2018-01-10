const initialState = {
    exampleValue: null,
}

export default function globalReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_EXAMPLE_VALUE': return { ...state,
            exampleValue: action.exampleValue
        }
        default: return state
    }
}
