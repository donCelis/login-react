import { useContext } from 'react'
import { Allcontext } from '../../context'

const userAdmin = {
  user: 'carlos',
  pass: 'carlos123'
}

const Login = () => {
  const { handleLogin, isLogin } = useContext(Allcontext)
  console.log(isLogin)
  const submitForm = (event) => {
    event.preventDefault()
    const { userName, userPass } = event.currentTarget

    const validateForm = userName.value === userAdmin.user && userPass.value === userAdmin.pass

    if (validateForm) {
      // login
      handleLogin(true)
    } else {
      // error
      console.log('Datos incorrectos')
    }
  }

  return (
    <form onSubmit={submitForm} className='mt-4' style={{ width: '30rem', margin: '0 auto' }}>
      <p className='text-center'>Inicio de sesión</p>
      <div className='mb-3'>
        <input name='userName' className='form-control' type='text' placeholder='Usario' required />
      </div>
      <div className='mb-3'>
        <input name='userPass' className='form-control' type='password' placeholder='Contraseña' required />
      </div>
      <button className='btn btn-success w-100'>Iniciar sesión</button>
    </form>
  )
}

export { Login }
