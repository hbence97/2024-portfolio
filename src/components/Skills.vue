<template>
  <div class="skills-section">
    <h2>Skills / Experiences</h2>
    <div class="skills-section-container">
      <div class="skills-container">
        <img class="img-javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <span class="span-javascript">JavaScript</span>

        <span class="span-typescript">TypeScript</span>
        <img class="img-typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

        <img class="img-vue"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" />
        <span class="span-vue">Vue.js</span>

        <span class="span-react">React</span>
        <img class="img-react"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />

        <img class="img-html"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
        <span class="span-html">HTML</span>

        <span class="span-css">CSS</span>
        <img class="img-css"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />

        <img class="img-git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
        <span class="span-git">Git</span>

        <span class="span-jenkins">Jenkins</span>
        <img class="img-jenkins"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
      </div>

      <div class="experiences-container">
        <p class="experiences-container__title">Companies that I have worked for</p>
        <div class="spar-container">
          <img class="spar-img" src="../assets/spar.png" alt="" />
        </div>

        <div class="vodafone-container">
          <img class="vodafone-img" src="../assets/vodafone.png" alt="" />
        </div>

        <div class="dxc-container">
          <img class="dxc-img" src="../assets/dxc.png" alt="" />
        </div>

        <div class="goodevent-container">
          <img class="goodevent-img" src="../assets/goodevent.png" alt="" />
        </div>

        <div class="goodwill-container">
          <img class="goodwill-img" src="../assets/goodwill.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
h3,
span {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
}

.skills-section {
  background-image: url("../assets/duplo25.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.skills-section h2 {
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 12px;
  padding-top: 1rem;
  margin-bottom: 3rem;
}

.skills-section-container {
  display: flex;
  justify-content: center;
  gap: 10rem;
  align-items: center;
}

.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 6px 0px;
  grid-template-areas:
    "img-javascript span-javascript ."
    ". span-typescript img-typescript"
    "img-vue span-vue ."
    ". span-react img-react"
    "img-html span-html ."
    ". span-css img-css"
    "img-git span-git ."
    ". span-jenkins img-jenkins";
  align-items: center;
  justify-items: center;
}

.span-typescript {
  grid-area: span-typescript;
}

.img-javascript {
  grid-area: img-javascript;
}

.span-javascript {
  grid-area: span-javascript;
}

.img-typescript {
  grid-area: img-typescript;
}

.img-vue {
  grid-area: img-vue;
}

.span-vue {
  grid-area: span-vue;
}

.span-react {
  grid-area: span-react;
}

.img-react {
  grid-area: img-react;
}

.img-html {
  grid-area: img-html;
}

.span-html {
  grid-area: span-html;
}

.span-css {
  grid-area: span-css;
}

.img-css {
  grid-area: img-css;
}

.img-git {
  grid-area: img-git;
}

.span-jenkins {
  grid-area: span-jenkins;
}

.img-jenkins {
  grid-area: img-jenkins;
}

.span-git {
  grid-area: span-git;
}

.skills-container span {
  font-size: 32px;
}

.img-javascript,
.img-typescript,
.img-vue,
.img-react,
.img-html,
.img-css,
.img-git,
.img-jenkins {
  height: 80px;
}

.experiences-container {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
}

.experiences-container__title {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 1.6rem;
}

.experiences-container img {
  margin-bottom: 0.2rem;
}

.experiences-container .spar-img {
  height: 64px;
}

.experiences-container .vodafone-img {
  height: 110px;
}

.experiences-container .dxc-img {
  height: 130px;
}

.experiences-container .goodevent-img {
  height: 140px;
}

.experiences-container .goodwill-img {
  height: 120px;
}
</style>
