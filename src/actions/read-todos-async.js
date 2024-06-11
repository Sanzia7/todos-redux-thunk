
import { requestReadTodos } from '../api'
import { ACTION_TYPE } from './action-type'



export const readTodosAsync = (searchText, isSortingAZ) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START })

	return requestReadTodos(searchText, isSortingAZ)
		.then((loadedTodos) => {
			dispatch({
				type: ACTION_TYPE.SET_TODOS,
				payload: loadedTodos
			})
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }))
}




// searchText, isSortingAZ
