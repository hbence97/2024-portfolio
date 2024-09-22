<template>
  <div ref="popupContainer" class="popup-container">
    <p class="popup-text">Have you seen my resume?</p>
    <div @click="popupButtonClicked" class="popup-button-container">
      <div class="popup-button">
        <a class="popup-button-text" href="#">Check it out!</a>
      </div>
    </div>
    <button @click="closeButtonClicked" class="close-button">X</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    popupButtonClicked() {
      const resumeLink = require("../assets/me.png");
      window.open(resumeLink);
      this.$refs.popupContainer.style.display = "none";
    },
    closeButtonClicked() {
      this.$refs.popupContainer.style.display = "none";
    }
  },
};
</script>

<style scoped>
.popup-container {
  width: 100%;
  height: 16rem;
  top: 0;
  background: white;
  border-bottom: 2px solid grey;
}

.popup-text {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 48px;
  font-weight: 700;
}

.popup-button-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.popup-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 220px;
  background: #cbcfd9;
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: skewX(-15deg);
}

.popup-button-text {
  text-decoration: none;
  font-size: 32px;
  color: black;
  font-weight: 500;
  pointer-events: none;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 32px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 450px) {
  .popup-text {
    font-size: 42px;
  }

  .popup-button-container {
    margin-top: 1rem;
  }

  .popup-button {
    height: 60px;
    width: 200px;
  }

  .popup-button-text {
    font-size: 26px;
  }

  .close-button {
    top: 0.5rem;
    right: 1rem;
    font-size: 28px;
  }
}
</style>
