import { useDispatch, useSelector } from 'react-redux'
import { selectIsSortingAZ } from '../../../../selectors'
import { ACTION_TYPE } from '../../../../actions/action-type'
import { Button } from '../../../button/button'
import styles from './sorting.module.css'

export const Sorting = () => {
	const isSortingAZ = useSelector(selectIsSortingAZ)
	const dispatch = useDispatch()

	const onChange = ({ target }) => {
		dispatch({
			type: ACTION_TYPE.SET_IS_SORTING_AZ,
			payload: target.checked,
		})
	}

	return (
		<Button>
			<input
				className={styles.checkbox}
				id="sorting-btn"
				type="checkbox"
				checked={isSortingAZ}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-btn">
				A&darr;
			</label>
		</Button>
	)
}

