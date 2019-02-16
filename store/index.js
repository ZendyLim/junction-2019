import actions from './actions'

const state = () => ({
  user: {
    token: '',
    name: 'task-k0414',
    photoURL: '',
    uid: ''
  },
  articles: []
})

const mutations = {
  addUser(state, user) {
    state.user = user
  },
  
  addArticles(state, articles) {
    state.articles = articles
  },
}

export default {
  state,
  mutations,
  actions
}
