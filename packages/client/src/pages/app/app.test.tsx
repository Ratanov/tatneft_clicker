import { App } from './view'
import { render, screen } from '@testing-library/react'

const appContent = 'Вот тут будет жить кликер'

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
)

test('Example test', async () => {
  render(<App />)
  expect(screen.getByText(appContent)).toBeDefined()
})
