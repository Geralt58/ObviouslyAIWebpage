import logo from 'assets/logo.png'
import style from './sidebar.module.scss'
import ProfileCard from 'components/Sidebar/ProfileCard/ProfileCard'
import { NavLink, useLocation } from 'react-router-dom'
import ExpandMenu from './ExpandMenu/ExpandMenu'

import { BsBinoculars } from 'react-icons/bs'
import { LuBook } from 'react-icons/lu'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdOutlineHelpOutline } from 'react-icons/md'
import { PiToggleLeft } from 'react-icons/pi'

const Sidebar = () => {
	const location = useLocation()

	return (
		<div className={style.sidebar}>
			<div className={style.sidebarSection}>
				<div className={style.header}>
					<img src={logo} alt="ObviouslyAI" />
					<PiToggleLeft size="28px" />
				</div>
				<ProfileCard />
				<ul className={style.menu}>
					<li>
						<BsBinoculars size="20px" /> Explore
					</li>
					<li>
						<LuBook size="20px" />
						Definitions
					</li>
					<NavLink to="/settings">
						{location.pathname === '/settings' ? (
							<li className={style.menuSelected}>
								<IoSettingsSharp size="22px" />
								Settings
							</li>
						) : (
							<li>
								<IoSettingsOutline size="22px" />
								Settings
							</li>
						)}
					</NavLink>
					<li>
						<MdOutlineHelpOutline size="22px" />
						Help
					</li>
				</ul>
			</div>
			<div className={style.sidebarSection}>
				<ExpandMenu
					header={'My Predictions'}
					expansionSubtext={'Click + to make your first Prediction...'}
					list={['MoM user churn for Q3', 'Merch sales for Jan', 'State-wise donor prediction']}
				/>
			</div>
			<div className={style.sidebarSection}>
				<ExpandMenu
					header={'My Datasets'}
					expansionSubtext={'Click + to make your first Dataset...'}
					list={['Twitch data', 'SLOBS user data', 'External CSV file']}
				/>
			</div>
		</div>
	)
}

export default Sidebar
