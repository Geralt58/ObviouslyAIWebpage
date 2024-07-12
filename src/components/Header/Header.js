import style from './header.module.scss'
import { BiBell } from 'react-icons/bi'

const Header = () => {
	return (
		<ul className={style.header}>
			<li>
				<BiBell />
			</li>
			<li>Upgrade</li>
			<li>Sign out</li>
		</ul>
	)
}

export default Header
