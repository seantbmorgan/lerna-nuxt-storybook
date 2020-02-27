<template>
  <button type="button" class="rounded-lg p-6"><slot></slot></button>
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
