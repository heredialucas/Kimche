import { useLazyQuery } from '@apollo/client'
import { FIND_COUNTRY } from './queriesFindCountry'

export const useFindCountry = () => {
	const [findCountry, result] = useLazyQuery(FIND_COUNTRY)
	return {
		findCountry,
		result,
	}
}
