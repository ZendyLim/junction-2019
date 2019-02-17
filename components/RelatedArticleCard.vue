<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card @click="goto(article.canonical_url || '')" color="grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div>
              <v-chip>
                <v-avatar class="teal">{{article.domain && article.domain[0] || "?"}}</v-avatar>
                {{article.domain || "domain"}}
              </v-chip>
              <div class="headline">{{article.title || "Title"}}</div>
            </div>

            <v-chip color="orange" text-color="white" v-if="article.site_type === 'claim'">
              <v-avatar>
                <v-icon>warning</v-icon>
              </v-avatar>
              {{article.site_type || "type"}}
            </v-chip>
            <v-chip color="indigo" text-color="white" v-if="article.site_type === 'fact_checking'">
              <v-avatar>
                <v-icon dark right>check_circle</v-icon>
              </v-avatar>
              {{article.site_type || "type"}}
            </v-chip>

            <v-badge color="indigo" right>
              <span slot="badge">{{article.number_of_tweets}}</span>
              <span>Tweeted</span>
            </v-badge>
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
