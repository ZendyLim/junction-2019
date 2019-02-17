<template>
  <div>
    <v-form>
      <v-text-field v-model="name" :counter="10" label="Enter your email ID" required></v-text-field>
      <v-text-field v-model="password" label="Type your password" required></v-text-field>
      <v-text-field v-model="retypePassword" label="Retype your password"></v-text-field>
      <v-btn :disabled="isInvalid">SIGNUP</v-btn>
    </v-form>
    <BtnFacebookOauth/>
  </div>
</template>

<script>
import BtnFacebookOauth from '~/components/BtnFacebookOauth.vue'
export default {
  data() {
    return {
      name: '',
      password: '',
      retypePassword: ''
    }
  },
  computed: {
    isInvalid() {
      if (this.password !== this.retypePassword) {
        return true
      }
      if (
        this.name === '' ||
        this.password === '' ||
        this.retypePassword === ''
      ) {
        return true
      }
      return false
    }
  },
  components: {
    BtnFacebookOauth
  }
}
</script>
