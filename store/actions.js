import axios from 'axios'

export default {
  addAuthenticatedUser(context, user) {
    if (user) context.commit('addUser', user)
  },
  logout(context) {
    context.commit('removeUser')
  },

  async serveArticles(context, topics) {
    const topicPromises = []

    topics.forEach(element => {
      topicPromises.push(
        axios.get(
          `https://newsapi.org/v2/top-headlines?q=${element}&language=en&apiKey=835c120b246d4efbad69736be0e76af1`
        )
      )
    })

    const result = await Promise.all(topicPromises)

    let articles = []
    let i = 0

    result.forEach(obj => {
      obj.data.articles.forEach(article => {
        article.topic = topics[i]
        articles.push(article)
      })
      i++
    })

    const shuffle = array => {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    articles = shuffle(articles)

    context.commit('addArticles', articles)
  }
}
