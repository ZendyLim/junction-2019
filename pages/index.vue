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

export default {
  components: {
    ArticleCard
  },

  data: function() {
    return {
      topics: ['Donald Trump', 'Whitehouse'],
      displayedArticles: []
    }
  },

  created: async function() {
    console.log('created!')
  },

  mounted: async function() {
    await this.$store.dispatch('getUserTopics', {
      firestore: this.$firestore,
      uid: this.$store.state.user.uid
    })

    this.topics = this.$store.state.subbedTopics

    await this.$store.dispatch('serveArticles', this.topics)
    await this.$store.dispatch('serveHoaxy', this.topics[0])

    console.log('mounted!')

    const displayedArticles = this.displayedArticles.slice()
    console.log(this.$store.state.articles)
    const toBeDisplayedArticles = this.$store.state.articles.slice(0, 10)
    displayedArticles.push(...toBeDisplayedArticles)

    this.displayedArticles = displayedArticles
  },

  middleware: "authenticate"
}
</script>

