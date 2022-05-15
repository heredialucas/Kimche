import { groupBy } from 'lodash'

export const groupByLanguage = (data) => {
	const groupCountries = groupBy(data, (country) =>
		country.languages.map((language) => language.name)
	)
	return Object.entries(groupCountries)
}
