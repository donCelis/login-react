const userNameBase = 'Carlos'

// componente basado en función
function Blog () {
  return (
    <h1>Esta es la página del blog, {userNameBase}</h1>
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

export { Blog, ArrowBlogFunction, userNameBase }
