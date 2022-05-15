import React from 'react'
import style from './Loading.module.scss'

const Loading = () => {
	return (
		<div className={style.container}>
			<div className={style.TextLoading}>LOADING</div>
			<div className={style.CircleLoading}></div>
		</div>
	)
}

export default Loading
