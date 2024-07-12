import Header from 'components/Header/Header'
import style from './addDatasets.module.scss'
import InputElement from 'components/InputElement/InputElement'
import Card from 'components/Card/Card'
import { ReactComponent as Logo } from 'assets/group2.svg'
import { BsDatabase } from 'react-icons/bs'
import { useState } from 'react'

const AddDatasets = () => {
	const [database, setDatabase] = useState('MySQL')

	return (
		<div className={style.addDatasets}>
			<Logo />
			<Header />
			<div className={style.article}>
				<h1>Add datasets</h1>
				<h1>to your Obviously account.</h1>
				<p>Add dataset for making predictions. We don’t and will never store your data.</p>
			</div>
			<div className={style.uploadFile}>
				<h3>Upload a file</h3>
				<button>Upload a CSV</button>
			</div>
			<div className={style.orDivider}>
				<div className={style.border} />
				<span className={style.content}>OR</span>
				<div className={style.border} />
			</div>
			<div className={style.connectDatabase}>
				<h3>Connect a database</h3>
				<p>
					In order to ensure Obviously AI has access to your database, please whitelist our IP address{' '}
					<span>104.198.187.43</span> on your database firewall.
				</p>
				<form className={style.inputForm}>
					<div className={style.databaseType}>
						<label htmlFor="MySQL">
							<Card greenbackgroundColor={database === 'MySQL' ? true : false}>
								<div className={style.radioLabel}>
									<BsDatabase size={'72px'} />
									MySQL
								</div>
							</Card>
						</label>
						<input
							type="radio"
							name="databaseType"
							id="MySQL"
							value={'MySQL'}
							onChange={(e) => setDatabase(e.target.value)}
							defaultChecked
						/>
						<label htmlFor="PostgreSQL" className={database === 'PostgreSQL' ? style.activeLabel : null}>
							<Card greenbackgroundColor={database === 'PostgreSQL' ? true : false}>
								<div className={style.radioLabel}>
									<BsDatabase size={'72px'} />
									PostgreSQL
								</div>
							</Card>
						</label>
						<input
							type="radio"
							name="databaseType"
							value={'PostgreSQL'}
							id="PostgreSQL"
							onChange={(e) => setDatabase(e.target.value)}
						/>
					</div>
					<div className={style.cardGrid}>
						<Card>
							<InputElement header={'Display name'} inputText={'monica.greenleaf@microsoft.com'} />
						</Card>
						<Card>
							<InputElement header={'Description'} inputText={'Monica Greenleaf'} />
						</Card>
						<Card>
							<InputElement header={'Host'} inputText={'Monica Greenleaf'} />
						</Card>
						<Card>
							<InputElement header={'Port'} inputText={'monica.greenleaf@microsoft.com'} />
						</Card>
						<Card>
							<InputElement header={'Username'} inputText={'Monica Greenleaf'} />
						</Card>
						<Card>
							<InputElement header={'Password'} inputText={'Microsoft, Inc.'} />
						</Card>
						<Card>
							<InputElement header={'Database'} inputText={'monica.greenleaf@microsoft.com'} />
						</Card>
						<button>Add this database</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddDatasets
