import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export const useAuth = () => {
	
	const context = useContext(AuthContext)
	
	if(!context){
		throw new Error('Auth must be used withing AuthProvider')
	}

	return context
}

export default useAuth