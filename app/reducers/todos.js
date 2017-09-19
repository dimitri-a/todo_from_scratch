const todos = (state = [{id:1,name:'first todo',completed:false}], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: state.length,
                    name: action.text,
                    completed: false
                }
            ];
        case "TOGGLE":
            return state.map(
                todo => {

                    if (todo.name !== action.name) {
                        return todo;
                    }
       
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                });


        default:
            return state;
    }
}

export default todos;