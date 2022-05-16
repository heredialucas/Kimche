import style from './Detail.module.scss'
import Loading from '../../components/Loading/Loading'
import Blob from '../../assets/imgs/blob.svg'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFindCountry } from '../../graphql/findCountry/useFindCountry'
const Detail = () => {
	const { code } = useParams()

	// POSIBLE CUSTOM HOOK
	const [detail, setDetail] = useState(null)
	console.log(detail)
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
				<div className={style.container}>
					<img className={style.blobOne} src={Blob} alt="Blob" />
					<img className={style.blobTwo} src={Blob} alt="Blob" />
					<h1>{detail.name}</h1>
					<div className={style.containerItems}>
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
					</div>
					<div className={style.containerStates}>
						<h2>States:</h2>
						<ul>
							{detail.states.map((state, index) => (
								<li key={index}>
									{state.name}
									<br />
								</li>
							))}
							{detail.states.length === 0 && <li>No states</li>}
						</ul>
					</div>
					<Link className={style.btn} to="/">
						Back
					</Link>
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
export default Detail
