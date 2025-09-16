export function todoReducer(state, action) {
    switch (action.type) {
        case "UPDATE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload.id){
                    return action.payload
                }
                return todo
            })

        case "DELETE_TODO":
            return state.filter((value) => value.id !== action.payload.id);

        case "ADD_TODO":
            return [...state, action.payload];

        case "LOAD_TODOS":
            return action.payload

        default:
            return state;
    }
}