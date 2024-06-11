import { requestUpdateTodo } from '../api'
import { ACTION_TYPE } from './action-type'
// import { ACTION_TYPE } from './action-type'



export const updateTodoAsync = (newTodoData) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return requestUpdateTodo(newTodoData)
		.then(() => {
			dispatch({
				type: ACTION_TYPE.UPDATE_TODO,
				payload: newTodoData
			})
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}
