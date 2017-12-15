<template>
  <ul>
      <li v-for="(user, index) in users" v-bind:key="index">{{ user.name }} ({{ user.email }})</li>
  </ul>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        computed: {
            ...mapState(['users']),
        }
    }
</script>
