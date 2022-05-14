import Title from '../../components/Title/Title'
import Search from '../../components/SearchBar/SearchBar'
import Sort from '../../components/Sort/Sort'
import Card from '../../components/Card/Card'
import { useAllCountries } from '../../graphql/allCountries/useAllCountries'

const Home = () => {
	const result = useAllCountries()

	console.log(result)

	return (
		<>
			<Title contain={'Country search'} size={'extralarge'} />
			<Search label={'Search countries'} type={'text'} />
			<Sort />
			<Card />
		</>
	)
}

export default Home
