<template>
  <v-list-tile avatar ripple>
    <v-list-tile-avatar>
      <img :src="placeholder">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>User 1</v-list-tile-title>
      <v-list-tile-sub-title>This is bullshit</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-list-tile-action-text>1 month ago</v-list-tile-action-text>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: ['comment'],
  data: function() {
    return {
      placeholder: 'https://placehold.it/250'
    }
  }
}
</script>

