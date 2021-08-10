import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Shop } from '../components/Shop'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get('refreshtoken')

    if (!token) {
      router.replace('/signin')
    }
  }, [])

  return (
    <div>
      <Shop />
    </div>
  )
}
