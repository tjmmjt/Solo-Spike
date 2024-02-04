

const rebrickableReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_REBRICKABLE':
            return action.payload
        default:
            return state
    }
}

export default rebrickableReducer