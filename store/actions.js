import axios from 'axios';
import unirest from 'unirest';

export default {
  addAuthenticatedUser(context, user) {
    context.commit('addUser', user)
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
  },

  async serveHoaxy(context, topic) {
    const info = await new Promise((resolve) => {
        unirest.get(url)
        .header("X-Mashape-Key", "OHJHR7IfeCmshao1sHNDuj8PtDi1p1fNjd1jsnXbs3LPozz5rN")
        .header("X-Mashape-Host", "sun.p.mashape.com")
        .end((res) => {
          if (res) {
            resolve(res.body);
          }
        });
      })
    
    const results = await new Promise( resolve => {
        unirest.get("https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=pizzagate+AND+date_published%3A%5B2016-10-28+TO+2016-12-04%5D")
        .header("X-RapidAPI-Key", "adbe0b85bemshff1eee1ef3cdd3cp1d4c65jsn127c9272c6fc")
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        });
  },
}