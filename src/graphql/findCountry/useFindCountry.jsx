import { useLazyQuery } from '@apollo/client'
import { FIND_COUNTRY } from './queriesFindCountry'
import { useState, useEffect } from 'react'

export const useFindCountry = (code) => {
	const [findCountry, result] = useLazyQuery(FIND_COUNTRY)
	const [detail, setDetail] = useState(null)

	useEffect(() => {
		findCountry({ variables: { code } })
	}, [code])

	useEffect(() => {
		if (result.data) {
			setDetail(result.data.country)
		}
	}, [result])

	return detail
}
