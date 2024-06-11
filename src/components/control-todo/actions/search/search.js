import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchInput } from '../../../../selectors'
import { ACTION_TYPE } from '../../../../actions'
import { debounce } from './utils-search'
import { Button } from '../../../button/button'
import styles from './search.module.css'

export const Search = () => {
	const searchInput = useSelector(selectSearchInput)
	const dispatch = useDispatch()

    const runSearch = (text) => {
		dispatch({
			type: ACTION_TYPE.SET_SEARCH_TEXT,
			payload: text,
		})
	}

	const debouncedRunSearch = useRef(debounce(runSearch, 2000)).current

	const onChange = ({ target }) => {
		dispatch({
			type: ACTION_TYPE.SET_SEARCH_INPUT,
			payload: target.value,
		})
		debouncedRunSearch(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		runSearch(searchInput)
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<input
				className={styles.search}
				type="text"
				placeholder="debounced searching ..."
				value={searchInput}
				onChange={onChange}
			/>
				<Button type="submit">🧐</Button>
		</form>

	)
}
