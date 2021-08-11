import { postProductData } from '../utils/fetchData'

export const actions = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
}

export const addToFavorite = async (item, user, dispatch) => {
  dispatch({ type: 'NOTIFY', payload: { loading: true } })
  const newFavorites = {
    category: item.category,
    checked: true,
    description: item.description,
    image: item.image,
    title: item.title,
  }
  const newUser = {
    email: user.email,
    favorites: newFavorites,
  }
  const res = await postProductData('user/favorites', newUser)

  if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

  dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  dispatch({ type: 'NOTIFY', payload: {} })
}
