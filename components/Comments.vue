<template>
  <div>
    <h2>Comments</h2>
    <v-list two-line>
      <comment v-for="comment in comments" :comment="comment" :key="comment._id"></comment>
    </v-list>
    <comment-input @comment="onComment"></comment-input>
  </div>
</template>

<script>
import Comment from '@/components/Comment'
import CommentInput from '@/components/CommentInput'

export default {
  components: {
    Comment,
    CommentInput
  },
  props: ['url'],
  data: function() {
    return {
      comments: []
    }
  },
  methods: {
    async onComment(prop) {
      const review = prop
      review.userId = await this.$firestore
        .collection('users')
        .doc(this.$store.state.user.uid)
      review.createAt = new Date()
      review.url = this.url

      const docRef = await this.$firestore.collection('reviews').add(review)
      const newComments = this.comments.slice()
      const newCommentRef = await docRef.get()
      const newComment = newCommentRef.data()
      newComment.id = docRef.id
      newComments.push(newComment)

      this.comments = newComments
    }
  },
  created: async function() {
    const result = await this.$firestore
      .collection('reviews')
      .where('url', '==', this.url)
      .get()

    const comments = []

    result.forEach(element => {
      const temp = element.data()
      temp._id = element.id
      comments.push(temp)
    })

    this.comments = comments
  }
}
</script>

<style>
</style>

