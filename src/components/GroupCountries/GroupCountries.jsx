import style from './GroupCountries.module.scss'

const GroupCountries = ({ setGroupBy }) => {
	function setContinent() {
		setGroupBy('continent')
	}

	function setLanguage() {
		setGroupBy('language')
	}
	return (
		<div className={style.container}>
			<h2>Group by</h2>
			<button contain={'Continent'} size={'large'} onClick={setContinent}>
				Continent
			</button>
			<button contain={'Continent'} size={'large'} onClick={setLanguage}>
				Language
			</button>
		</div>
	)
}
export default GroupCountries
