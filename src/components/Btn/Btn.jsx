import style from './Btn.module.scss'

const Btn = ({ contain, size, callback }) => {
	return (
		<button className={style[size]} onClick={callback}>
			{contain}
		</button>
	)
}

export default Btn
