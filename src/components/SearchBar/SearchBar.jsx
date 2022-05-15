import style from './SearchBar.module.scss'
import Pagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading'
import GroupCountries from '../GroupCountries/GroupCountries'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

const Search = ({ children, type, data, loading }) => {
	const [filterCountries, setFilterCountries] = useState('')
	const [groupBy, setGroupBy] = useState('')

	// SACAR AFUERA
	function handleInput(e) {
		e.target.value === ''
			? setGroupBy('')
			: setFilterCountries(
					data.countries.filter((countries) =>
						countries.name
							.toLowerCase()
							.trim()
							.includes(e.target.value.toLowerCase().trim())
					)
			  )
	}

	return (
		<>
			<div className={style.container}>
				<label className={style.label}>{children}</label>
				<div className={style.containerInput}>
					<FaSearch className={style.icon} />
					<input className={style.input} type={type} onChange={handleInput} />
				</div>
			</div>
			<GroupCountries setGroupBy={setGroupBy} />
			{loading ? (
				<Loading />
			) : (
				<Pagination
					data={data}
					filterCountries={filterCountries}
					groupBy={groupBy}
				/>
			)}
		</>
	)
}

export default Search
