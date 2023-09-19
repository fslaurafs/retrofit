<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">
      <v-row class="rf-linha-row">
        <v-col>
          <h1 class="rf-title-h1">
            CONECTOU, <br>
            COMPETIU, <br>
            MOTIVOU.
          </h1>

          <h4 class="rf-title-h4">
            Melhorando a experiência do usuário, modernizando de forma acessível as academias do Brasil. <br>
            Crie rotinas e acompanhe o progresso com os amigos.
          </h4>

          <p class="mb-n1"> Em breve no seu celular. </p>

          <v-row no-gutters>
						<div
              class="mt-4 mr-5"
              v-for="(down, d) in downloads" 
              :key="'D' + d"
            >
              <v-btn 
                class="playstore-button"
                color="#272727"
                elevation="6"
                rounded
              >
                <v-icon large color="#F2F2F7">{{down.icon}}</v-icon>
                
                <span class="texts">
                  <span class="text-1">{{down.text1}}</span>
                  <span class="text-2">{{down.text2}}</span>
                </span>
              </v-btn>
            </div>
          </v-row>
        </v-col>

        <v-col>
          <v-img
            class="home-image-cover"
            contain
            lazy-src="../../../public/img/photos/home/rf-cover.png"
            max-width="420"
            src="../../../public/img/photos/home/rf-cover.png"
            v-show="!$vuetify.breakpoint.xsOnly"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      downloads: [
        {icon: "mdi-google-play", text1: "DISPONÍVEL NO", text2: "Google Play"},
        {icon: "mdi-apple", text1: "DISPONÍVEL NA", text2: "App Store"},
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
  background: hsla(240, 24%, 96%, 0);
  background: linear-gradient(90deg, hsla(240, 24%, 96%, 0) 25%, hsla(178, 81%, 48%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(240, 24%, 96%, 0) 25%, hsla(178, 81%, 48%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(240, 24%, 96%, 0) 25%, hsla(178, 81%, 48%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F2F2F7", endColorstr="#17DCD5", GradientType=1 );
}

.rf-title-h1 {
  margin: 0 0 10px 0;
  width: 75%;
}

.rf-title-h4 {
  margin: 0 0 30px 0;
  width: 75%;
}

.home-image-cover {
  margin-left: 40px;
}

.playstore-button {
  padding: 0.625rem 1.5rem !important;
  height: 60px !important;
}

.texts {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
  color: #F2F2F7;
}

.text-1 {
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-2 {
  font-weight: 600;
}

@media only screen and (max-width: 800px) {
  .rf-linha-row {
    width: 85%;
  }

  .rf-containter-center {
    margin: 0 -5%;
  }

  .home-image-cover {
    margin-left: 0;
  }
}
</style>
