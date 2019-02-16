<template>
  <div>
    <v-img :src="placeholder"></v-img>
    <h1>Some title that not so long but not so short</h1>
    <small>Written by: Samuel L. Jackson - 12 Jan 2019</small>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</template>

<script>
export default {
  props: ['url'],
  created: function() {
    console.log('api to get content')
  },
  data: function() {
    return {
      placeholder: 'https://placehold.it/500x250'
    }
  }
}
</script>

