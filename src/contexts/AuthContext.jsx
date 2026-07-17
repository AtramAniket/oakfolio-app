import { createContext, useContext } from 'react'

export const AuthContext = createContext(null);

export const useAuth = () => {
	
	const context = useContext(AuthContext)
	
	if(!context){
		throw new Error('Auth must be used withing AuthProvider')
	}

	return context
}