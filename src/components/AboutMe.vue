<template>
  <section id="about-me" class="about-me-section">
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
        At the moment I'm open to frontend opportunities as a
        <span class="highlight">contractor</span>,
        <span class="highlight">full-time</span> or as a
        <span class="highlight">part-time</span> employee. <br /><br />
        Best regards!
        <br /><br />
        <i>Bence</i>
      </p>
    </div>
  </section>
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

.paragraph-welcome {
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  background: url("../assets/wave.svg");
  background-size: 48px 64px;
  background-position: 2px 19px;
  animation: moveUnderline 72s linear infinite;
}

p,
span,
i {
  max-width: 1000px;
  font-size: 27px;
}

.about-me-container-texts .four-years-experience {
  font-weight: 600;
}

.about-me-container-texts .highlight {
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

/* 2560 x 1440 */
@media (min-width: 2550px) {
  .about-me-section {
    padding-top: 8rem;
  }

  .about-me-container-texts {
    gap: 4rem;
  }

  h2 {
    font-size: 140px;
  }

  .paragraph-welcome {
    font-size: 56px;
    background-size: 48px 80px;
  }

  p,
  span,
  i {
    max-width: 1600px;
    font-size: 34px;
  }
}

/* 15.6 inch laptop */
@media (max-width: 1370px) {
  .about-me-section {
    padding-top: 3rem;
  }

  .about-me-container-texts {
    gap: 1rem;
  }

  .paragraph-welcome {
    font-size: 42px;
    background-size: 48px 53px;
  }

  p,
  span,
  i {
    max-width: 1000px;
    font-size: 26px;
  }
}

/* mobile */
@media (max-width: 450px) {
  .about-me-section {
    padding-top: 2rem;
  }

  .about-me-container-texts {
    gap: 0.5rem;
  }

  h2 {
    font-size: 70px;
  }

  .paragraph-welcome {
    font-size: 30px;
    animation: none;
  }

  p,
  span,
  i {
    font-size: 20px;
  }

  p {
    max-width: 380px;
  }
}
</style>
