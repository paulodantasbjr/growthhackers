export const getData = async (url, token) => {
  const res = await fetch(`http://localhost:5000/${url}`, {
    method: 'GET',
    headers: {
      token: token,
    },
  })

  const data = await res.json()

  return data
}

export const getProductData = async (url) => {
  const res = await fetch(`http://localhost:5000/${url}`, {
    method: 'GET',
  })

  const data = await res.json()

  return data
}

export const postData = async (url, post, token) => {
  const res = await fetch(`http://localhost:5000/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(post),
  })

  const data = await res.json()

  return data
}
