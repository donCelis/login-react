import imagePost from '../../assets/oppo-find-n-03.jpg'

function Post () {
  return (
    <article className='single-post row'>
      <aside className='col-4'>
        <figure>
          <img className='img-fluid' src={imagePost} alt='Texto alternativo' />
        </figure>
      </aside>
      <section className='col-8'>
        <header>
          <h2>Probamos el Oppo Find N: este es el mejor ejemplo de cómo deber ser un smartphone plegable</h2>
          <small>por <strong>Rubén Chicharro</strong> - <time>25 de enero de 2022</time></small>
        </header>
        <p className='mt-2'>Cuando Oppo anunció su primer plegable, el Oppo Find N, no pude evitar pensar que los smartphones con pantalla flexible —ahora sí que sí— habían llegado para quedarse. No solo porque su lanzamiento suponía el ingreso de un nuevo miembro a una cada vez más amplia categoría de producto, sino porque el fabricante asiático prometía […]</p>
      </section>
    </article>
  )
}
export { Post }
