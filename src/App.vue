<template>
  <v-app>    
    <Tools class="tools-margin-top"></Tools>

    <v-main class="rf-font-family">  
      <router-view/>
    </v-main>

    <Rodape></Rodape>

  </v-app>
</template>


<script>
import Tools from './components/Tools.vue';
import Rodape from './components/Rodape.vue';

export default {
  name: 'App',

  components: { Tools, Rodape },

  // Nme na guia do navegador
  watch: {
    $route: {
      immediate: true,
      handler(to,) {
        document.title = to.meta.title || 'RetroFit';
      }
    },
  },
};
</script>


<style>
.rf-font-family {
  font-family: 'Poppins', sans-serif;
}

.rf-title-h1 {
  font-size: 3em;
  font-weight: 700;
  line-height: 1em;
}

.rf-title-h2 {
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1em;
  text-align: center;
}

.rf-title-h3 {
  font-size: 1.2em;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
}

.rf-title-h4 {
  font-weight: 600;
}

.rf-subtitle {
  font-size: 1.3em;
  font-weight: 300;
  line-height: 1.1em;
}

.rf-text-checks {
  font-size: 1em;
  font-weight: 500;
}

.rf-linha-row {
  width: 65%;
}

.rf-containter-center {
  display: grid;
  place-items: center;
}

.rf-margin {
  margin-top: 0;
}

.rf-div-home {
  padding: 40px 0 40px 0;
}

.rf-cards-home {
  background: hsla(178, 81%, 48%, 1);
  background: linear-gradient(90deg, hsla(178, 81%, 48%, 0.75) 0%, hsla(240, 24%, 96%, 0) 90%);
  background: -moz-linear-gradient(90deg, hsla(178, 81%, 48%, 0.75) 0%, hsla(240, 24%, 96%, 0) 90%);
  background: -webkit-linear-gradient(90deg, hsla(178, 81%, 48%, 0.75) 0%, hsla(240, 24%, 96%, 0) 90%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#17DCD5", endColorstr="#F2F2F7", GradientType=1 );
}

.rf-checks-home {
  align-items: center;
}

.tools-margin-top {
  margin-top: 50px;
}

@media only screen and (max-width: 800px) {
  .rf-linha-row {
    width: 90%;
  }
}
</style>
