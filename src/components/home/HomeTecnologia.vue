<template>
  <div class="rf-div-home">
    <v-container>
      <v-row>
        <v-col cols="6" md="4" sm="12">
          <v-card
            class="rounded-xl rounded-tl-0 rf-cards-home"
            elevation="24"
            height="450"
            max-height="450"
            max-width="350"
            min-width="350"
            v-show="!$vuetify.breakpoint.xsOnly"
          >
            <v-img
              class="ma-auto"
              contain
              lazy-src="../../../public/img/photos/home/rf-iot.png"
              src="../../../public/img/photos/home/rf-iot.png"
              width="270"
              height="450"
            ></v-img>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="12" md="7" offset-md="1">
          <div>
            <h2 class="rf-title-h2 mt-1 mb-6">
              Tecnologia RetroFit
            </h2>

            <div class="my-6 pt-3 rf-subtitle">
              Obtenha máximo aproveitamento de seus exercícios. Com medições precisas você evita lesões e aprende de maneira divertida.
            </div>
            
            <div class="mt-6 pt-6">
              <v-row 
                class="rf-checks-home mb-4"
                v-for="(check, c) in checks"
                :key="'C' + c"
              >
                <v-icon 
                  class="mr-2 ml-1"
                  color="#17DCD5"
                >
                  mdi-check-bold
                </v-icon>
                <div class="rf-text-checks">{{ check.text }}</div>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      checks: [
        { text: "Gráficos de movimento preciso" },
        { text: "Obtenha insights dos seus dados" },
        { text: "Acompanhe suas cargas e tempos" },
        { text: "Planeje sua evolução" },
        { text: "Dispute com seus amigos" },
        { text: "Busque o seu melhor" },
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
  margin: 20px 20% 0 20%;
  padding: 100px 0 20px 0;
}

.rf-title-h2 {
  display: grid;
  place-items: center;
}

@media only screen and (max-width: 800px) {
  .rf-div-home {
    margin: 0 5%;
  }
}
</style>
