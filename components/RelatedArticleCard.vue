<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card @click="goto(article.canonical_url || '')" color="grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{article.title || "Title"}}</div>
            <div>{{article.domain || "domain"}}</div>
            <div>{{article.site_type || "type"}}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: ['article'],
  methods: {
    goto(url) {
      this.$router.push({
        path: `/article?url=${url}`
      })
    }
  }
}
</script>
