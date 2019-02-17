<template>
  <a class="button" @click="facebookOauth">
    <img src="~/static/facebook_circle.png" alt="Authenticate by Facebook" width="100">
  </a>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({ addUserToStore: 'addAuthenticatedUser' }),
    async facebookOauth() {
      const provider = new this.$firebase.auth.FacebookAuthProvider()

      let result

      try {
        result = await this.$firebase.auth().signInWithPopup(provider)
      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
        // Stop processing
        return
      }

      const newUser = {
        name: result.user.displayName,
        photoURL: result.user.photoURL
      }

      const isNewUser = await this.$firestore
        .collection('users')
        .get()
        .then(querySnapshot => {
          // console.log('querySnapshot')
          // console.log(querySnapshot)
          let match = false
          querySnapshot.forEach(doc => {
            if (doc.id == result.user.uid) {
              match = true
            }
          })
          return match
        })

      if (!isNewUser) {
        this.$firestore
          .collection('users')
          .doc(result.user.uid)
          .set(newUser)
          .then(function() {
            console.log("hey it's done")
          })
          .catch(function(error) {
            console.error(error)
          })
      }

      this.addUserToStore({
        ...newUser,
        token: result.credential.accessToken,
        uid: result.user.uid
      })

      this.$router.push({ path: `/topic` })
    }
  }
}
</script>
