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
    <v-btn :disabled="!isMatchPassword" color="success">SIGNUP</v-btn>
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
      let booleanStatusArray = [];

       Object.entries(this.user).forEach(
        ([key, value]) => {
          if (value !== '') {
            console.log("boolean TRUE");
            booleanStatusArray.push(true);
            // return true;
          }
          else {
            console.log("boolean FALSE");
            booleanStatusArray.push(false);
          }
        }
      )
      return booleanStatusArray;
    },
    status() {
      for (let i=0; i<this.booleanUserFields.length; i++) {
        if (!this.booleanUserFields[i]) {
          return 'Validation status failed';
        }
        return 'Validation status success!';
      }
    }
  }
}
</script>
