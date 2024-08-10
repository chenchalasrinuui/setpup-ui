const appReducer = (state, action) => {
    switch (action.type) {
        case 'LOADER':
            return {
                ...state,
                isShowLoader: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;