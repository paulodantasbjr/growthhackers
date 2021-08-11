import Link from 'next/link'
import { useRouter } from 'next/router'

import Cookies from 'js-cookie'

import { ProfileContainer } from './styled'

export const Profile = ({ auth, dispatch }) => {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('refreshtoken', { path: 'user/refresh_token' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Desconectado!' } })
    return router.push('/')
  }

  return (
    <ProfileContainer>
      {!auth ? (
        <div className='left-container'>
          <p>
            Faca
            <span>
              <Link href='/signin'>
                <a> login </a>
              </Link>
            </span>
            para continuar
          </p>
        </div>
      ) : (
        <>
          <div className='left-container'>
            <div>
              <p>
                Bem vindo(a),
                <span>{auth.user?.name}</span>
              </p>
            </div>
            <div>
              <button onClick={handleLogout}>Sair</button>
            </div>
          </div>
          <div className='right-container'>
            <img src='/assets/img/user.png' alt='profile' />
          </div>
        </>
      )}
    </ProfileContainer>
  )
}
