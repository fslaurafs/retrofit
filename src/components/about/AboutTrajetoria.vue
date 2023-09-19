<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">      
      <v-row class="rf-linha-row mb-1">
        <v-col cols="3" md="2" sm="2" style="width: 85%;">
          <v-divider color="#17DCD5" class="rf-divisor-text"/>
        </v-col>

        <v-col cols="6" md="2" sm="2" 
          class="rf-title-h3 text-center"
        >
          Nossa trajetória
        </v-col>        

        <v-col cols="3" md="2" sm="2" style="width: 85%;">
          <v-divider color="#17DCD5" class="rf-divisor-text" />
        </v-col>
      </v-row>

      <v-timeline 
        align-top
        class="mt-5 about-timeline"
        dense
      >
        <v-timeline-item
          color="#17DCD5"
          small
          v-for="(timeline, t) in timelines"
          :key="'T' + t"
        >
          <v-col class="mt-n2">
            <strong>{{ timeline.mes }}</strong>
          </v-col>

          <v-col class="mt-n5">
            {{ timeline.title }}
          </v-col>

          <v-col class="mt-n5 rf-subtitle">
            {{ timeline.text }}
          </v-col>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      timelines: [
        { mes:"2023",     title: "",                     url: "", text: "" },
        { mes:"Abril",    title: "Ideia Inicial",        url: "", text: "" },
        { mes:"Maio",     title: "Desenvolvimento",      url: "", text: "" },
        { mes:"Junho",    title: "Apresentações",        url: "", text: "" },
        { mes:"Julho",    title: "Primeiros protótipos", url: "", text: "" },
        { mes:"Agosto",   title: "Ajustes finais",       url: "", text: "" },
        { mes:"Setembro", title: "Primeira banca",       url: "", text: "" },
      ]
    }
  }
}
</script>


<style scoped>
.rf-linha-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rf-divisor-text {
  border: 3px solid #17DCD5 !important;
  border-radius: 50px;
}

.rf-title-h3 {
  color: #17DCD5; 
  line-height: 0.5rem;
}

.rf-subtitle {
  font-size: 1em;
}

.about-timeline {
  width: 35%;
}

@media only screen and (max-width: 800px) {
  .rf-div-home {
    margin-top: -70px !important;
  }

  .rf-title-h3 {
    line-height: 1.5rem;
  }

  .about-timeline {
    width: 100%;
  }
}
</style>
