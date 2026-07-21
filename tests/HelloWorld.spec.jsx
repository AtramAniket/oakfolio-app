import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import LandingPage from '../src/pages/public/LandingPage'

test('renders page name', async ()=>{
	const {getByText} = await render(<LandingPage />)

	await expect.element(getByText('Landing Page')).toBeInTheDocument()
})