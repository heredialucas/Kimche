import { groupBy } from 'lodash'

export const groupByContinent = (data) => {
	const groupCountries = groupBy(data, (country) => country.continent.name)
	return Object.entries(groupCountries)
}
