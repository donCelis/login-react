import { useParams } from 'react-router-dom'

export const SinglePost = () => {
  const { title } = useParams()
  return (
    <article>
      <p>Single post</p>
      {title}
    </article>
  )
}
