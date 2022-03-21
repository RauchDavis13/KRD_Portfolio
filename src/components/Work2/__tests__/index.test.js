// __tests__/Work.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Work from '..'
const portrait = { name: "portraits", description: "Portraits of people in my life" };


afterEach(cleanup)

describe('Work component', () => {

  it('renders', () => {
    render(<Work currentCategory={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Work currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Work currentCategory={portrait} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})