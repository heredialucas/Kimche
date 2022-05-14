import style from './SearchBar.module.scss'
import { FaSearch } from 'react-icons/fa'

const Search = ({ children, type }) => {
	return (
		<div className={style.container}>
			<label className={style.label}>{children}</label>
			<div className={style.containerInput}>
				<FaSearch className={style.icon} />
				<input className={style.input} type={type} />
			</div>
		</div>
	)
}

export default Search
