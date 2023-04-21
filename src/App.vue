<template>
  <nav class="navigation">
    <div class="navigation__links">
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <my-dropdown></my-dropdown>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import MyDropdown from "@/components/UI/MyDropdown.vue";
</script>