import style from './GroupCountries.module.scss'

const GroupCountries = ({ setGroupBy, groupBy }) => {
	function setContinent() {
		setGroupBy('continent')
	}

	function setLanguage() {
		setGroupBy('language')
	}
	function setClear() {
		setGroupBy('')
	}
	return (
		<div className={style.container}>
			<h2>Group by</h2>
			<button
				className={groupBy === 'continent' ? style.btnOn : style.btnOff}
				contain={'Continent'}
				size={'large'}
				onClick={setContinent}
			>
				Continent
			</button>
			<button
				className={groupBy === 'language' ? style.btnOn : style.btnOff}
				contain={'Continent'}
				size={'large'}
				onClick={setLanguage}
			>
				Language
			</button>
			<button
				className={groupBy === '' ? style.btnOn : style.btnOff}
				contain={'Clear'}
				size={'large'}
				onClick={setClear}
			>
				Clear
			</button>
		</div>
	)
}
export default GroupCountries
