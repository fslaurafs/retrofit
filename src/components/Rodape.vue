<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">
      <v-row class="rodape-linha mb-1" align="center">
        <v-col cols="12" sm="6" md="6" align="center">
          <v-img
            alt="Retrofit Name"
            class="shrink mt-1 rodape-imagem-centro mb-3"
            contain
            lazy-src="./../assets/retrofit-logo-dark.png"
            min-width="250"
            src="./../assets/retrofit-logo-dark.png"
            width="250"
          />
        </v-col>

        <v-col class="rf-containter-center">
          <h4 class="rf-title-h4 text-center">Em breve nas redes sociais:</h4>
          
          <v-row class="my-3 mx-2">
            <div
              v-for="(icon, i) in icons"
              :key="'I' + i"
            >
              <v-btn
                class="mx-1 my-1"
                color="#F2F2F7"
                fab
                small
              >
                <v-icon dark color="#272727">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>
            </div>
          </v-row>

          <h4 class="rf-title-h4 text-center mt-1 mb-n5"><b><span>@retrofitapp</span></b></h4>
        </v-col>
      </v-row>

      <div class="my-5" style="width: 85%;" v-show="false">
        <v-divider color="#17DCD5"/>
      </div>

      <v-row class="rodape-linha my-2" v-show="false"> 
        <v-col cols="12" md="4" sm="4"
          v-for="(link, l) in links" 
          :key="'L' + l"
        >
          <h4 class="text-center mb-2">{{ link.title }}</h4>
          <div class="text-center mb-1">{{ link.link1 }}</div>
          <div class="text-center mb-1">{{ link.link2 }}</div>
          <div class="text-center mb-1">{{ link.link3 }}</div>
        </v-col>
      </v-row>

      <div class="my-5 mb-5" style="width: 85%;">
        <v-divider color="#17DCD5"/>
      </div>

      <v-row class="rodape-linha mb-1">
        <v-col cols="12" md="6" sm="6"
          v-for="(info, f) in infos" 
          :key="'F' + f"
        >
          <div class="text-center mb-n3">{{ info.inform }}</div>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-linkedin" },
        { icon: "mdi-instagram" },
        { icon: "fa-brands fa-tiktok" },
        { icon: "mdi-twitter" },
        { icon: "mdi-facebook" },
      ],

      links: [
        { title: "Institucional", link1: "Sobre nós", src1: "", link2: "Cases de sucesso", src2: "", link3: "", src3: "" },
        { title: "Produto", link1: "IoT", src1: "", link2: "App", src2: "", link3: "Dashboard", src3: "" },
        { title: "Corporativo", link1: "FAQ", src1: "", link2: "Contato", src2: "", link3: "", src3: "" },
      ],

      infos: [
        { inform: "contato@retrofitapp.com"},
        { inform: "Copyright © 2023. Todos os direitos reservados." }
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
  background-color: #272727 !important;
  color: #F2F2F7;
  padding-top: 20px;
}

.rf-title-h4 {
  font-weight: 400;
}

.rf-title-h4 span {
  color: #17DCD5;
}

.rodape-linha {
  width: 65%;
}

@media only screen and (max-width: 800px) {
  .rodape-linha {
    width: 85%;
  }

  .rodape-imagem-centro {
    margin: auto;
  }
}
</style>
