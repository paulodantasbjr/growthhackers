import { postProductData, deleteData } from '../utils/fetchData'

export const actions = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
}

export const addToFavorite = async (item, user, dispatch) => {
  console.log(item)
  const newFavorites = {
    category: item.category,
    checked: true,
    description: item.description,
    image: item.image,
    title: item.title,
  }
  const newUser = {
    email: user.email,
    favorites: [...user.favorites, newFavorites],
  }
  const res = await postProductData('user/favorites', newUser)

  if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

  dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
}
export const RemoveToFavorite = async (item, user, dispatch) => {
  //TODO
}
