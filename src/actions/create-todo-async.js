import { requestCreateTodo } from '../api';
import { NEW_TODO_ID } from '../constants';
import { ACTION_TYPE } from './action-type';



export const createTodoAsync = (newTodoData) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	return requestCreateTodo(newTodoData)
		.then((todo) => {
			dispatch({
				type: ACTION_TYPE.REMOVE_TODO,
				payload: NEW_TODO_ID
			});

			dispatch({
				type: ACTION_TYPE.ADD_TODO,
				payload: todo,
			});
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }));
};
