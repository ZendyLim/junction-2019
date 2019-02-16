<template>
  <div>
    <article-content :url="this.$route.query.url"></article-content>
    <comments :url="this.$route.query.url"></comments>

    <!-- Related Articles -->
    <v-card>
      <v-container fluid grid-list-lg>
        <h2>Related Articles</h2>
          <related-article-card
            v-for="article in this.$store.state.relatedArticles"
            :key="article.id"
            :article="article"
          ></related-article-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent'
import Comments from '@/components/Comments'
import RelatedArticleCard from '@/components/RelatedArticleCard'

export default {
  components: { ArticleContent, Comments, RelatedArticleCard },
  created: function() {
    console.log('hola! load from api')
  },
  data: function() {
    return {}
  }
}
</script>

<style>
.v-input--switch__track.theme--dark {
  color: #f44336;
}

.v-input--switch__thumb.theme--dark {
  color: #f44336;
}
</style>

