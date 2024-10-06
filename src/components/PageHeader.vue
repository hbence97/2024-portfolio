<template>
  <section id="home" class="header-section">
    <navbar />
    <div class="header-text-container">
      <h1 class="header-h1-desktop">Hegyes Bence</h1>
      <h1 class="header-h1-mobile">Hegyes <span>Bence</span></h1>
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

.header-h1-desktop {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 160px;
  margin-top: 10rem;
}

.header-h1-mobile {
  display: none;
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
  margin-left: 2rem;
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

/* 2560 x 1440 */
@media (min-width: 2550px) {
  .header-text-container {
    margin-left: 10rem;
  }

  .header-h1-desktop {
    font-size: 240px;
  }

  .header-h2 {
    font-size: 90px;
    margin-left: 20rem;
  }

  .header-hero-image {
    height: 1000px;
  }

  .header-button-container div {
    height: 110px;
    font-size: 36px;
  }

  .header-button-container .header-button-linkedin {
    width: 275px;
  }

  .header-button-container .header-button-github {
    width: 245px;
    margin-left: 3rem;
  }

  .header-button-container .header-button-linkedin:hover {
    width: 345px;
  }

  .header-button-container .header-button-github:hover {
    width: 315px;
  }

  .header-button-linkedin-logo,
  .header-button-github-logo {
    height: 70px;
    right: 4px;
  }
}

/* 15.6 inch laptop */
@media (max-width: 1370px) {
  .header-text-container {
    margin-left: 3rem;
  }

  .header-h1-desktop {
    font-size: 150px;
    margin-top: 9rem;
  }

  .header-h2 {
    font-size: 55px;
    margin-left: 13rem;
  }

  .header-button-container {
    margin-top: 11rem;
  }

  .header-hero-image {
    top: -33rem;
    right: 2rem;
    height: 600px;
  }
}

/* mobile */
@media (max-width: 450px) {
  .header-text-container {
    display: flex;
    flex-direction: column;
    height: 622px;
    margin-left: 0;
  }

  .header-h1-desktop {
    display: none;
  }

  .header-h1-mobile {
    display: block;
    margin-left: 2rem;
    font-size: 75px;
    margin-top: 2.5rem;
    z-index: 1;
  }

  .header-h1-mobile span {
    margin-left: 5rem;
  }

  .header-h2 {
    font-size: 28px;
    margin-top: 0.5rem;
    margin-left: 3rem;
    z-index: 1;
  }

  .header-hero-image {
    top: -26rem;
    left: -12.5rem;
    height: 500px;
    border: 1.8px solid #f5f5f5;
    border-radius: 20px;
  }

  .header-button-container {
    margin-top: 6rem;
    margin-left: 9rem;
    flex-direction: column;
  }

  .header-button-container div {
    height: 55px;
    font-size: 22px;
  }

  .header-button-container .header-button-linkedin {
    width: 180px;
    margin-bottom: 4rem;
    margin-left: 3rem;
  }

  .header-button-container .header-button-github {
    width: 160px;
    margin-left: 3rem;
  }
}
</style>
