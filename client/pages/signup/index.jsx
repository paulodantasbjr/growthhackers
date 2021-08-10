import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'

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
      <div>
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <div className='form-field'>
            <input
              label='Digite seu nome*'
              id='name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <input
              label='Digite seu e-mail*'
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
              type='password'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <input
              label='Confirme sua senha*'
              id='cf_password'
              type='password'
              name='cf_password'
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
          <div className='form-field'>
            <Button type='submit'>Cadastrar</Button>
          </div>
          <div className='form-link'>
            <p>
              Já tem cadastro?
              <span>
                <Link href='/signin'>
                  <a>clique aqui</a>
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </SignUpContainer>
  )
}
