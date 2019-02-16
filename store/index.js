import actions from './actions'

const state = () => ({
  user: null, // token, name, photoURL, uid
  articles: []
})

const mutations = {
  addUser(state, user) {
    state.user = user
  },
  removeUser(state) {
    state.user = null
  },

  addArticles(state, articles) {
    state.articles = articles
  }
}

const getters = {
  authenticated(state) {
    return Boolean(state.user)
  }
}

export default {
  state,
  mutations,
  actions
}
