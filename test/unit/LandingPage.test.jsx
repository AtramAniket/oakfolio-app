import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LandingPage from '@/pages/public/LandingPage'

test('Display landing page name', async ()=>{
	const { getByText } = await render(<LandingPage />)
	expect(getByText("Landing Page")).toBeInTheDocument()
})