<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center mb-n3">
      <div class="rf-title-h3">
        Receba novidades e promoções exclusivas da RetroFit por email.
      </div>

      <v-row class="home-email-cadastro mt-1">
        <v-text-field
          class="my-6 rounded-pill"
          color="#272727"
          light
          outlined
          placeholder="Informe aqui seu email."
        >
          <v-btn 
            class="rounded-pill home-email-botao"
            color="transparent"
            elevation="0"
            large
            slot="append"
          >
            Cadastrar
          </v-btn>
        </v-text-field>

      </v-row>

    </v-container>
  </div>
</template>


<style scoped>
.rf-div-home {
 background-color: #17dcd5 !important;
 padding-bottom: 20px;
 color: #272727;
}

.home-email-cadastro {
  width: 65% !important;
}

.home-email-botao {
  margin-top: -11px;
}

@media only screen and (max-width: 800px) {
  .home-email-cadastro {
    width: 95% !important;
  }
}
</style>