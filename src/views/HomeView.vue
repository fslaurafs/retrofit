<template>
  <div>
    <home-cover />
    <home-image-divider-a class="home-divisor-a" />
    <home-tecnologia class="mt-n5 home-tecnologia" />
    <home-aplicativo class="rf-margin home-aplicativo" />
    <home-image-divider-b class="home-divisor-b" />
    <!-- <home-dashboard /> -->
    <home-avaliacoes class="home-avaliacoes" />
    <home-email />
  </div>
</template>


<script>
  import HomeCover from './../components/home/HomeCover.vue'
  import HomeImageDividerA from '../components/home/HomeImageDividerA.vue'
  import HomeTecnologia from '../components/home/HomeTecnologia.vue'
  import HomeAplicativo from '@/components/home/HomeAplicativo.vue'
  import HomeImageDividerB from '../components/home/HomeImageDividerB.vue'
  import HomeDashboard from '../components/home/HomeDashboard.vue'
  import HomeAvaliacoes from '@/components/home/HomeAvaliacoes.vue'
  import HomeEmail from '@/components/home/HomeEmail.vue'

  export default {
    name: 'Home',

    components: {
      HomeCover, HomeImageDividerA, HomeTecnologia, HomeAplicativo, HomeImageDividerB, HomeDashboard, HomeAvaliacoes, HomeEmail
    },
  }
</script>


<style scoped>
@media only screen and (max-width: 800px) {
  .rf-margin {
    margin-top: -60px;
  }

  .home-divisor-a, .home-tecnologia {
    margin-bottom: -90px;
  }

  .home-aplicativo {
    margin-bottom: -120px;
  }

  .home-divisor-b {
    margin-bottom: -60px;
  }

  .home-avaliacoes {
    margin-bottom: -80px;
  }
}
</style>
