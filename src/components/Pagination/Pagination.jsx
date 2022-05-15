import Cards from '../Cards/Cards'
import { groupByContinent } from '../../helpers/groupBy/groupByContinent'
import { groupByLanguage } from '../../helpers/groupBy/groupByLanguage'

import { useState } from 'react'

export default function Pagination({ data, filterCountries, groupBy }) {
	const [page, setPage] = useState(1)
	const [countrieForPage] = useState(20)
	const indexLast = page * countrieForPage
	const indexFirst = indexLast - countrieForPage
	let groupCountries = []

	const countries =
		filterCountries.length > 0
			? filterCountries.slice(indexFirst, indexLast)
			: data.countries.slice(indexFirst, indexLast)

	if (groupBy === 'continent') {
		groupCountries = groupByContinent(countries)
	}
	if (groupBy === 'language') {
		groupCountries = groupByLanguage(countries)
	}

	const allCountries = filterCountries.length > 0 ? filterCountries : data

	return (
		<>
			{filterCountries.length === 0 ? (
				<h3>You must search a valid country</h3>
			) : (
				<Cards
					data={allCountries}
					countries={countries}
					groupCountries={groupCountries}
					setPage={setPage}
					countrieForPage={countrieForPage}
					groupBy={groupBy}
				/>
			)}
		</>
	)
}
