<template>
  <router-view></router-view>
  <FooterComponent />
</template>

<script>

import FooterComponent from './components/Footer.vue'
export default {
  name: 'App',
  components: { FooterComponent }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

@keyframes transition {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
  font-family: "Poppins", sans-serif;
  background-color: #f1f3f5;
}

.container {
  max-width: 600px;
  margin: 30px auto;
  height: 90vh;
  background-color: #fff;
  box-shadow: 0 4px 4px #adb5bd40;
  padding: 30px;
  border-radius: 5px;
}

form, .about, .alert, .todo{
  animation: transition .5s;
}


.btn {
  padding: 8px 16px;
  font-size: 15px;
  font-family: inherit;
}

.form-control {
  margin-bottom: 20px;
}

footer {
    position: absolute;
    bottom: 10vh
}
</style>
