<template>
  <v-card>
    <v-card-title class="justify-center">Informacion De Usuario</v-card-title>
    <v-card v-show="mostrarInformacionUsuario"
            :disabled="false">
    </v-card>
  </v-card>

</template>

<script>
export default {
name: "InformacionUsuario",
  data() {
    return {
      mostrarInformacionUsuario: false,
    }
  },
  props: {
    item: {
      default: null,
    },
  },
  watch: {
    item(n){
      if (n  != null){
        this.mostrarInformacionUsuario = true
      }else{
        this.mostrarInformacionUsuario = false
      }
    }
  }
}
</script>

<style scoped>

</style>
