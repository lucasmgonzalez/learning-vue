<template>
  <form 
    action="/api/user" 
    @submit="submitForm">

    <EmailField
      v-model="user.email"
      :errors="errors.email"/>
    <div class="form-group">
      <label class="control-label">Name</label>
      <input 
        type="text" 
        class="form-control" 
        v-model="user.name">
      <div 
        class="alert alert-danger" 
        v-for="(error, index) in errors.name" 
        :key="index" 
        v-text="error"/>
    </div>
    <div class="form-group">
      <label class="control-label">Password</label>
      <input 
        type="password" 
        class="form-control" 
        v-model="user.password">
      <div 
        class="alert alert-danger" 
        v-for="(error, index) in errors.password" 
        :key="index" 
        v-text="error"/>
    </div>
    <div class="form-group">
      <input 
        type="submit" 
        value="Submit" 
        class="btn btn-success">
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import EmailField from './EmailField.vue';

export default {
  data() {
    return {
      user: {
        email: "teste",
        name: "",
        password: ""
      },
      errors: []
    };
  },

  components: {
   'EmailField': EmailField
  },

  methods: {
    ...mapMutations(["addUser"]),

    submitForm(ev) {
      ev.preventDefault();

      let form = ev.target;

      window.axios
        .post(form.getAttribute("action"), this.user)
        .then(response => {
          this.addUser(response.data);
        })
        .catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }
        });

      return false;
    }
  }
};
</script>
