import Title from '../../components/Title/Title'
import Search from '../../components/SearchBar/SearchBar'

import style from './Home.module.scss'
import Blob from '../../assets/imgs/blob.svg'

import { useAllCountries } from '../../graphql/allCountries/useAllCountries'

const Home = () => {
	const { loading, data } = useAllCountries()

	return (
		<div className={style.container}>
			<img className={style.blobOne} src={Blob} alt="Blob" />
			<img className={style.blobTwo} src={Blob} alt="Blob" />
			<Title contain={'Country search'} size={'extralarge'} />
			<Search
				label={'Search countries'}
				type={'text'}
				data={data}
				loading={loading}
			/>
		</div>
	)
}

export default Home
