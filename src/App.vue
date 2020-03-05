<template>
  <v-container>
    <v-app>
      <v-app-bar app class="header_block static" :absolute="true">
        <div class="header_logo d-flex align-center">Expto</div>

        <v-spacer></v-spacer>

        <div class="header_menu">
          <v-btn href="/blocks" target="_blank" text>
            <span class="mr-2">Blocks</span>
          </v-btn>

          <v-btn href="/wallet" target="_blank" text>
            <span class="mr-2">Wallet</span>
          </v-btn>

          <v-btn href="/buy_crypto" target="_blank" text>
            <span class="mr-2">Buy crypto</span>
          </v-btn>

          <v-btn href="/help" target="_blank" text>
            <span class="mr-2">Help</span>
          </v-btn>
        </div>
      </v-app-bar>

      <v-content>
        <router-view ref="child"></router-view>
      </v-content>
    </v-app>
  </v-container>
</template>

<style scoped>
   .header_block .header_logo {
     font-size: 24px;
     font-weight: bold;
   }

  .header_menu .v-btn {
    font-size: 12px;
  }

   .theme--light.v-application {
     color: #012839;
   }
</style>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({})
}
</script>
