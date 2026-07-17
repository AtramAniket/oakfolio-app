import { useMemo, useState } from 'react'

import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
	
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const isAuthenticated = !user

	const value = useMemo(
		() => ({
			user,
			setUser,
			loading,
			setLoading,
			isAuthenticated,
		}),
		[user, loading]
	)

	return(
		<AuthContext.Provider value={value}>
			{ children }
		</AuthContext.Provider>
		)

}

export default AuthProvider