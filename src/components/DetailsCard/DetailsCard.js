import Card from 'components/Card/Card'
import style from './detailsCard.module.scss'
import { GiAstronautHelmet } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const DetailsCard = ({
	title = '',
	subtext = '',
	infoTypeButton = false,
	infoString = '',
	admin = false,
	remove = false
}) => {
	return (
		<Card paddingSmall>
			<div className={style.detailsCard}>
				<article>
					<h6>{title}</h6>
					<p>{subtext}</p>
				</article>
				{infoTypeButton ? (
					<div className={style.infoTypeButton}>
						<div className={style.option}>
							<GiAstronautHelmet color={admin ? '#10bf6e' : '#dddddd'} />
							<p style={{ color: admin ? '#10bf6e' : '#dddddd' }}>Admin</p>
						</div>
						<div className={style.option}>
							<RxCross2 color={remove ? 'red' : '#dddddd'} />
							<p style={{ color: remove ? 'red' : '#dddddd' }}>Remove</p>
						</div>
					</div>
				) : (
					<p>{infoString}</p>
				)}
			</div>
		</Card>
	)
}

export default DetailsCard
