import { useDispatch } from 'react-redux'
import { ACTION_TYPE } from '../../actions'
import { NEW_TODO_ID } from '../../constants'
import {  Search, Sorting } from './actions'
import { Button } from '../button/button'
import styles from './control-todo.module.css'

export const ControlTodo = () => {
	const dispatch = useDispatch()

	const onAddTodo = () => {
		dispatch({
			type: ACTION_TYPE.ADD_TODO,
			payload: {
				id: NEW_TODO_ID,
				title: '',
				completed: false,
			}
		})

		dispatch({
			type: ACTION_TYPE.EDIT_TODO,
			payload: {
				id: NEW_TODO_ID,
				title: '',
			}
		})
	}

	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button  onClick={onAddTodo}>☝</Button>
		</div>
	)
}



// 		updateState({
// 			todos: [
// 				{
// 					id: NEW_TODO_ID,
// 					title: '',
// 					completed: false,
// 				},
// 			],
// 			editingTodo: {
// 				id: NEW_TODO_ID,
// 				title: '',
// 			},
// 		})

//https://www.w3schools.com/charsets/ref_utf_symbols.asp

