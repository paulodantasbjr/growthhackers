import Link from 'next/link'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'

import { SignInContainer } from './styled'
import { DataContext } from '../../context/userContext/userState'
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

    if (res.title == 'error')
      return dispatch({ type: 'NOTIFY', payload: { error: res.msg } })

    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH',
      payload: {
        token: res.accesstoken,
        user: res.user,
      },
    })

    Cookie.set('refreshtoken', res.refreshtoken, {
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
      <div>
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='form-field'>
            <input
              label='Digite seu e-mail*'
              name='email'
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <input
              label='Digite sua senha*'
              id='password'
              name='password'
              type='password'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <Button type='submit'>Entrar</Button>
          </div>
          <div className='form-link'>
            <p>
              Não tem cadastro?
              <span>
                <Link href='/signup'>
                  <a>clique aqui</a>
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </SignInContainer>
  )
}
