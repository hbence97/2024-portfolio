<template>
  <section class="header-section">
    <navbar />
    <div class="header-text-container">
      <h1 class="header-h1">Hegyes Bence</h1>
      <h2 class="header-h2">Frontend Developer</h2>
      <div class="header-button-container">
        <div @click="heroButtonClicked" @mouseover="hoverOverButton" @mouseleave="stopHovering" class="header-button-linkedin">
          <a href="#">Let's connect</a>
          <img class="header-button-linkedin-logo" v-show="showLinkedInLogo" src="../assets/linkedin-logo.png" alt="LinkedIn logo">
        </div>
        <div @click="heroButtonClicked" @mouseover="hoverOverButton" @mouseleave="stopHovering" class="header-button-github">
          <a href="#">My projects</a>
          <img class="header-button-github-logo" v-show="showGitHubLogo" src="../assets/github-logo.png" alt="GitHub logo">
        </div>
      </div>
    </div>
    <div class="header-hero-image-container">
      <img class="header-hero-image" src="../assets/me.png" alt="Hegyes Bence image" />
    </div>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      showLinkedInLogo: false,
      showGitHubLogo: false,
    };
  },
  methods: {
    heroButtonClicked(e) {
      const gitHubLink = "https://github.com/hbence97";
      const linkedInLink = "https://www.linkedin.com/in/bence-hegyes-881101177/"
      e.target.innerText === "My projects" ? window.open(gitHubLink) : window.open(linkedInLink);
    },
    hoverOverButton(e) {
      if (e.target.innerText === "Let's connect") {
        this.showLinkedInLogo = true; 
      } else if (e.target.innerText === "My projects") {
        this.showGitHubLogo = true;
      }
    },
    stopHovering(e) {
      if (e.target.innerText === "Let's connect") {
        this.showLinkedInLogo = false;
      } else if (e.target.innerText === "My projects") {
        this.showGitHubLogo = false;
      }
    }
  },
};
</script>

<style scoped>
.header-section {
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
  display: flex;
}

.header-button-container div {
  display: flex;
  align-items: center;
  height: 70px;
  background: #cbcfd9;
  font-size: 24px;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.30);
  cursor: pointer;
  transform: skewX(-15deg);
  position: relative;
  transition: all 0.5s;
}

.header-button-container .header-button-linkedin {
  width: 190px;
}

.header-button-container .header-button-github {
  width: 170px;
}

.header-button-container .header-button-linkedin:hover {
  transition: all 0.5s;
  width: 240px;
}

.header-button-container .header-button-github:hover {
  transition: all 0.5s;
  width: 220px;
}

.header-button-container div a {
  padding-left: 0.8rem;
  text-decoration: none;
  color: black;
  font-weight: 600;
  pointer-events: none;
}

.header-button-github {
  margin-left: 2rem;
}

.header-button-linkedin-logo {
  position: absolute;
  height: 50px;
  right: 0;
  transition: all 0.5s;
  border-radius: 10px;
}

.header-button-github-logo {
  position: absolute;
  height: 50px;
  right: 0;
  transition: all 0.5s;
  border-radius: 50%;
}
</style>
