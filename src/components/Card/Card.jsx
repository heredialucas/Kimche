const Card = ({ countrie }) => {
	return (
		<>
			{countrie && (
				<div>
					{countrie.name}
					{countrie.code}
				</div>
			)}
		</>
	)
}
export default Card
