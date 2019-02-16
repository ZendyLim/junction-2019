<template>
  <v-list-tile avatar ripple>
    <v-list-tile-avatar>
      <img :src="user.photoURL">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>{{user.name}}</v-list-tile-title>
      <v-list-tile-sub-title>
        <span class="text-capitalize font-weight-bold">{{comment.isTrue}} -</span>
        {{comment.comment}}
      </v-list-tile-sub-title>
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
      user: {}
    }
  },
  created: async function() {
    const userQueryDoc = await this.comment.userId.get()

    this.user = userQueryDoc.data()
  }
}
</script>

