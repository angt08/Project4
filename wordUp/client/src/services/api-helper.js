import axios from 'axios';

const baseUrl = 'http://localhost:3000'

// const baseUrl = 'https://afternoon-refuge-67431.herokuapp.com'

const api = axios.create({
  baseURL: baseUrl
})
// 
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

// 

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

export const readAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}


// tweets
export const getAllTweets = async () => {
  const resp = await api.get('/tweets')
  return resp.data
}

export const updateTweet = async (id, data) => {
  const resp = await api.put(`/tweets/${id}`, { tweet: data })
  return resp.data
}

export const createTweet = async (data) => {
  const resp = await api.post('/tweets', { tweet: data })
  return resp.data
}

export const destroyTweet = async (id) => {
  const resp = await api.delete(`/tweets/${id}`)
  return resp.data
}




//comments 

export const getAllComments = async (tweet_id) => {
  const resp = await api.get(`/tweets/${tweet_id}/comments`)
  return resp.data
}

export const createComment = async (user_id, tweet_id, data) => {
  data.user_id = user_id
  data.tweet_id = tweet_id
  const resp = await api.post(`/tweets/${tweet_id}/comments`, { comment: data })

  return resp.data
}
export const destroyComment = async (comment_id) => {
  const resp = await api.delete(`/tweets/:tweet_id/comments/${comment_id}`)
  return resp.data
}
// export const destroyComment = async (tweet_id, comment_id) => {
//   const resp = await api.delete(`/tweets/${tweet_id}/comments/${comment_id}`)
//   return resp.data
// }
