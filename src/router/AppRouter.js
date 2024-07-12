import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from 'components/Sidebar/Sidebar'
import AddDatasets from 'pages/AddDatasets/AddDatasets'
import Settings from 'pages/Settings/Settings'

const AppRouter = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true)
	const [isHamburgerVisible, setIsHamburgerVisible] = useState(false)

	const handleResize = () => {
		if (window.innerWidth <= 1250) {
			setIsSidebarVisible(false)
			setIsHamburgerVisible(true)
		} else {
			setIsSidebarVisible(true)
			setIsHamburgerVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize() // Initial check

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible)
	}
	return (
		<BrowserRouter>
			{isHamburgerVisible && (
				<button className="hamburger" onClick={toggleSidebar}>
					☰
				</button>
			)}
			{isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} isHamburgerVisible={isHamburgerVisible} />}
			<Routes>
				<Route path="/" element={<Navigate to="/add-dataset" />} exact />
				<Route path="/add-dataset" element={<AddDatasets />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
