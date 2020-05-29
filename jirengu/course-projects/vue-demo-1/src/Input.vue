<template>
  <div class="red wrapper">
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
.red {
  background: red;
}
.wrapper {
  display: inline-block;
}
</style>
