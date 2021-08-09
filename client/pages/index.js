import Cookie from 'js-cookie'

import SignIn from './signin'
import { Shop } from '../components/Shop'

export default function Home() {
  return <div>{!Cookie.get('refreshtoken') ? <SignIn /> : <Shop />}</div>
}
