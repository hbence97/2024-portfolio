<template>
  <nav>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About Me</a>
      </li>
      <li>
        <a href="#">Skills / Experiences</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
nav {
  text-align: center;
  display: inline-block;
  position: relative;
  top: 0.7rem;
  left: 50%;
  transform: translate(-50%);
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2.5px solid black;
}

li {
  list-style: none;
  padding: 1rem 0.8rem;
}

a {
  border-radius: 10px;
  color: black;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 24px;
  font-style: normal;
  letter-spacing: 3px;
  text-decoration: none;
}

li:has(> a:hover) {
  background: black;
  transition: background 0.35s;
}

li:has(> a:hover):first-child {
  border-top-left-radius: 10px;
}

li:has(> a:hover):last-child {
  border-top-right-radius: 10px;
}

li:has(> a:hover) a {
  color: white;
  transition: color 0.35s;
}
</style>
