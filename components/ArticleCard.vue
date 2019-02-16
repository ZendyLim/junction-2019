<template>
  <v-card @click="goto(article.url)" class="mt-2 mb-2">
    <v-flex class="text-xs-center" justify-center>
      <v-chip small>{{article.topic}}</v-chip>
    </v-flex>
    <v-img :aspect-ratio="16/9" :src="article.urlToImage"></v-img>
    <v-card-title>
      <p class="text-xs-left">{{article.title}}</p>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  name: 'article-card',
  props: ['article'],
  methods: {
    goto(url) {
      this.$router.push({
        path: `/article?url=${this.article.url}`
      })
    }
  }
}
</script>

