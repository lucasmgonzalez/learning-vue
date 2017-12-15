
<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: ['value', 'errors'],

    methods: {
      change: function (value) {
        this.$emit('input', value);
      }
    }
  });
</script>
