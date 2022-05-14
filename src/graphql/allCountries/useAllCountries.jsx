import { useQuery } from '@apollo/client'
import { ALL_COUNTRIES } from './queriesAllCountries'

export const useAllCountries = () => {
	const result = useQuery(ALL_COUNTRIES)
	return result
}
