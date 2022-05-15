import Title from '../../components/Title/Title'
import Search from '../../components/SearchBar/SearchBar'

import style from './Home.module.scss'

import { useAllCountries } from '../../graphql/allCountries/useAllCountries'

const Home = () => {
	const { loading, data } = useAllCountries()

	return (
		<div className={style.container}>
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
