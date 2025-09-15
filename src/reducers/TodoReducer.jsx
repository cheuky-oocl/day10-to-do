export function todoReducer(state, action) {
    const newState = [...state];
    const id = action.payload.id;

    switch (action.type) {
        case "TOGGLE_TODO":
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
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