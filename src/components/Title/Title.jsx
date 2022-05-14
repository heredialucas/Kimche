import style from './Title.module.scss'

const Title = ({ size, contain }) => {
	return (
		<>
			<h1 className={style[size]}>{contain}</h1>
		</>
	)
}

export default Title
