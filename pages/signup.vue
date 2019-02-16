<template>
  <v-form>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Enter your email ID"
      required
    ></v-text-field>
    <!-- TODO add nameRules later -->
    <v-text-field v-model="password" label="Type your password" required></v-text-field>

    <v-text-field v-model="retypePassword" label="Retype your password"></v-text-field>
    <v-btn :disabled="!isMatchPassword" color="success">SIGNUP</v-btn>
    <v-btn @click="facebookOauth">FACEBOOK</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      retypePassword: ''
    }
  },
  computed: {
    isMatchPassword() {
      return this.password === this.retypePassword && this.password !== ''
    },
    userName() {
      return this.$store.state.user.name
    }
  },
  methods: {
    async facebookOauth() {
      const provider = new this.$firebase.auth.FacebookAuthProvider()

      let result;

      try {
        result = await this.$firebase
          .auth()
          .signInWithPopup(provider)
      } catch(error) {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential
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
          let match = false;
          querySnapshot.forEach(doc => {
            if (doc.id == result.user.uid){
              match = true;
            }
            });
          return match;
        })

      if (!isNewUser){
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

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken
      // The signed-in user info.
      const user = result.user
        
      this.$store.dispatch('addAuthenticatedUser', {
        ...newUser,
        token: token,
        uid: result.user.uid
      })
    }
  }
}
</script>
