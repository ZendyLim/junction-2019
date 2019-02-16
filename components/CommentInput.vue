<template>
  <v-card>
    <v-textarea name="comment-input" box hide-details v-model="comment" label="Comment" auto-grow></v-textarea>
    <v-card-actions>
      <v-switch
        class="mt-0 text-capitalize"
        color="info"
        v-model="isTrue"
        hide-details
        :label="`${isTrue.toString()} Statement`"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn color="blue" @click="submit">Share</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      isTrue: false,
      comment: ''
    }
  },
  methods: {
    submit() {
      this.$emit('comment', {
        comment: this.comment,
        isTrue: this.isTrue
      })

      this.comment = ''
    }
  }
}
</script>
