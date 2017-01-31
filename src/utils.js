function createReducer(initialState, actionMap={}, childReducerMap={}) {
    return (state=initialState, action) => {
        state = Object.assign({}, state);
        for (let substate in childReducerMap)
            state[substate] = childReducerMap[substate](state[substate], action);
        if (action.type in actionMap)
            return actionMap[action.type](state, action);
        else return state;
    };
}

export { createReducer };
