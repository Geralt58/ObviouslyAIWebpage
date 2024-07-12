import profile from 'assets/profile.png'
import style from './profileCard.module.scss'

const ProfileCard = () => {
	return (
		<div className={style.profileCard}>
			<img src={profile} alt="pofilecard" />
			<div className={style.profileInfo}>
				<h6>Monica Greenleaf</h6>
				<p>Microsoft Inc.</p>
			</div>
			<p className={style.premiumBanner}>Premium</p>
		</div>
	)
}

export default ProfileCard
