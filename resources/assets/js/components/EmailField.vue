<template>
  <div class="form-group">
    <label class="control-label">Email</label>
    <input 
      type="text" 
      class="form-control" 
      :value="value"
      @input="change($event.target.value)">
    <div 
      class="alert alert-danger" 
      v-for="(error, index) in errors" 
      :key="index" 
      v-text="error"/>
  </div>
</template>

<script>
  import InputField from './InputField.vue';

  export default InputField.extend({
    
  });
</script>
