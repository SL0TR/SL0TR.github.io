<template>
  <div class="home">
    <h1>Hi, I’m  ohaimin Islam, </h1>
    <h2> Web Developer.</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../src/sass/style.scss';

h1 {
  font-size: 4rem;
  color: $white;
  font-family: $mont;
}

h2 {
  font-size: 3rem;
  color: $white;
  font-family: $merri;
}
</style>
