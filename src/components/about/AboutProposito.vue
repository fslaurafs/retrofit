<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">      
      <v-row class="rf-linha-row">
        <v-col cols="12" md="6" sm="6">
          <h1 class="rf-title-h1">Propósito</h1>
          <h2 class="rf-subtitle mt-4">O que nos motiva a te motivar...</h2>
          
          <p class="about-proposito-text mt-5">
            <strong>Retrofit</strong>, do inglês <i>modernizar</i>, significa adicionar um componente ou acessório a algo que não o possuía quando foi fabricado.

            <br><br>

            Nossa solução é oferecer dispositivos que se vão conectar aos equipamentos existentes na academia, permitindo que os alunos possam rastrear seu progresso, competir entre amigos e receber orientação sobre a movimentação correta para cada exercício. Isso não só causará um impacto positivo na vida dos alunos, mas também ajudará as academias a se manterem competitivas em um mercado em constante evolução, trazendo modernidade aos equipamentos por um preço acessível. 
          </p>
        </v-col>

        <v-col cols=1></v-col>

        <v-col v-show="!$vuetify.breakpoint.xsOnly" class="text-center">
          <v-img
            class="mt-3 mx-auto"
            contain
            lazy-src="../../../public/img/photos/home/rf-cover.png"
            max-width="380"
            src="../../../public/img/photos/home/rf-cover.png"
            v-show="!$vuetify.breakpoint.xsOnly"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

</script>


<style scoped>
.about-proposito-text {
  text-align: justify;
}

.about-image-proposito {
  margin-left: 100px;
}
</style>
