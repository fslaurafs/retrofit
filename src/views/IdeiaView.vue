<template>
  <div>
    <ideia-cover />
    <ideia-video />
  </div>
</template>


<script>
  import IdeiaCover from '../components/ideia/IdeiaCover.vue'
  import IdeiaVideo from '../components/ideia/IdeiaVideo.vue'

  export default {
    name: 'Ideia',

    components: { IdeiaCover, IdeiaVideo },
  }
</script>


<style scoped>

</style>
