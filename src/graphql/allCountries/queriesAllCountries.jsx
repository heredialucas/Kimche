import { gql } from '@apollo/client'

export const ALL_COUNTRIES = gql`
	query allCountries {
		countries {
			name
			code
		}
	}
`
