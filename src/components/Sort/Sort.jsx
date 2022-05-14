import style from './Sort.module.scss'

import Btn from '../Btn/Btn'

import { sortByContinent } from '../../helpers/sort/sortByContinent'
import { sortByLanguage } from '../../helpers/sort/sortByLanguage'

const Sort = () => {
	return (
		<div className={style.container}>
			<h2>Group by</h2>
			<Btn contain={'Continent'} size={'large'} callback={sortByContinent} />
			<Btn contain={'Language'} size={'large'} callback={sortByLanguage} />
		</div>
	)
}
export default Sort
