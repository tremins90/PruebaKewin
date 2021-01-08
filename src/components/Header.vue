<template>
  <v-app-bar app >
    <v-app-bar-nav-icon @click="enviarDrawer()"  ></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
name: "Header",
  methods:{
    enviarDrawer:function (){
      this.$emit('e-enviar-drawer', true)
    }
  }
}
</script>

<style scoped>

</style>
