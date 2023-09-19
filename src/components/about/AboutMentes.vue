<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">      
      <v-row class="rf-linha-row">
        <v-col cols="3" md="2" sm="2" style="width: 85%;">
          <v-divider color="#17DCD5" class="rf-divisor-text"/>
        </v-col>

        <v-col cols="6" md="2" sm="2" 
          class="rf-title-h3 text-center" 
          style="color: #272727; line-height: 0.5rem;"
        >
          Nosso Time
        </v-col>        

        <v-col cols="3" md="2" sm="2" style="width: 85%;">
          <v-divider color="#17DCD5" class="rf-divisor-text" />
        </v-col>
      </v-row>

      <div class="mt-4 rf-linha-row rf-title-h2">
        As mentes por trás da ideia
      </div>

      <!--   
      <v-row class="mt-5 about-mentes-lista" justify="center">
        <v-col
          class="mx-1"
          v-for="(mente, m) in mentes"
          :key="'M' + m"
        >
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/giulia.jpeg"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>{{ mente.nome }}</strong>
          </div>

          <v-row class="mt-1 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn elevation="0" tile block>
                <v-icon color="#17DCD5">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn elevation="0" tile block>
                <v-icon color="#17DCD5">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      -->

      <v-row class="mt-5 mb-2 about-mentes-lista" justify="center">
        <v-col class="mx-2 my-1">
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/giulia.jpeg"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>Giulia Bussman</strong>
          </div>

          <v-row class="mt-1 mb-2 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0" 
                rounded 
              >
                <v-icon color="#272727">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0"
                rounded
              >
                <v-icon color="#272727">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mx-2 my-1">
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/gustavo.png"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>Gustavo Yamashita</strong>
          </div>

          <v-row class="mt-1 mb-2 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0" 
                rounded 
              >
                <v-icon color="#272727">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0"
                rounded
              >
                <v-icon color="#272727">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mx-2 my-1">
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/laura.jpg"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>Laura Sorato</strong>
          </div>

          <v-row class="mt-1 mb-2 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0" 
                rounded 
              >
                <v-icon color="#272727">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0"
                rounded
              >
                <v-icon color="#272727">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mx-2 my-1">
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/leandro.png"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>Leandro Lima</strong>
          </div>

          <v-row class="mt-1 mb-2 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0" 
                rounded 
              >
                <v-icon color="#272727">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0"
                rounded
              >
                <v-icon color="#272727">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mx-2 my-1">
          <div class="about-mentes-images">
            <v-img
              class="rounded-circle"
              contain
              max-width="200"
              src="../../../static/mentes/raul.jpg"
            ></v-img>
          </div>

          <div class="text-center rf-text-checks mt-5">
            <strong>Raul Miranda</strong>
          </div>

          <v-row class="mt-1 rf-linha-row about-linha-redes mx-auto" justify="center">
            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0" 
                rounded 
              >
                <v-icon color="#272727">mdi-instagram</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn 
                block 
                color="#F2F2F7"
                elevation="0"
                rounded
              >
                <v-icon color="#272727">mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mentes: [
        { nome: "Giulia Bussmann",   photo: "../../static/mentes/giulia.jpeg", instagram: "", linkedin: "" },
        { nome: "Gustavo Yamashita", photo: "../../../static/mentes/gustavo.png", instagram: "", linkedin: "" },
        { nome: "Laura Sorato",      photo: "../../../static/mentes/laura.jpg", instagram: "", linkedin: "" },
        { nome: "Leandro Lima",      photo: "../../../static/mentes/leandro.png", instagram: "", linkedin: "" },
        { nome: "Raul Miranda",      photo: "../../../static/mentes/raul.jpg", instagram: "", linkedin: "" },
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
  background-color: #17DCD5;
}

.rf-linha-row {
  display: flex;
  align-items: center;
  justify-content: center;

}

.rf-divisor-text {
  border: 3px solid #272727 !important;
  border-radius: 50px;
}

.about-mentes-lista {
  margin-top: 40px !important;
}

.about-mentes-images {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rounded-circle {
  border: 4px solid #272727;
  border-radius: 100%;
}

.about-linha-redes {
  width: 90%;
}

@media only screen and (max-width: 800px) {
  .rf-div-home {
    margin-top: -70px !important;
  }
}
</style>
