import { describe, expect, it } from 'vitest'
import data from '../data.json'
import App from './index.jsx'

import {
  render,
  screen,
  fireEvent
} from '@testing-library/react'

describe('general functionalities', () => {
  it('renders without crashing', () => {
    render(<App data={data} />)
  })

  it('renders the user location', () => {
    render(<App data={data} />)
    const userLocation = screen.getByText(/villa park, england/i)
    expect(userLocation).toBeInTheDocument()
  })

  it('renders the post caption', () => {
    render(<App data={data} />)
    const caption = screen.getByText(/there really is no better sight/i)
    expect(caption).toBeInTheDocument()
  })

  it('renders the post image', () => {
    render(<App data={data} />)
    const image = screen.getByTestId('post-image')
    expect(image).toBeInTheDocument()
  })
})

describe('comments section', () => {
  it('loads comments section', () => {
    render(<App data={data} />)
    const comments = screen.getByTestId('comments-section')
    expect(comments).toBeInTheDocument()
  })

  it('counts comments from data and checks they are all there', () => {
    render(<App data={data} />)
    const numberOfCommentsInData = data.edge_media_to_comment.edges.length // 22
    const numberOfCommentsInPage = screen.getAllByTestId('single-comment')
    expect(numberOfCommentsInPage.length).toBe(numberOfCommentsInData)
  })

  it('activates like button with click', () => {
    render(<App data={data} />)
    const allUnliked = screen.getAllByTestId('unliked-icon')
    fireEvent.click(allUnliked[8]) // random one
    const liked = screen.getByTestId('liked-icon')
    expect(liked).toBeInTheDocument()
  })

  it('activates multiple like button with clicks', () => {
    render(<App data={data} />)
    const allUnliked = screen.getAllByTestId('unliked-icon')
    fireEvent.click(allUnliked[5]) // random one
    fireEvent.click(allUnliked[10]) // random one
    fireEvent.click(allUnliked[15]) // random one
    const allLiked = screen.getAllByTestId('liked-icon')
    expect(allLiked.length).toBe(3)
  })
})

describe('footer section', () => {
  it('activates big like button with click', () => {
    render(<App data={data} />)
    const allUnliked = screen.getAllByTestId('unliked-icon')
    fireEvent.click(allUnliked[22]) // last one
    const liked = screen.getByTestId('liked-icon')
    expect(liked).toBeInTheDocument()
  })
})
