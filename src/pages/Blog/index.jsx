// styles
import './blog.css'

// data
import { dataBlog } from '../../data'

// components
import { Post } from '../../components/Post'

// componente basado en función
function Blog () {
  return (
    <main className='blog-page'>
      <section className='container'>
        <header className='blog-page-header my-4'>
          <h1 className='text-center'>Esta es la página del blog</h1>
        </header>
        <section className='blog-page-wrapper'>
          {dataBlog.map((post, id) => (
            <Post
              key={id}
              {...post}
            />
          ))}
        </section>
      </section>
    </main>
  )
}

// componente basado en función flecha
const ArrowBlogFunction = () => {
  return (
    <>
      <h1>Esta es la página del blog</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, assumenda!</p>
    </>
  )
}

export { Blog, ArrowBlogFunction }
