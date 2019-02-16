<template>
  <v-form>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Enter your email ID"
      required
    ></v-text-field>
    <!-- TODO add nameRoules later -->
    <v-text-field v-model="password" label="Type your password" required></v-text-field>

    <v-text-field v-model="retypePassword" label="Retype your password"></v-text-field>
    <v-btn :disabled="!isMachPassword" color="success">SIGNUP</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
        retypePassword: ''
      }
    }
  },
  computed: {
    isMatchedPassword() {
      return this.password === this.retypePassword && this.password !== ''
    },
    booleanUserFields() {
      return this.user.map(validfield => {
        if(validfield != ''){
          return true;
        } else {
          return false;
        }
      })
    },
    status() {
      for (let i=0; i<booleanUserFields.length; i++) {
        if (!booleanUserFields[i]) {
          return 'Validation status failed';
        }
        return 'Validation status success!';
      }
    }
  }
}
</script>
