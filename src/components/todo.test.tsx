import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import {TodoApp} from './todo'

afterEach(cleanup)
// tests
describe(`test the todo component`, () => {
  it(`should render the todos correctly`, () => {
    const { getByTestId } = render(<TodoApp />)
    const [ul, footer] = [
      getByTestId('todoList'),
      getByTestId('footer')
    ]

    expect(ul.children.length).toBe(4)
    expect(footer.textContent).toContain('3 / 4')
  })

  it(`should change footer text on toggle of list item`, () => {
    const { getByTestId } = render(<TodoApp />)
    const [ul, footer] = [
      getByTestId('todoList'),
      getByTestId('footer')
    ]

    fireEvent.click(ul.firstChild)
    expect(footer.textContent).toContain('4 / 4')
    fireEvent.click(ul.children[1])
    expect(footer.textContent).toContain('3 / 4')
  })
})
