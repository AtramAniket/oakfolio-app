import { useMemo, useState, useEffect } from 'react'

import authService from '@/services/authService'
import { AuthContext } from '@/contexts/AuthContext'

const AuthProvider = ({ children }) => {
	
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const isAuthenticated = !!user

	const clearAuth = () => {
		localStorage.removeItem('access_token')
		setUser(null)
	}

	const refreshUser = async () => {
		const token = localStorage.getItem('access_token')

		if(!token){
			clearAuth()
			return null
		}

		setLoading(true)

		try{
			const currentUser = await authService.getCurrentUser()

			setUser(currentUser)

			return currentUser
		}
		catch(err){
			clearAuth()
			throw err
		}
		finally{
			setLoading(false)
		}	
	}


	const login = async (data) => {
		setLoading(true)

		try{
			const response = await authService.login(data)

			localStorage.setItem('access_token', response.access_token)

			return await refreshUser()
			
		}
		catch(err){
			clearAuth()
			throw err
		}
		finally{
			setLoading(false)
		}
	}


	const logout = () => {
		clearAuth()
	}


	const hydrateUser = async () => {
		try{
			await refreshUser()
		}
		catch(err){
			// later add something specific here
		}
	}



	// Hydrate user details when component mounts
	useEffect(() => {
		hydrateUser()
	}, [])



	const value = useMemo(
		() => ({
			user,
			login,
			logout,
			loading,
			refreshUser,
			isAuthenticated,
		}),
		[user, loading, refreshUser]
	)

	return(
		<AuthContext.Provider value={value}>
			{ children }
		</AuthContext.Provider>
		)

}

export default AuthProvider