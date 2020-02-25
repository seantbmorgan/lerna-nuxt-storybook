<template>
  <button type="button"><slot></slot></button>
</template>

<script>
export default {
  name: "StbmButton"
};
</script>

<style lang="scss" scoped>
button {
  color: blue;
  background: red;
}
</style>
