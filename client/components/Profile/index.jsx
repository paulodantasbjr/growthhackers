import { ProfileContainer } from './styled'

export const Profile = () => {
  return (
    <ProfileContainer>
      <div className='left-container'>
        <p>
          Bem vindo(a),<span>Paulo</span>
        </p>
      </div>
      <div className='right-container'>
        <img src='/assets/img/user.png' alt='profile' />
      </div>
    </ProfileContainer>
  )
}
