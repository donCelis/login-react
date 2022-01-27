import imageDefault from '../../assets/imageDeafult.jpg'

function Post ({ ...props }) {
  const { photo = imageDefault, title = 'Sin título', author = 'Jhon Doe', dateTime = '', content = 'Sin contenido' } = props

  return (
    <article className='single-post row'>
      <aside className='col-4'>
        <figure>
          <img className='img-fluid' src={photo} alt='Texto alternativo' />
        </figure>
      </aside>
      <section className='col-8'>
        <header>
          <h2>{title}</h2>
          <small>por <strong>{author}</strong> - <time>{dateTime}</time></small>
        </header>
        <p className='mt-2'>{content}</p>
      </section>
    </article>
  )
}
export { Post }
