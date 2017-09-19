import { createStore} from 'redux'
import todos from './reducers/todos'

//todo only 1 argument for this one
const store = createStore(
    todos
)

export default store;
