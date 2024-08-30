<template>
  <div class="header-container">
    <navbar />
    <div class="header-text-container">
      <h1 class="header-h1">Hegyes Bence</h1>
      <h2 class="header-h2">Frontend Developer</h2>
      <div class="header-button-container">
        <button class="header-button-linkedin">
          <a href="https://www.linkedin.com/in/bence-hegyes-881101177/">Let's connect</a>
        </button>
        <button class="header-button-github">
          <a href="https://github.com/hbence97">My projects</a>
        </button>
      </div>
    </div>
    <div class="header-hero-image-container">
      <img class="header-hero-image" src="../assets/me.png" alt="Hegyes Bence image" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-container {
  background-image: url("../assets/duplo24.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  border-bottom: 2px solid grey;
}

.header-text-container {
  display: flex;
  flex-direction: column;
  height: 622px;
  margin-left: 5rem;
}

.header-h1 {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 160px;
  margin-top: 10rem;
}

.header-h2 {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 60px;
  margin-left: 14rem;
}

.header-hero-image-container {
  position: relative;
}

.header-hero-image {
  position: absolute;
  top: -35rem;
  right: 12rem;
  height: 700px;
  border: 1.8px solid #f5f5f5;
  border-radius: 20px;
}

.header-button-container {
  margin-top: 16rem;
}

.header-button-container button {
  padding: 1rem;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.20);
}

.header-button-container button a {
  text-decoration: none;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  color: black;
  font-weight: 600;
}

.header-button-github {
  margin-left: 2rem;
}
</style>
