import { createContext, useReducer, useEffect } from 'react'
import { reducers } from './reducers'
import { getData } from '../utils/fetchData'
import Cookies from 'js-cookie'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    auth: {},
  }

  const [state, dispatch] = useReducer(reducers, initialState)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    const token = Cookies.get('refreshtoken')
    if (firstLogin && token) {
      dispatch({ type: 'NOTIFY', payload: { loading: true } })
      const fetchData = async () => {
        const res = await getData('user/refresh_token', token)
        dispatch({
          type: 'AUTH',
          payload: {
            user: res.user,
          },
        })
        dispatch({ type: 'NOTIFY', payload: {} })
        if (res.err) {
          localStorage.removeItem('firstLogin')
          dispatch({ type: 'NOTIFY', payload: { error: err.msg } })
          Cookies.remove('refreshtoken')
        }
      }
      fetchData()
    }
  }, [])

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
