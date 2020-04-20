import { render } from '@testing-library/svelte'
import Header from '../../components/Header.svelte';

describe('Header component', () => {
  const { getByTestId } = render(Header)
  const header = getByTestId('Header')

  it('It renders the header!', () => {
    expect(header).toBeInTheDocument()
  })

  it('Check the logo', () => {
    const logo = header.getElementsByTagName('h1')[0]
    expect(logo).toHaveTextContent('Pugstagram')
  })
  
  it('Check the likes icon', () => {
    const likes = header.getElementsByTagName('i')[0]
    expect(likes).toHaveClass('fas fa-heart')
  })
  
  it('Check the followers icon', () => {
    const followers = header.getElementsByTagName('i')[1]
    expect(followers).toHaveClass('fas fa-user-alt')
  })
})

describe('Header SnapShot', () => {
  test('Check the Snapshot of the Header', () => {
    const { getByTestId } = render(Header)
    const header = getByTestId('Header')
    expect(JSON.stringify(header)).toMatchSnapshot()
  })
})