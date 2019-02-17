<template>
  <div>
    <v-img :src="content.image"></v-img>
    <h1>{{content.title}}</h1>
    <small>Written by: {{content.author}} - {{content.pub_date}}</small>
    <p v-html="content.html"></p>
  </div>
</template>

<script>
export default {
  props: ['url'],
  mounted: async function() {
    console.log('mounted')
    await this.$store.dispatch('serveLexper', this.url)
    console.log('ok')
    this.content = this.$store.state.articleContent
    await this.$store.dispatch('serveHoaxy', this.$store.state.articleContent.title)
  },
  data: function() {
    return {
      content: {}
    }
  }
}
</script>

