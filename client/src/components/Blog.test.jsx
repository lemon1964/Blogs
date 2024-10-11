import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Blog from './Blog'
import store from '../store'

test('renders title, author, url and likes by default', () => {
  const blog = {
    title: 'title testing',
    author: 'author testing',
    url: 'www.testing.com',
    likes: 5,
    comments: []
  }

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Blog blog={blog} />
      </MemoryRouter>
    </Provider>
  )

  const titleElement = screen.getByText('title testing', { exact: false })
  expect(titleElement).toBeInTheDocument()

  const authorElement = screen.getByText('author testing', { exact: false })
  expect(authorElement).toBeInTheDocument()

  const urlElement = screen.getByText(blog.url, { exact: false })
  expect(urlElement).toBeVisible()

  const likesElement = screen.getByText(`${blog.likes} likes`, { exact: false })
  expect(likesElement).toBeVisible()
})
