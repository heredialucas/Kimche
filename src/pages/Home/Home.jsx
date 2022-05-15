import Title from '../../components/Title/Title'
import Search from '../../components/SearchBar/SearchBar'

import { useAllCountries } from '../../graphql/allCountries/useAllCountries'

const Home = () => {
	const { loading, data } = useAllCountries()

	return (
		<>
			<Title contain={'Country search'} size={'extralarge'} />
			<Search
				label={'Search countries'}
				type={'text'}
				data={data}
				loading={loading}
			/>
		</>
	)
}

export default Home
