import Loading from '../../components/Loading/Loading'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFindCountry } from '../../graphql/findCountry/useFindCountry'
const Detail = () => {
	const { code } = useParams()

	// POSIBLE CUSTOM HOOK
	const [detail, setDetail] = useState(null)
	const { findCountry, result } = useFindCountry()

	useEffect(() => {
		if (code && findCountry) {
			findCountry({ variables: { code } })
		}
	}, [code, findCountry])

	useEffect(() => {
		if (result.data) {
			setDetail(result.data.country)
		}
	}, [result])

	return (
		<>
			{detail ? (
				<div>
					<h1>{detail.name}</h1>
					<div>
						<h2>Capital:</h2>
						<span>{detail.capital}</span>
					</div>
					<div>
						<h2>Moneda:</h2>
						<span>{detail.currency}</span>
					</div>
					<div>
						<h2>Continent:</h2>
						<span>{detail.continent.name}</span>
					</div>
					<div>
						<h2>Lenguajes:</h2>
						<ul>
							{detail.languages.map((language) => (
								<li key={language.name}>{language.name}</li>
							))}
						</ul>
					</div>
					<div>
						<h2>States:</h2>
						<span>
							{detail.states.map((state, index) => (
								<span key={index}>{state.name}</span>
							))}
						</span>
					</div>
				</div>
			) : (
				<Loading />
			)}
			<Link to="/">Back</Link>
		</>
	)
}
export default Detail
