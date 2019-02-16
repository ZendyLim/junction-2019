import actions from './actions'

const state = () => ({
  user: {
    token: '',
    name: 'task-k0414',
    photoURL: '',
    uid: ''
  },
  articles: [],
  relatedArticles: [],
  articleContent: {}
})

const mutations = {
  addUser(state, user) {
    state.user = user
  },

  addArticles(state, articles) {
    state.articles = articles
  },

  setRelatedArticles(state, articles) {
    state.relatedArticles = articles;
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
