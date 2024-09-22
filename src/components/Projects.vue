<template>
  <section class="projects-section">
    <h2 class="projects-section-title">Projects</h2>
    <p class="projects-section-small-text">(Some of my favorites)</p>
    <!-- Games -->
    <div class="projects-container">
      <h3>
        <strong>Games <span>( 3 )</span></strong>
      </h3>
      <div class="cards">
        <a href="https://hbence97.github.io/SmallJavascriptProjects/Tetris/" target="_blank">
          <figure class="card">
            <img src="../assets/tetris.png" alt="Tetris cover" />
            <figcaption>Tetris</figcaption>
          </figure>
        </a>

        <a href="https://hbence97.github.io/SmallJavascriptProjects/FlappyBird/" target="_blank">
          <figure class="card">
            <img src="../assets/flappy_bird.png" alt="Flappy Bird cover" />
            <figcaption>Flappy Bird</figcaption>
          </figure>
        </a>

        <a href="https://hbence97.github.io/SmallJavascriptProjects/Snake/" target="_blank">
          <figure class="card">
            <img src="../assets/snake.png" alt="Snake cover" />
            <figcaption>Snake</figcaption>
          </figure>
        </a>
      </div>
    </div>

    <!-- Apps -->
    <div class="projects-container">
      <h3>
        <strong>Apps <span>( 2 )</span></strong>
      </h3>
      <div class="cards">
        <a href="https://hbence97.github.io/SmallJavascriptProjects/WeatherForecast/" target="_blank">
          <figure class="card">
            <img src="../assets/weather_forecast.png" alt="Tetris cover" />
            <figcaption>Weather forecast</figcaption>
          </figure>
        </a>

        <a href="https://hbence97.github.io/SmallJavascriptProjects/Chatroom/" target="_blank">
          <figure class="card">
            <img src="../assets/chatroom.png" alt="Tetris cover" />
            <figcaption>Real-time chatroom</figcaption>
          </figure>
        </a>
      </div>
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
img {
  height: 270px;
}

.projects-section {
  padding-top: 4rem;
  border-bottom: 2px solid grey;
}

.projects-section h2 {
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 12px;
  padding-top: 1rem;
}

.projects-section-small-text {
  text-align: center;
  font-style: italic;
  letter-spacing: 7px;
  font-size: 32px;
  margin-bottom: 3rem;
}

.projects-container {
  padding: 15px;
}

h3:after,
.cards .card figcaption,
.cards .card:after {
  position: absolute;
}

h3,
h3 strong,
.cards .card {
  position: relative;
}

.cards {
  display: flex;
}

h3,
h3 strong,
h3 span {
  vertical-align: middle;
}

h3 {
  padding: 10px;
  padding-left: 25px;
  margin: 0;
}

h3 strong {
  z-index: 2;
  background: white;
  padding: 4px 8px;
  font-family: "Alegreya Sans", sans-serif;
  font-size: 32px;
}

h3 span {
  font-size: 0.7em;
  color: #aaa;
  margin-left: 10px;
}

h3:after {
  content: "";
  z-index: 1;
  bottom: 50%;
  margin-bottom: -2px;
  height: 2px;
  left: 0;
  right: 0;
  background: #373d47;
}

.cards {
  flex-flow: row wrap;
}

.cards .card {
  margin: 1.2rem;
  height: 270px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0,0,0,0.8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
}

.cards .card img {
  width: 270px;
  min-height: 100%;
}

.cards .card figcaption {
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  font-size: 22px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s;
}

.cards .card:after {
  content: '';
  z-index: 10;
  width: 200%;
  height: 100%;
  top: -90%;
  left: -20px;
  opacity: 0.1;
  transform: rotate(45deg);
  background: linear-gradient(to top, transparent, #fff 15%, rgba(255,255,255,0.5));
  transition: 0.3s;
}

.cards .card:hover,
.cards .card:focus,
.cards .card:active {
  box-shadow: 0 10px 16px 3px rgba(0,0,0,0.6);
  transform: translateY(-3px) scale(1.05) rotateX(15deg);
}

.cards .card:hover figcaption,
.cards .card:focus figcaption,
.cards .card:active figcaption {
  transform: none;
}

.cards .card:hover:after,
.cards .card:focus:after,
.cards .card:active:after {
  transform: rotate(25deg);
  top: -40%;
  opacity: 0.15;
}

@media (max-width: 450px) {
  .projects-section {
    padding-top: 2rem;
  }

  .projects-section h2 {
    font-size: 70px;
    font-weight: 400;
    letter-spacing: 12px;
    padding-top: 1rem;
  }

  .projects-section-small-text {
    letter-spacing: 3px;
    font-size: 24px;
    margin-bottom: 2rem;
  }

  .projects-container {
    padding: 15px;
    margin-bottom: 2rem;
  }

  .cards {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  .cards .card {
    height: 270px;
    width: 270px;
  }

}
</style>
