import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'
import {thunk} from 'redux-thunk'
import { editingTodoReducer, optionsReducer, todosReducer } from './reducers'


const reducer = combineReducers({
	todos: todosReducer,
	editingTodo: editingTodoReducer,
	options: optionsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
