<template>
  <section id="contact" class="contact-me-section">
    <popup v-show="bottomOfPage" class="popup-component" />
    <h2>Contact Me</h2>
    <div class="contact-me-container">
      <p class="contact-me-text">You can reach out to me either by</p>
      <div class="cards">
        <div class="card">
          <img
            class="email-logo"
            src="../assets/email_logo.png"
            alt="Email logo"
          />
          <span class="email-text">hbence.work@gmail.com</span>
        </div>
        <div class="card">
          <img
            class="linkedin-logo"
            src="../assets/linkedin-logo.png"
            alt="LinkedIn logo"
          />
          <span class="linkedin-text"
            ><a
              href="https://www.linkedin.com/in/bence-hegyes-881101177/"
              target="_blank"
              >Hegyes Bence</a
            ></span
          >
        </div>
      </div>
    </div>
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
  margin-bottom: 1rem;
}

.contact-me-text {
  text-align: center;
  font-size: 32px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.card {
  display: flex;
  width: 300px;
  height: 400px;
  background: rgba(203, 207, 217, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.125));
  flex-direction: column;
  align-items: center;
}

.email-logo {
  height: 80px;
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.linkedin-logo {
  height: 80px;
  margin-top: 6rem;
  margin-bottom: 6rem;
  border-radius: 12%;
}

.email-text,
.linkedin-text {
  font-size: 20px;
  font-weight: 600;
}

.linkedin-text a {
  text-decoration: none;
  color: black;
}

/* 2560 x 1440 */
@media (min-width: 2550px) {
  .contact-me-section h2 {
    font-size: 120px;
    margin-bottom: 4rem;
  }

  .contact-me-text {
    font-size: 36px;
  }

  .cards {
    gap: 4rem;
    margin-top: 1.5rem;
  }

  .card {
    width: 360px;
    height: 470px;
  }

  .email-logo {
    height: 100px;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .linkedin-logo {
    height: 100px;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .email-text,
  .linkedin-text {
    font-size: 24px;
  }
}

/* 15.6 inch laptop */
@media (max-width: 1370px) {
  .contact-me-section {
    padding-top: 2.5rem;
  }
}

/* mobile */
@media (max-width: 450px) {
  .contact-me-section {
    height: 153vh;
    padding-top: 2rem;
  }

  .contact-me-section h2 {
    font-size: 60px;
    letter-spacing: 12px;
    padding-top: 1rem;
  }

  .cards {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 3rem;
  }

  .card {
    height: 380px;
  }
}
</style>
