<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <vue-particles
        class="vue-particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../src/sass/style.scss';

#app {
  background-color: #0B0C10;
  height: 100vh;
  overflow: hidden;
}

.vue-particles {
  height: 100%;
  // z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

</style>
