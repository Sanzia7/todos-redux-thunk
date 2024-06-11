
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSortingAZ, selectSearchText, selectTodos } from '../selectors';
import { ControlTodo, Todo } from '../components';
import { readTodosAsync } from '../actions';
import styles from './app.module.css';


export const App = () => {

	const todos = useSelector(selectTodos)
	const searchText = useSelector(selectSearchText)
	const isSortingAZ = useSelector(selectIsSortingAZ)
	const dispatch = useDispatch()



	useEffect(() => {
		dispatch(readTodosAsync(searchText, isSortingAZ))
	}, [searchText, isSortingAZ])


	return (
		<div className={styles.app}>
			<h1>Todos React-Redux-Thunk</h1>
			<ControlTodo />
				<div className={styles.container}>
					{todos.map(({ id, title, completed }) => (
						<Todo
							key={id}
							id={id}
							title={title}
							completed={completed}
						/>
					))}
				</div>
		</div>
	)
}


