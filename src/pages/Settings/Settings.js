import Header from 'components/Header/Header'
import style from './settings.module.scss'

import { ReactComponent as Logo } from 'assets/group.svg'
import Card from 'components/Card/Card'
import InputElement from 'components/InputElement/InputElement'
import DetailsCard from 'components/DetailsCard/DetailsCard'

import { HiPlus } from 'react-icons/hi'

const Settings = () => {
	return (
		<div className={style.settings}>
			<Logo />
			<Header />
			<div className={style.article}>
				<h1>All your</h1>
				<h1>settings in one place</h1>
				<p>Manage account details, billing and users.</p>
			</div>
			<form className={style.inputForm}>
				<div className={style.cardGrid}>
					<Card>
						<InputElement header={'Name'} inputText={'Monica Greenleaf'} />
					</Card>
					<Card>
						<InputElement header={'Company'} inputText={'Microsoft, Inc.'} />
					</Card>
					<Card>
						<InputElement header={'Email'} inputText={'monica.greenleaf@microsoft.com'} />
					</Card>
					<Card>
						<InputElement header={'Current password'} type={'password'} inputText={'Microsoft, Inc.'} />
					</Card>
					<Card>
						<InputElement header={'New password'} type={'password'} inputText={'Microsoft, Inc.'} />
					</Card>
					<Card>
						<InputElement header={'Repeat password'} type={'password'} inputText={'Microsoft, Inc.'} />
					</Card>
					<Card>
						<InputElement header={'Card number'} inputText={'1234-5678-9101-1121'} />
					</Card>
					<Card>
						<InputElement header={'Expiration'} inputText={'10/22'} />
					</Card>
					<div>
						<Card>
							<InputElement header={'CVV'} inputText={'240'} />
						</Card>
						<Card>
							<InputElement header={'ZIP'} inputText={'01002'} />
						</Card>
					</div>
					<Card>
						<div className={style.multiOptionCard}>
							<div>
								<h4>Membership</h4>
								<p>Switch to another plan or cancel membership.</p>
							</div>
							<div className={style.dataSelection}>
								<div className={style.currentPlan}>
									<h5>Current plan</h5>
									<DetailsCard
										title="Premium"
										subtext="Supports 10M rows of data + 5 free user seats"
										infoString="$799 /mo"
									/>
								</div>
								<div className={style.otherPlans}>
									<h5>Other plans</h5>
									<div className={style.otherPlansCards}>
										<DetailsCard
											title="Basic"
											subtext="Supports 500K rows of data + 1 free user seat"
											infoString="$299 /mo"
										/>
										<DetailsCard
											title="Standard"
											subtext="Supports 5M rows of data + 3 free user seats"
											infoString="$499 /mo"
										/>
									</div>
								</div>
							</div>
							<footer>
								To cancel membership email us at <a href="mailto:info@obviously.ai">info@obviously.ai.</a>
							</footer>
						</div>
					</Card>
					<Card>
						<div className={style.multiOptionCard}>
							<div>
								<h4>User seats</h4>
								<p>Invite another user from your company to Obviously AI.</p>
								<div className={style.inviteUser}>
									<Card paddingSmall boxshadowSmall>
										<InputElement header={'Name'} inputText={'Dwayne “The Rock” Johnson'} sizeSmall />
									</Card>
									<Card paddingSmall boxshadowSmall>
										<InputElement
											header={'Email'}
											inputText={'dwayne.the.rock.johnson@microsoft.com'}
											sizeSmall
										/>
									</Card>
									<Card paddingSmall boxshadowSmall center>
										<HiPlus size={20} />
									</Card>
								</div>
								<div className={style.dataSelection}>
									<h5>Existing users</h5>
									<div className={style.existingusersCard}>
										<DetailsCard
											title="Monica Greenleaf"
											subtext="monica.greenleaf@microsoft.com"
											infoTypeButton
											admin
										/>
										<DetailsCard
											title="John Wick"
											subtext="john.wick@microsoft.com"
											infoTypeButton
											admin
											remove
										/>
										<DetailsCard
											title="Tom Cruise"
											subtext="tom.cruise@microsoft.com"
											infoTypeButton
											remove
										/>
										<DetailsCard
											title="Emma Stone"
											subtext="emma.stone@microsoft.com"
											infoTypeButton
											remove
										/>
									</div>
								</div>
							</div>
							<footer>
								You have 1 of 5 free seats left. Your card will be charged $10 /mo for each additional user
								thereon
							</footer>
						</div>
					</Card>
					<button>Update all settings</button>
				</div>
			</form>
		</div>
	)
}

export default Settings
