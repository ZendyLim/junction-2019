<template>
  <div class="container-signup">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs11>
        <v-content v-if="splash">
          <Logo></Logo>
        </v-content>
        <v-content v-else>
          <v-form>
            <v-text-field v-model="name" :counter="10" label="Enter your email ID" required></v-text-field>
            <v-text-field v-model="password" label="Type your password" required></v-text-field>
            <v-text-field v-model="retypePassword" label="Retype your password"></v-text-field>
            <v-btn :disabled="isInvalid">SIGNUP</v-btn>
          </v-form>
          <BtnFacebookOauth/>
        </v-content>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import BtnFacebookOauth from '~/components/BtnFacebookOauth.vue'
import Logo from '~/components/LogoWaitwat.vue'
export default {
  data() {
    return {
      name: '',
      password: '',
      retypePassword: '',
      splash: false
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
    BtnFacebookOauth,
    Logo
  },
  mounted() {
    this.splash = true
    setTimeout(
      function() {
        this.splash = false
      }.bind(this),
      2000
    )
  }
}
</script>
<style>
.container-signup {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: top;
  align-items: flex-start;
  text-align: center;
}
</style>
