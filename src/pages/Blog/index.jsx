import { useContext } from 'react'
import { Allcontext } from '../../context'

// styles
import './blog.css'

// data
import { dataBlog } from '../../data'

// components
import { Post } from '../../components/Post'

// componente basado en función
function Blog () {
  const { setLogin } = useContext(Allcontext)

  return (
    <main className='blog-page'>
      <section className='container'>
        <header className='blog-page-header my-4'>
          <h1 className='text-center'>Esta es la página del blog</h1>
        </header>
        <button onClick={() => setLogin(false)} className='btn btn-danger mb-3'>Cerrar Sesión</button>
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
export { Blog }
