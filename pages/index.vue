<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <article-card v-for="article in displayedArticles" :key="article.url" :article="article"></article-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ArticleCard from '@/components/ArticleCard'
import axios from 'axios'
import { Promise } from 'q'
export default {
  components: {
    ArticleCard
  },
  data: function() {
    return {
      topics: ['Donald Trump', 'Whitehouse'],
      displayedArticles: [],
      articles: []
    }
  },
  methods: {
    shuffle(array) {
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
  },
  created: async function() {
    const topicPromises = []
    this.topics.forEach(element => {
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
        article.topic = this.topics[i]
        articles.push(article)
      })
      i++
    })

    this.articles = this.shuffle(articles)

    const displayedArticles = this.displayedArticles.slice()
    const toBeDisplayedArticles = this.articles.slice(0, 10)
    displayedArticles.push(...toBeDisplayedArticles)

    this.displayedArticles = displayedArticles
  }
}
</script>

