<template>
  <div class="about-me-section">
    <div class="about-me-container-texts">
      <h2>About Me</h2>
      <p>
        <span class="paragraph-welcome">Welcome to my website.</span>
        <br /><br />
        My name is Bence, and I wanted to make something more personal than a
        resume while showcasing some of my earlier projects.
        <br /><br />
        I'm an experienced Frontend Developer who has a keen on learning
        something new every day. I have
        <span class="four-years-experience">4 years of professional experience as a software developer</span>
        and 6 years of experience developing all kinds of stuff that makes me
        happy!
        <a href="https://github.com/hbence97" target="_blank"><i>(Check out my github page)</i></a>
        <br /><br />
        If you like what you see, or want to have a talk, make sure you
        <span class="linkedin">
          <a href="https://www.linkedin.com/in/bence-hegyes-881101177/" target="_blank">contact me on LinkedIn</a>
        </span>. Thanks for being here! <br /><br />
        Best regards!
        <br /><br />
        <i>Bence</i>
      </p>
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
.about-me-section {
  height: 100vh;
  padding-top: 4rem;
  border-bottom: 2px solid grey;
}

.about-me-container-texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

h2 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 12px;
}

p,
span,
i {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 1000px;
  font-size: 27px;
}

.paragraph-welcome {
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  background: url("../assets/wave.svg");
  background-size: 48px 64px;
  background-position: 2px 19px;
  animation: moveUnderline 72s linear infinite;
}

.about-me-container-texts .four-years-experience {
  font-weight: 600;
}

.about-me-container-texts .linkedin a {
  text-decoration-line: underline;
  text-decoration-color: #dddfe5;
  text-decoration-thickness: 4px;
  font-weight: 600;
  color: black;
}

@keyframes moveUnderline {
  from {
    background-position: 2px 19px;
  }

  to {
    background-position: 2000px 19px;
  }
}
</style>
