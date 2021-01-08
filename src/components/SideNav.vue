<template>
  <v-navigation-drawer
      v-model="drawer"
      app
  >
    <v-list-item-title class="caption text-center"><router-link to="Albumes">Albumes</router-link></v-list-item-title>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data(){
    return{

    }
  },
  props:{
    drawer: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
