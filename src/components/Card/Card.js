import style from './card.module.scss'

const Card = ({
	greenbackgroundColor = false,
	paddingSmall = false,
	boxshadowSmall = false,
	center = false,
	children
}) => {
	return (
		<div
			className={`${style.card} ${greenbackgroundColor ? style.greenBackground : null} ${
				paddingSmall ? style.paddingSmall : null
			} ${boxshadowSmall ? style.boxshadowSmall : null} ${center ? style.center : null}`}
		>
			{children}
		</div>
	)
}

export default Card
