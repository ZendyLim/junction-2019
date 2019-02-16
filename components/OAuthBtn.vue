<template>
  <button @click="openOAuth">OAuth</button>
</template>
<script>
export default {
  methods: {
    openOAuth() {
      const provider = new this.$firebase.auth.FacebookAuthProvider()

      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result)

          const newUser = {
            name: result.user.displayName,
            photoURL: result.user.photoURL
          }

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
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.credential.accessToken
          // The signed-in user info.
          const user = result.user
          // ...
          this.$store.dispatch('addAuthenaticatedUser', {
            ...newUser,
            token: token,
            uid: result.user.uid
          })
        })
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
        })
    }
  }
}
</script>
