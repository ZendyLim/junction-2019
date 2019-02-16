import actions from './actions'

const state = () => ({
  user: {
    token: '',
    name: 'task-k0414',
    photoURL: '',
    uid: ''
  },
  articles: [],
  articleContent: {}
})

const mutations = {
  addUser(state, user) {
    state.user = user
  },

  addArticles(state, articles) {
    state.articles = articles
  },

  setArticleContent(state, content) {
    state.articleContent = content
  }
}

export default {
  state,
  mutations,
  actions
}
