<template>
  <div>
    <Header @e-enviar-drawer="drawer = !drawer"></Header>
    <side-nav :drawer="drawer"></side-nav>

    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src


import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";


export default {
  name: 'Home',
  components: { Header, SideNav, Footer},
  data: () => ({
    drawer: false
  }),

}
</script>
