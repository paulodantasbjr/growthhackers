import Link from 'next/link'

import { ProfileContainer } from './styled'

export const Profile = ({ auth }) => {
  return (
    <ProfileContainer>
      <div className='left-container'>
        <p>
          Bem vindo(a),
          <span>paulo</span>
        </p>
      </div>
      <div className='right-container'>
        <img src='/assets/img/user.png' alt='profile' />
      </div>
    </ProfileContainer>
  )
}
