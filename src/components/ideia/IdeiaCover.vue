<template>
  <div class="rf-div-home">
    <v-container class="rf-containter-center">
      <v-row class="rf-linha-row" align="center">
        <v-col>
          <h4 class="ideia-cover">Ideia</h4>

          <h1 class="rf-title-h1">
            CONECTOU, <br>
            COMPETIU, <br>
            MOTIVOU.
          </h1>
        </v-col>
        <v-col v-show="!$vuetify.breakpoint.xsOnly"></v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

</script>


<style scoped>
.rf-div-home {
  background-image: url("../../../public/img/photos/ideia/rf-ideia-cover.png");
  background-position: center;
  background-size: cover;
  display: grid;
  height: 400px;
  place-items: center;
}

.rf-title-h1, .ideia-cover {
  color: #F2F2F7;
}

@media only screen and (max-width: 800px) {
  .rf-div-home {
    background-position: left;
  }
}
</style>
