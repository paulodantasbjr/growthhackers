import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { Email, Lock } from '@material-ui/icons/'

import { SignInContainer } from './styled'
import { DataContext } from '../../context/globalState'
import { Button } from '../../components/Button'
import { postData } from '../../utils/fetchData'

export default function SignIn() {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('user/login', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.access_token,
        user: res.user,
      },
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'user/refresh_token',
      expires: 7,
    })

    localStorage.setItem('firstLogin', true)
    router.push('/')
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  return (
    <SignInContainer>
      <h1>Faça seu login na plataforma</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <Email />
            <input
              id='email'
              placeholder='E-mail'
              name='email'
              type='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Lock />
            <input
              id='password'
              placeholder='Senha'
              name='password'
              type='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
        </section>

        <Button type='submit'>Entrar</Button>

        <div className='form-link'>
          <p>
            Não tem cadastro?
            <Link href='/signup'>
              <a>Registre-se</a>
            </Link>
          </p>
        </div>
      </form>
    </SignInContainer>
  )
}
