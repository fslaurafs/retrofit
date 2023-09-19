<template>
  <div>
    <about-cover class="about-cover"/>
    <about-proposito class="about-proposito" />
    <about-mentes class="about-mentes" />
    <about-trajetoria class="about-trajetoria" />
  </div>
</template>


<script>
import AboutCover from '../components/about/AboutCover.vue'
import AboutProposito from '../components/about/AboutProposito.vue'
import AboutMentes from '../components/about/AboutMentes.vue'
import AboutTrajetoria from '@/components/about/AboutTrajetoria.vue'

export default {
  name: 'About',

  components: { AboutCover, AboutProposito, AboutMentes, AboutTrajetoria },
}
</script>


<style scoped>
.about-cover, .about-proposito {
  margin-bottom: 20px;
}

.about-trajetoria {
  margin-bottom: 15px;
}

@media only screen and (max-width: 800px) {
  .about-mentes {
    margin-bottom: 50px;
  }
}
</style>
