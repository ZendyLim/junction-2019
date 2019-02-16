<template>
  <v-layout row wrap>
    <v-flex xs6>
      <v-img :aspect-ratio="16/9" :src="article.urlToImage"></v-img>
    </v-flex>
    <v-flex xs6>
      <p>{{article.topic}}</p>
      <span>{{article.title}}</span>
    </v-flex>
    <v-flex xs8>
      <v-progress-linear value="50"></v-progress-linear>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'article-card',
  props: ['article']
}
</script>
