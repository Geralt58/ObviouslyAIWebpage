import { useState } from 'react'
import style from './expandMenu.module.scss'
import { CiCirclePlus } from 'react-icons/ci'
import { CiCircleMinus } from 'react-icons/ci'

const ExpandMenu = ({ header, expansionSubtext, list }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={style.expandMenu}>
			<div className={style.expandMenuHeader}>
				<h4>{header}</h4>
				<button className={style.toggleButton} onClick={toggleExpansion}>
					{isExpanded ? <CiCircleMinus size="20px" /> : <CiCirclePlus size="20px" />}
				</button>
			</div>
			{isExpanded && (
				<ul className={style.expandMenuList}>
					{list.map((option, key) => (
						<li key={key}>{option}</li>
					))}
					<li className={style.showAll}>Show all</li>
				</ul>
			)}
			{!isExpanded && (
				<div className={style.unExpandedText}>
					<p>{expansionSubtext}</p>
				</div>
			)}
		</div>
	)
}

export default ExpandMenu
