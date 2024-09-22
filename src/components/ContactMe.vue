<template>
  <section class="contact-me-section">
    <popup v-show="bottomOfPage" class="popup-component" />
    <h2>Contact Me</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bottomOfPage: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.bottomOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
.popup-component {
  position: absolute;
  z-index: 10;
}

.contact-me-section {
  position: relative;
  padding-top: 4rem;
  height: 100vh;
  background-image: url("../assets/duplo28.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid grey;
}

.contact-me-section h2 {
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 12px;
  padding-top: 1rem;
}

@media (max-width: 450px) {
  .contact-me-section {
    padding-top: 2rem;
  }

  .contact-me-section h2 {
    font-size: 60px;
    letter-spacing: 12px;
    padding-top: 1rem;
  }
}
</style>
