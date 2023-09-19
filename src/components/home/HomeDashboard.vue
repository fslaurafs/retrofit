<template>
  <div class="rf-div-home">
    <div class="home-dashboard-margin">
      <v-container>
        <v-row>
          <v-col cols="6" md="4" sm="12">
            <v-img
              height="450"
              max-width="350"
              max-height="450"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              v-show="!$vuetify.breakpoint.xsOnly"
              width="350"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="12" md="7" offset-md="1">
            <div>
              <h2 class="rf-title-h2 mt-1 mb-6">
                Dashboard RetroFit
              </h2>

              <div class="my-6 pt-3 rf-subtitle">
                Tenha o controle de sua academia através de nosso dashboard. Acompanhe o status de todos os seus dispositivos IOT, bem como de seus alunos e treinos.
              </div>

              <div class="mt-6 pt-6">
                <v-row 
                  class="rf-checks-home mb-4"
                  v-for="(check, c) in checks"
                  :key="'C' + c"
                >
                  <v-icon 
                    class="mr-2 ml-1"
                    color="#272727"
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      checks: [
        { text: "Dashboard objetivo e amigável" },
        { text: "Acompanhe os status dos IoTs" },
        { text: "Esteja preparado para imprevistos" },
        { text: "Encomende mais dispositivos" },
        { text: "Acompanhe os treinos de seus alunos" },
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
 background-color: #17dcd5 !important;
 padding: 100px 0 100px 0;
 color: #272727;
}

.home-dashboard-margin {
  margin: 20px 20% 0 20%;
}

.rf-title-h2 {
  display: grid;
  place-items: center;
}

@media only screen and (max-width: 800px) {
  .home-dashboard-margin {
    margin: 0 5%;
  }
}
</style>
