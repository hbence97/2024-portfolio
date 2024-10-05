<template>
  <div class="nav-container">
    <nav>
      <svg ref="svgRef" @click="menuClicked" class="hamburger-menu hamburger-menu-rotate" viewBox="0 0 100 100" width="80"
        onclick="this.classList.toggle('active')">
        <path class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <path class="line middle" d="m 30,50 h 40" />
        <path class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </svg>
      <ul v-show="menuOpen" class="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.closeMenu);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenu);
  },
  methods: {
    menuClicked() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target) && this.menuOpen) {
        this.menuOpen = false;
        this.$refs.svgRef.classList.toggle("active");
      }
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: absolute;
  z-index: 10;
}

svg {
  position: fixed;
  top: 0.7rem;
  right: 0;
}

.nav-list {
  position: fixed;
  top: 2rem;
  right: 4rem;
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: white;
  border: 2px solid #cbcfd9;
  border-radius: 8px;
}

li {
  list-style: none;
  padding: 1rem 0.8rem;
}

a {
  border-radius: 10px;
  color: black;
  font-weight: 600;
  font-size: 20px;
  font-style: normal;
  letter-spacing: 3px;
  text-decoration: none;
}

li:first-child,
li:nth-child(2),
li:nth-child(3),
li:nth-child(4) {
  border-bottom: 2px solid #cbcfd9;
}

li:has(> a:hover) {
  background: #cbcfd9;
  transition: background 0.35s;
}

li:has(> a:hover) a {
  color: black;
  transition: color 0.35s;
}

.hamburger-menu {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamburger-menu-rotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.hamburger-menu .top {
  stroke-dasharray: 40 139;
}

.hamburger-menu .bottom {
  stroke-dasharray: 40 180;
}

.hamburger-menu.active .top {
  stroke-dashoffset: -98px;
}

.hamburger-menu.active .bottom {
  stroke-dashoffset: -138px;
}

/* 2560 x 1440 */
@media (min-width: 2550px) {
  .hamburger-menu {
    width: 100px;
  }

  .nav-list {
    top: 2.5rem;
    right: 5rem;
    width: 220px;
  }

  a {
    font-size: 26px;
  }

}

/* mobile */
@media (max-width: 450px) {
  svg {
    top: 0;
    right: -0.4rem;
  }

  .hamburger-menu {
    width: 70px;
  }
}
</style>
