<template>
  <div class="rf-font-family" id="rf-home">
    <v-app-bar
      color="#17DCD5"
      dark
      elevation="0"
    >
      <v-spacer v-show="!$vuetify.breakpoint.xsOnly"/>
      
      <v-img
        alt="Retrofit Name"
        class="shrink mt-1"
        contain
        min-width="150"
        src="./../assets/retrofit-logo.png"
        width="100"
      />

      <v-spacer/>
      <v-spacer/>

      <v-app-bar-nav-icon @click="drawer = true" v-show="$vuetify.breakpoint.xsOnly"></v-app-bar-nav-icon>

      <v-btn
        class="mx-1"
        :color="btncolor"
        elevation="0"
        light
        rounded
        v-show="!$vuetify.breakpoint.xsOnly"
        v-for="(item, i) in items"
        :key="'I' + i"
        :to="item.url"
      >{{ item.name }}</v-btn>

      <v-btn
        class="mx-1"
        color="white"
        elevation="6"
        href="/login"
        light
        rounded
        v-show="false"
      >
        Login
      </v-btn>

      <v-btn
        class="mx-1"
        icon
        v-show="!$vuetify.breakpoint.xsOnly"
        v-if="false"
        @click="changeTheme"
        :color="colorThema2"
      >
        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-3</v-icon>
        <v-icon v-if="$vuetify.theme.dark === false">mdi-brightness-5</v-icon>
      </v-btn>

      <v-spacer v-show="!$vuetify.breakpoint.xsOnly"/>
    </v-app-bar>

    <v-navigation-drawer
      app
      right
      temporary
      v-model="drawer"
    >
      <v-list
        dense
        nav
        shaped
      >
        <v-list-item-group
          active-class="cyan--text text"
          v-model="group"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="'I' + i"
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-row class="pa-4">
          <v-col>
            <v-btn
              icon
              @click="changeTheme"
              :color="colorThema"
              v-show="false"
            >
              <v-icon v-if="$vuetify.theme.dark">mdi-brightness-3</v-icon>
              <v-icon v-if="$vuetify.theme.dark === false">mdi-brightness-5</v-icon>
            </v-btn>
          </v-col>
          
          <v-col>
            <v-btn
              block
              color="#17DCD5"
              elevation="6"
              href=""
              light
              rounded
              v-show="false"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      thema: false,
      colorThema: '',
      colorThema2: '',
      drawer: false,
      group: null,
      btncolor: "#17DCD5",
      
      items: [
        { icon: 'mdi-home',              comp: 'home',          url: '/',                name: 'Home' },
        // { icon: 'mdi-one-up',         comp: 'rf-tecnologia', url: '/#rf-tecnologia',  name: 'IoT' },
        // { icon: 'mdi-cellphone',      comp: 'rf-aplicativo', url: '/#rf-aplicativo',  name: 'App' },
        // { icon: 'mdi-view-dashboard', comp: 'rf-dashboard',  url: '/#rf-dashboard',   name: 'Dashboard' },
        // { icon: 'mdi-comment-quote',  comp: 'rf-avaliacoes', url: '/#rf-avaliacoes',  name: 'Avaliações' },
        { icon: 'mdi-lightbulb-on',      comp: 'rf-ideia',      url: '/retrofit-ideia',  name: 'A ideia' },
        { icon: 'mdi-information',       comp: 'rf-about',      url: '/retrofit-about',  name: 'Sobre' },
      ],
    }
  },

  methods: {
    changeTheme() {
      if (this.thema === false) {
        this.thema = true
        this.colorThema = '#17DCD5'
        this.colorThema2 = '#272727'
      } else {
        this.thema = false
        this.colorThema = ''
        this.colorThema2 = ''
      }

      this.$vuetify.theme.dark = this.thema
    }
  },
}
</script>


<style scoped>
.v-btn--active.no-active:not(:hover)::before {
  opacity: 0 !important;
}
</style>
