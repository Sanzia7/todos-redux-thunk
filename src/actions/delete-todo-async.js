import { requestDeleteTodo } from '../api'
import { ACTION_TYPE } from './action-type'



export const deleteTodoAsync = (id) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return requestDeleteTodo(id)
		.then(() => {
			dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id})
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END}))

}

