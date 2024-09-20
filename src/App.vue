<template>
  <page-header />
  <about-me />
  <skills />
  <projects />
  <contact-me />
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
}

@media (max-width: 450px) {
  #app {
    width: 100vh;
  }
}
</style>
