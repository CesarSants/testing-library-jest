import { render, screen } from '@testing-library/react'
import Header from '..'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
