<template>
  <div class="home-divider">
    <v-img 
      class="home-divider-img"
    	lazy-src="../../../public/img/photos/rf-divisor-b.png"
      src="../../../public/img/photos/rf-divisor-b.png"
      max-height="155"
    ></v-img>
  </div>
</template>


<style scoped>
.home-divider {
  height: 155px;
}

@media only screen and (max-width: 800px) {
  .home-divider, .home-divider-img {
    height: 80px;
  }
}
</style>
