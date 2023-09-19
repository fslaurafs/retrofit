<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">
      <h2 class="rf-title-h2">
        Confira algumas opiniões de nossos usuários!
      </h2>

      <v-row class="my-6">
        <v-col
          class="mx-6"
          v-for="(card, c) in cards"
          :key="'C' + c"
        >
          <v-card
            class="mx-auto my-6 pa-2 home-avaliacoes-cards d-flex align-content-space-between flex-wrap"
            elevation="24"
            height="350px"
            max-width="300px"
            shaped
          >
            <div>
              <v-card-title>
                <v-list-item-avatar color="#17DCD5">
                  <v-img
                    alt=""
                    class="elevation-6"
                    :lazy-src="card.avatar"
                    :src="card.avatar"
                  ></v-img>
                </v-list-item-avatar>
    
                <v-list-item-content>
                  <v-list-item-title>{{ card.user }}</v-list-item-title>
                </v-list-item-content>
              </v-card-title>
              
              <v-card-title class="text-h6 mt-n4"> {{ card.title }} </v-card-title>
              <v-card-text> {{ card.desc }} </v-card-text>
            </div>
            
            <div style="width: 100%;">
              <v-card-actions>
                <v-list-item> {{ card.dia }} </v-list-item>
                <v-list-item>
                  <v-row>
                    <v-icon v-for="n in 5" :key="'N' + n" color="#17DCD5"> 
                      mdi-star 
                    </v-icon>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cards: [
        { 
          avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light", 
          user: "Persoal Isabela Isaac", 
          title: "Só a RetroFit tem!", 
          desc: "Experincia incrível para o usuário e por um preço baixíssimo!", 
          dia: "01/05/2023" 
        },
        { 
          avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light", 
          user: "Personal Bruna Stori", 
          title: "Produto genial!", 
          desc: "Já vi muitos aplicativos, mas nenhum tão completo como o da RetroFit, com certeza faz toda diferença!", 
          dia: "05/06/2023" 
        },
        { 
          avatar: "https://dtda4cv2md3ne.cloudfront.net/image/filename/4576668/x_lg_ITrNztCQyhAg0m0WOd4R1OYrz05Wzxuq.jpeg", 
          user: "Target Academia", 
          title: "Produto genial!", 
          desc: "O que a RetroFit faz para melhorar a experiência dos meus alunos é incrível!", 
          dia: "06/09/2023" 
        },
        { 
          avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light", 
          user: "Valdir Miranda", 
          title: "Ideia sensacional!", 
          desc: "Já tentei ter frequência na academia mas eu sou competitivo e não tinha ninguém pra competir. Com esse App vou voltar a ser saudável!", 
          dia: "13/09/2023" 
        },
      ]
    }
  }
}
</script>


<style scoped>
.rf-div-home {
  padding: 100px 0 100px 0;
}
.rf-title-h2 {
  text-align: center;
}
</style>
