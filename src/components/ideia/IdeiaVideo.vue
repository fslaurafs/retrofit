<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">
      <v-row class="rf-linha-row">
        <v-col cols="12" md="6" sm="6">
          <h1 class="rf-title-h1">A ideia</h1>
          <h2 class="rf-subtitle mt-4">O que nos motiva a te motivar...</h2>
          
          <p class="ideia-solucao-texto mt-5">
            Nosso dispositivo coleta os dados na execução do exercício e, através do aplicativo, realiza uma gamificação baseada em pontos com o intuito de estimular a competição entre amigos. 
            <br><br>
            Conecte-se com seus amigos para criarem uma competição entre si. A pontuação do ranking é calculada de acordo com a execução do exercício e a quantidade de calorias gastas. Nosso sistema de recompensas gerarão aos usuários, através de challenges diários, medalhas e cupons de desconto em lojas parceiras.
            <br><br>
            Com o nosso dispositivo coletando dados acerca da realização do movimento do exercício feito, proporcionaremos de forma didática e inovadora a conscientização do movimento correto para se fazer em cada exercício, evitando lesões, gerando mais pontos e mais ganhos fisiológicos.
          </p>
        </v-col>

        <v-col class="ideia-col-youtube">
          <div class="ideia-div-youtube my-auto">
            <iframe 
              class="ideia-video-youtube"
              src="https://www.youtube-nocookie.com/embed/UJI3kML96x4?si=m4ui4-2GmwCEzgs6" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

</script>


<style scoped>
.ideia-solucao-texto {
  text-align: justify;
}

.ideia-col-youtube {
  display: grid;
  place-items: center;
}

.ideia-div-youtube {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ideia-video-youtube {
  width: 525px;
  height: 300px;
}

@media only screen and (max-width: 800px) {
  .ideia-video-youtube {
    width: 325px;
    height: 200px;
  }
}
</style>
