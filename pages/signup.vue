<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Enter your email ID"
      required
    ></v-text-field>

    <v-text-field v-model="password" label="Type your password" required></v-text-field>

    <v-text-field v-model="retypePassword" label="Retype your password"></v-text-field>
    <v-btn :disabled="!isMachPassword" color="success" @click="validate">SIGNUP</v-btn>

    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
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
    isMachPassword() {
      return this.password === this.retypePassword && this.password !== ''
    }
  }
}
</script>
