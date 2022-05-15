import style from './Cards.module.scss'
import Card from '../Card/Card'

const Cards = ({
	countries,
	setPage,
	countrieForPage,
	data,
	groupCountries,
}) => {
	// SACAR AFUERA
	const countriesLength = data?.length
	const pagesNumber = []
	function onPage(value) {
		setPage(value)
	}
	for (let i = 1; i <= Math.ceil(countriesLength / countrieForPage); i++) {
		pagesNumber.push(i)
	}

	return (
		<>
			<div className={style.containerPagination}>
				{pagesNumber.map((value, index) => {
					return (
						<div onClick={() => onPage(value)} className="btn" key={index}>
							<button className="button" onClick={() => onPage(value)}>
								{value}
							</button>
						</div>
					)
				})}
			</div>
			<div className={style.containerCards}>
				{groupCountries?.length > 0
					? groupCountries.map((groupCountry, index) => {
							return (
								<div className={style.containerGroup} key={index}>
									<h2>{groupCountry[0]}</h2>
									{groupCountry[1]?.map((country) => {
										return <Card key={country.code} country={country} />
									})}
								</div>
							)
					  })
					: countries.map((country) => {
							return <Card key={country.code} country={country} />
					  })}
			</div>
		</>
	)
}
export default Cards
