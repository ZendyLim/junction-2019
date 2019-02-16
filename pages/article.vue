<template>
  <div>
    <article-content></article-content>
    <h2>Comments</h2>
    <v-list two-line>
      <comment></comment>
      <comment></comment>
    </v-list>

    <comment-input></comment-input>

    <!-- Related Articles -->
    <v-card>
      <v-container fluid grid-list-lg>
        <h2>Related Articles</h2>
        <related-article-card></related-article-card>
        <related-article-card></related-article-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent'
import Comment from '@/components/Comment'
import CommentInput from '@/components/CommentInput'
import RelatedArticleCard from '@/components/RelatedArticleCard'

export default {
  components: { ArticleContent, Comment, CommentInput, RelatedArticleCard },
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
  color: #1976d2;
}

.v-input--switch__thumb.theme--dark {
  color: #2196f3;
}
</style>

