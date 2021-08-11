import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Email, Lock, Person } from '@material-ui/icons/'

import { SignUpContainer } from './styled'
import { Button } from '../../components/Button'
import { DataContext } from '../../context/globalState'
import { postData } from '../../utils/fetchData'
import { valid } from '../../utils/valid'

export default function SignIn() {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

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
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('user/register', userData)

    if (res.err)
      return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    router.push('/')
    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  return (
    <SignUpContainer>
      <h1>Crie sua conta</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <Person />
            <input
              id='name'
              placeholder='Seu Nome'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Email />
            <input
              id='email'
              placeholder='Seu E-mail'
              type='email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Lock />
            <input
              id='password'
              placeholder='Sua senha'
              type='password'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Lock />
            <input
              id='cf_password'
              placeholder='Confirme sua senha'
              type='password'
              name='cf_password'
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
        </section>

        <Button type='submit'>Cadastrar</Button>

        <div className='form-link'>
          <p>
            Já tem cadastro?
            <Link href='/signin'>
              <a>entrar</a>
            </Link>
          </p>
        </div>
      </form>
    </SignUpContainer>
  )
}
